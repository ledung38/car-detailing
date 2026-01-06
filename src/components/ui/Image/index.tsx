"use client";

import NextImage, { ImageProps } from "next/image";
import React, { memo, useState } from "react";

import ImageFallback from "@/lib/assets/images/fallback.webp";

type Props = ImageProps & {
  lazy?: boolean;
};

const Image = (props: Props) => {
  const { lazy = true, ...imageProps } = props;
  const isHttps = props.src?.toString()?.startsWith("https");
  const [imgSrc, setImgSrc] = useState(props.src);
  const [isError, setIsError] = useState(false);

  if (!isHttps) {
    return (
      <NextImage
        {...imageProps}
        loading={lazy ? "lazy" : "eager"}
        quality={imageProps.quality || 75}
      />
    );
  }
  return (
    <NextImage
      {...imageProps}
      src={imgSrc}
      loading={lazy ? "lazy" : "eager"}
      quality={imageProps.quality || 75}
      onError={() => {
        setImgSrc(ImageFallback.src);
        setIsError(true);
      }}
      style={{
        ...props.style,
        ...(isError ? { objectFit: "cover" } : {}),
      }}
    />
  );
};

export default memo(Image);
