const queryBuilder = (obj?: {
  [key: string]: string | number | string[] | undefined | null;
}) => {
  if (!obj) return '';

  const query = Object.entries(obj).reduce((acc, [key, value], index) => {
    if (
      value === undefined ||
      value === null ||
      (typeof value === 'string' && value.length < 1)
    )
      return acc;

    if (index !== 0) {
      return acc + `&${key}=${value}`;
    }
    return acc + `${key}=${value}`;
  }, '');

  return !!query ? `?${query}` : '';
};

export default queryBuilder;
