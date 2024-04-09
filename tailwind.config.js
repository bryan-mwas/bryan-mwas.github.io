import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export const content = [
  `./src/pages/**/*.{js,jsx,ts,tsx}`,
  `./src/components/**/*.{js,jsx,ts,tsx}`,
  flowbite.content(),
];
export const theme = {
  extend: {},
  fontFamily: {
    sans: ['"Overpass"'],
  },
};
export const plugins = [flowbite.plugin()];
