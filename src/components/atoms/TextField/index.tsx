import { forwardRef, ComponentPropsWithoutRef, ForwardedRef } from 'react';
import { css } from '@emotion/react';

type Props = ComponentPropsWithoutRef<'input'> &
  ComponentPropsWithoutRef<'textarea'>;

const TextField = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  (baseProps, ref) => {
    const props = {
      ...baseProps,
      css: styles.inner,
    };

    return (
      <div css={styles.base}>
        {props.rows ? (
          <textarea ref={ref as ForwardedRef<HTMLTextAreaElement>} {...props} />
        ) : (
          <input ref={ref as ForwardedRef<HTMLInputElement>} {...props} />
        )}
      </div>
    );
  }
);

const styles = {
  base: css`
    position: relative;
    font-size: 16px;
  `,
  inner: css`
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 8px 16px;
    display: block;
    width: 100%;
    line-height: 1.5;
    transition: all 0.3s;
    ::placeholder {
      color: #ccc;
    }
  `,
};

TextField.displayName = 'TextField';
export default TextField;
