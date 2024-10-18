import React from "react";
import styles from "./profileImage.module.scss";

type ProfileImageProps = {
  src: string;
  size: number; // size in pixels
};

export default function ProfileImage({
  src,
  size,
}: ProfileImageProps) {
  return (
    <div
      className={styles.iconContainer}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
      }}
    >
      <img src={src} alt="Profile Icon" width={size} height={size}  className={styles.iconImage} />
    </div>
  );
}
