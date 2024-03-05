import { ComponentProps } from "react";

export const TopRightArrowHeadIcon: React.FC<ComponentProps<"svg">> = (props) => {
  return (
    <svg
      viewBox="0 0 47 46"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M47 45.659C46.6119 45.6206 46.1344 45.5495 45.8495 45.2771C42.7605 42.3238 39.6986 39.3421 36.6356 36.3618C33.0306 32.8541 29.4388 29.3327 25.8283 25.8306C20.3224 20.4902 14.8057 15.161 9.29309 9.82755C6.56183 7.18509 3.82788 4.54536 1.09929 1.90014C0.785684 1.59614 0.498803 1.26458 0 0.733193C0.692512 0.648461 1.14108 0.547218 1.58994 0.545884C5.7174 0.53361 9.84498 0.548545 13.9723 0.52456C14.4258 0.521925 14.8782 0.324924 15.2754 0.109034C25.797 -7.45058e-09 36.3743 0 47 0C47 15.1776 47 30.3552 47 45.659Z" />
    </svg>
  );
};