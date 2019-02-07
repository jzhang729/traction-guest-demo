export const getFinalSalePrice = ({ salePrice, regularPrice }) => {
  return salePrice && regularPrice ? salePrice : regularPrice;
};
