import { Area } from 'react-easy-crop';

class ImageService {
  private createImageElement(url: string): Promise<HTMLImageElement> {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.src = url;

      image.addEventListener('load', resolve.bind(null, image));
      image.addEventListener('error', (error) => reject(error));
    });
  }

  public async getCroppedImageUrl(src: string, crop: Area): Promise<string> {
    const image = await this.createImageElement(src);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;

    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0);

    const data = ctx.getImageData(crop.x, crop.y, crop.width, crop.height);

    canvas.width = crop.width;
    canvas.height = crop.height;

    ctx.putImageData(data, 0, 0);

    return new Promise<string>((resolve, reject) => {
      canvas.toBlob((file) => {
        file
          ? resolve(URL.createObjectURL(file))
          : reject(new Error('file is undefined'));
      }, 'image/jpeg');
    });
  }
}

export default ImageService;
