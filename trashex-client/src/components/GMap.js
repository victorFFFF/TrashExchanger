import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class GMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.8733,
      lng: -73.8941
    },
    zoom: 15
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAcQsYlZbnUOB_of8fh2hCvZxhfeAlqJ3M' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.8733}
            lng={-73.8941}
            text="YOU ARE HERE"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GMap;