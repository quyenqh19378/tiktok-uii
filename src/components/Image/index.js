import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

// const Image = forwardRef(({ ...props }, ref) => {
//     // eslint-disable-next-line jsx-a11y/alt-text
//     return <img ref={ref} {...props} />;
// });

// export default Image;

function Image({ src, alt, fallback: customFallback = images.noImage, className, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
