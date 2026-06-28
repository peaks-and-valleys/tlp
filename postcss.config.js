import postcssoklabFunction from '@csstools/postcss-oklab-function';

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: [postcssoklabFunction({ preserve: true })]
};
