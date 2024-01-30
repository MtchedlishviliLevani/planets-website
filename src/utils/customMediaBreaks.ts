const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  tablet: customMediaQuery(1100),
  phone: customMediaQuery(768),
};
