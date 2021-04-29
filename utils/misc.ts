export const getZeroPadValue = (value: number): string =>
  value < 10 ? `0${value}` : String(value)
