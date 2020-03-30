const valueAdapter = {
  city: (raw) => ({city: raw.name}),
  [`preview_image`]: (raw) => ({imgLink: raw}),
  images: (raw) => ({images: raw}),
  title: (raw) => ({title: raw}),
  [`is_favorite`]: (raw) => ({isFavorite: raw}),
  [`is_premium`]: (raw) => ({isPremium: raw}),
  rating: (raw) => ({rating: raw * 20}),
  type: (raw) => ({type: raw}),
  bedrooms: (raw) => ({bedrooms: raw}),
  [`max_adults`]: (raw) => ({maxAdults: raw}),
  price: (raw) => ({value: raw}),
  goods: (raw) => ({goods: raw}),
  host: (raw) => ({host: raw}),
  description: (raw) => ({description: raw}),
  location: (raw) => {
    const {latitude, longitude} = raw;
    const coord = [latitude, longitude];
    return {coord};
  },
  id: (raw) => ({id: raw})
};

const adaptOffer = (offer) => {
  let newOffer = {};
  Object.keys(offer).forEach((key) => {
    newOffer = Object.assign(newOffer, valueAdapter[key](offer[key]));
  });
  return newOffer;
};

const Adapter = {
  rawToOfferList: (raw) => {
    const cityList = {};
    const offerList = raw.map((offer) => {
      const {name, location} = offer.city;
      const {latitude, longitude, zoom} = location;

      cityList[name] = {
        name,
        zoom,
        coord: [latitude, longitude]
      };

      return adaptOffer(offer);
    });

    return {offerList, cityList: Array.from(Object.values(cityList))};
  }
};

export default Adapter;
