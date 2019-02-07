export const getFinalSalePrice = ({ salePrice, regularPrice }) => {
  return salePrice && regularPrice ? salePrice : regularPrice;
};

export const getUpdatedTotal = (currentTotal, product) => {
  return (parseFloat(currentTotal) + parseFloat(getFinalSalePrice(product))).toFixed(2);
};
