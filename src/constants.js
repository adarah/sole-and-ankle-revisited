export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  laptopMax: 1300,
  tabletMax: 950,
  phoneMax: 600,
};

export const QUERIES = {
  laptopOrSmaller: `(max-width: ${BREAKPOINTS.laptopMax/16}rem)`,
  tabletOrSmaller: `(max-width: ${BREAKPOINTS.tabletMax/16}rem)`,
  phoneOrSmaller: `(max-width: ${BREAKPOINTS.phoneMax/16}rem)`,
}