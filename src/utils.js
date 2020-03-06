export const getCityList = (offers) => {
  const fullCityList = offers.map((offer) => offer.city);
  const cityList = Array.from(new Set(fullCityList));
  return cityList.slice(0, 5);
};

export const getOfferListByCity = (offers, city) => {
  return offers.filter((offer) => offer.city === city);
};

export const assign = (a, b) => Object.assign({}, a, b);
