import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

const cityCordMap = {
    Paris: [48.858, 2.293],
    Hamburg: [53.55, 9.96],
    Cologne: [50.93, 6.94],
    Amsterdam: [52.38, 4.9],
    Brussels: [50.85, 4.35],
    Dusseldorf: [51.23, 6.78],
};

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
    this._mapInstance = null;
    this._mapSetup = {
      zoom: 12,
      zoomControl: false,
      marker: true
    };
    this._pin = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
  }

  createMap(pinList) {
    console.log(pinList)
    const center = cityCordMap[this.props.currentCity];
    const {zoom} = this._mapSetup;
    this._mapInstance = leaflet.map(this._mapRef.current, this._mapSetup);
    this._mapInstance.setView(center, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._mapInstance);

    pinList.map((cords) => this.addPin(cords));
  }

  addPin(pin) {
    const pinIcon = this._pin;
    leaflet.marker(pin, {pinIcon}).addTo(this._mapInstance);
  }

  removeMap() {
    this._mapInstance.remove();
    this._mapInstance = null;
  }

  getPinList() {
    const {offerList} = this.props;
    const pinList = offerList.map((offer) => {
      return offer.coord;
    });
    return pinList;
  }

  componentDidMount() {
    this.createMap(this.getPinList());
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentCity !== prevProps.currentCity) {
      this.removeMap()
      this.createMap(this.getPinList())
    }
  }

  componentWillUnmount() {
    this.removeMap();
  }

  render() {
    return <section className="cities__map map" ref={this._mapRef}></section>;
  }
}

Map.propTypes = {
  offerList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    imgLink: PropTypes.string,
    value: PropTypes.number,
    type: PropTypes.string,
    isPremium: PropTypes.bool,
    rating: PropTypes.number,
    coords: PropTypes.array
  }).isRequired)
};

export default Map;
