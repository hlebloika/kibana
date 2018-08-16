// converts the output of the font function to a flot font spec
// for font spec, see https://github.com/flot/flot/blob/master/API.md#customizing-the-axes
const defaultSpec = {
  size: 14,
  lHeight: 21,
  style: 'normal',
  weight: 'normal',
  family: '"Open Sans", Helvetica, Arial, sans-serif',
  color: '#000',
};

export const getFontSpec = argFont => {
  if (!argFont || !argFont.spec) return defaultSpec;

  const { fontSize, lineHeight, fontStyle, fontWeight, fontFamily, color } = argFont.spec;
  const size = fontSize && Number(fontSize.replace('px', ''));
  const lHeight = lineHeight && Number(lineHeight.replace('px', ''));

  return {
    size: !isNaN(size) ? size : defaultSpec.size,
    lHeight: !isNaN(size) ? lHeight : defaultSpec.lHeight,
    style: fontStyle || defaultSpec.style,
    weight: fontWeight || defaultSpec.weight,
    family: fontFamily || defaultSpec.family,
    color: color || defaultSpec.color,
  };
};
