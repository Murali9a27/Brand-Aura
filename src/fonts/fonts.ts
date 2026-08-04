import localFont from "next/font/local";

export const csCardiaFont = localFont({
  src: [
    {
      path: "./cscardia-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./cscardia-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./cscardia-reverseitalic.otf",
      weight: "500",
      style: "italic",
    },
    
  ],
  variable: "--font-cscardia",
  display: "swap",
});