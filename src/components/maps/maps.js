import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, DirectionsRenderer } from 'google-maps-react';
import './maps.css'

export class MapWithMarker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: '', // Será definido com a localização atual
      destination: 'R. Pasteur, 463 - Batel, Curitiba - PR, 80250-104',
      coordinates: {
        lat: -25.444923,
        lng: -49.2788372, // Longitude inicial
      },
      directions: null,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  componentDidMount() {
    // Obtenha a localização atual do usuário
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const origin = `${latitude}, ${longitude}`;
        this.setState({ origin });
      });
    } else {
      console.error('Geolocalização não é suportada neste navegador.');
    }
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  openGoogleMaps = () => {
    const { origin, destination } = this.state;
    
    // Crie a URL para direcionar para o Google Maps com a origem e o destino
    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
      origin
    )}&destination=${encodeURIComponent(destination)}`;
    
    // Abra o Google Maps em uma nova janela do navegador
    window.open(url, '_blank');
  };

  render() {
    return (
      <div>
        <button className="custom-button" onClick={this.openGoogleMaps}>OBTER ROTA</button>
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={this.state.coordinates}
        >
          <Marker
            position={this.state.coordinates}
            title="R. Pasteur, 463 - Batel, Curitiba - PR, 80250-104"
            onClick={this.onMarkerClick}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.title}</h4>
              {/* <p>R. Pasteur, 463 - Batel, Curitiba - PR, 80250-104</p> */}
            </div>
          </InfoWindow>
          {this.state.directions && (
            <DirectionsRenderer
              directions={this.state.directions}
              options={{
                suppressMarkers: true,
              }}
            />
          )}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDgmiDFsuV5GoHqSQZDwO2QRtxkuI1QbLM',
})(MapWithMarker);


 
 