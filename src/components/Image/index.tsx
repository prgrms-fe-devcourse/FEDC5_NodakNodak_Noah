const Image = ({
  src,
  width,
  height,
  alt,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const imageStyle = {
    display: 'block',
    width,
    height,
    ...props.style,
  };

  return (
    <img src={src} alt={alt} style={{ ...imageStyle, objectFit: 'cover' }} />
  );
};

export default Image;
