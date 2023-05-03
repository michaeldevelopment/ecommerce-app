import * as React from "react";
import { iconSVGProps } from "../types/componentTypes";

export default function SuccessIcon(props: iconSVGProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={32} cy={32} r={32} fill="#D87D4A" />
        <path
          stroke="#FFF"
          strokeWidth={4}
          d="m20.754 33.333 6.751 6.751 15.804-15.803"
        />
      </g>
    </svg>
  );
}
