const GeneratePrice = (): string => {
  const price = Math.random() * (100 - 10) + 10;
  return `$${price.toFixed(2)}`;
};

export default GeneratePrice;
