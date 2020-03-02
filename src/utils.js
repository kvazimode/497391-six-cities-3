export const getCityList = (offers) => {
  const fullCityList = offers.map((offer) => offer.city);
  return Array.from(new Set(fullCityList));
};

export const getOfferListByCity = (offers, city) => {
  return offers.filter((offer) => offer.city === city);
};

export const assign = (a, b) => Object.assign({}, a, b);
