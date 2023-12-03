const rootStyles = getComputedStyle(document.documentElement);

export const getCssVariablesValue = cssVariable => {
  return rootStyles.getPropertyValue(cssVariable);
};
