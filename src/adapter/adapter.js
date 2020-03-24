import {assign} from '../utils.js';

const valueAdapter = {
  city: (raw) => ({city: raw.city.name}),
  preview_image: (raw) => ({imgLink: raw.preview_image}),
  images: (raw) => ({images: raw.images}),
  title: (raw) => ({title: raw.title}),
  is_favorite: (raw) => ({is_favorite: raw.is_favorite}),
  is_premium: (raw) => ({isPremium: raw.isPremium}),
  rating: (raw) => ({rating: raw.rating}),
  type: (raw) => ({type: raw.type}),
  bedrooms: (raw) => ({bedrooms: raw.bedrooms}),
  max_adults: (raw) => ({max_adults: raw.max_adults}),
  price: (raw) => ({value: raw.price}),
  goods: (raw) => ({goods: raw.goods}),
  host: (raw) => ({host: raw.host}),
  description: (raw) => ({description: raw.description}),
  location: (raw) => {
    const {latitude, longitude} = raw.location;
    const coord = [latitude, longitude];
    return {coord};
  },
  id: (raw) => ({id: raw.id})
};

const adaptOffer = (offer) => {
  let newOffer = {};
  Object.keys(offer).forEach((key) => {
    newOffer = Object.assign(newOffer, valueAdapter[key](offer))
  })
  return newOffer;
}

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
      }

      return adaptOffer(offer);
    });

    return {offerList, cityList: Array.from(Object.values(cityList))};
  }
};

export default Adapter;
