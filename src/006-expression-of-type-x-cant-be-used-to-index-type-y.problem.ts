interface ProductPrices {
  [key: string]: number;
};


const productPrices: ProductPrices = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getPrice = (productName: string) => {
  return productPrices[productName];
};

const price = getPrice("Apple");