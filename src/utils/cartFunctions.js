export const getProductPrice = ({ salePrice, regularPrice }) => {
  return salePrice && regularPrice ? salePrice : regularPrice;
};

export const getProductPriceTimesQuantity = (price, quantity) => {
  return price * quantity;
};

export const getUpdatedTotal = (currentTotal, product) => {
  return (parseFloat(currentTotal) + parseFloat(getProductPrice(product))).toFixed(2);
};
