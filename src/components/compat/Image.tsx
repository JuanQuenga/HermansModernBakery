import type { CSSProperties, ImgHTMLAttributes } from "react";

type ImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "height" | "src" | "width"
> & {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
};

export default function Image({
  src,
  alt,
  width,
  height,
  fill,
  priority,
  style,
  ...props
}: ImageProps) {
  const imageStyle: CSSProperties = fill
    ? {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        ...style,
      }
    : style ?? {};

  return (
    <img
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      loading={priority ? "eager" : props.loading}
      decoding="async"
      style={imageStyle}
      {...props}
    />
  );
}
