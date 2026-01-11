/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,scss}',
    './src/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // 禁用一些在小程序中不支持的样式
    preflight: false,
    // 禁用不支持的伪元素和选择器
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
  },
}

