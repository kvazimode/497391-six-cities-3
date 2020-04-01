export const getCityList = (offers) => {
  const fullCityList = offers.map((offer) => offer.city);
  const cityList = Array.from(new Set(fullCityList));
  return cityList.slice(0, 5);
};

export const getOfferListByCity = (offers, city) => {
  return offers.filter((offer) => offer.city === city);
};

export const assign = (a, b) => Object.assign({}, a, b);

export const sortTypeMap = {
  popular: `Popular`,
  toHigh: `Price: low to high`,
  toLow: `Price: high to low`,
  rating: `Top rated first`
};

export const sortList = (offerList, sortType) => {
  switch (sortType) {
    case `toHigh`:
      return offerList.slice().sort((a, b) => a.value - b.value);
    case `toLow`:
      return offerList.slice().sort((a, b) => b.value - a.value);
    case `rating`:
      return offerList.slice().sort((a, b) => b.rating - a.rating);
    case `popular`:
      return offerList;
    default:
      return offerList;
  }
};

export const AuthStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};
