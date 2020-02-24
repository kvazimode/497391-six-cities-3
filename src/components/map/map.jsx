import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
    this._mapInstance = null;
    this._mapSetup = {
      center: [52.38333, 4.9],
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
    const {center, zoom} = this._mapSetup;
    this._mapInstance = leaflet.map(this._mapRef.current, this._mapSetup);
    this._mapInstance.setView(center, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, { 
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      })
      .addTo(this._mapInstance);
    
    pinList.map((cords) => this.addPin(cords));
  }

  addPin(pin) {
    const pinIcon = this._pin;
    leaflet.marker(pin, {pinIcon}).addTo(this._mapInstance);
  }

  removeMap() {
    this._mapInstance.remove;
    this._mapInstance = null;
  }

  componentDidMount() {
    const {offerList} = this.props;
    const pinList = offerList.map((offer) => {
      return offer.coord;
    })
    this.createMap(pinList)
  }

  componentWillUnmount() {
    this.removeMap();
  }

  render() {
    return <div id="map" style={{height: `100%`}} ref={this._mapRef}></div>
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
}

export default Map
