export const merge = (...css) => {
  return css.filter((entry) => entry).join(" ");
};
