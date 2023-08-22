import { Link } from "react-router-dom";
import mapMarkerImg from "/map-marker.svg";
import { FiPlus } from "react-icons/fi";
import { LayersControl, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import "leaflet/dist/leaflet.css";
import { SetStateAction, useEffect, useState } from "react";

// const access_token = process.env.REACT_APP_MAPBOX_TOKEN;

export default function OrphanagesMap() {
  const [coordenadas, setCoordenadas] = useState([-11.332442591499072, -38.95533760198204]);

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e: { latlng: SetStateAction<null>; }) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  function findLocation() {
    function success(pos: { coords: { latitude: number; longitude: number; }; }) {
      const lat = pos.coords.latitude;
      const long = pos.coords.longitude;
      console.log(lat, long);
      setCoordenadas([lat, long]);
    }
  
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    navigator.geolocation.getCurrentPosition(success, (e) => {console.warn("Erro: " + e.message);}, options);
  }

  useEffect(()=> {
    console.log("alterado");
  }, [coordenadas]);
  return (
    // page-map
    <div className="w-screen h-screen relative flex">
      <aside className="w-[440px] bg-gradient-to-br from-[#00c7c7] to-[#29b6d1] p-20 flex flex-col justify-between">
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2 className="text-4xl font-extrabold mt-16">Escolha um orfanato no mapa</h2>
          <p className="mt-6 leading-7">Muitas crianças estão esperando a sua visita :{")"}</p>
        </header>

        <footer className="flex flex-col">
          <button 
            className="border-2 rounded-xl w-fit px-4 py-2 absolute left-40 hover:bg-[rgba(255,255,255,0.3)]"
            onClick={findLocation}
          >Find location</button>
          <strong className="text-extrabold">Araci</strong>
          <span>Bahia</span>
        </footer>
      </aside>


      <MapContainer
        style={{height: "100vh", width: "100%", backgroundBlendMode: "hard-light"}}
        center={coordenadas} 
        zoom={15}
        className="z-0"
      >
        <LayersControl>
          <LayersControl.BaseLayer checked name="Light">
            <TileLayer
              url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
              attribution= {"&copy; OpenStreetMap France | &copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"}
              maxZoom={20}
              opacity={1}
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Dark">
            <TileLayer
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
              subdomains="abcd"
              attribution= {"&copy; <a href=\"https://stadiamaps.com/\">Stadia Maps</a>, &copy; <a href=\"https://openmaptiles.org/\">OpenMapTiles</a> &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors"}
              maxZoom={20}
              opacity={1}
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Satélite">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              subdomains={["mt0", "mt1", "mt2", "mt3"]}
              attribution={"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"}
              maxZoom={21}
              minZoom={1}
              opacity={1}
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Google(não encontrei o attribution correto)">
            <TileLayer
              url="http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}"
              attribution="google"
              maxZoom={21}
              minZoom={1}
              opacity={1}
            />
          </LayersControl.BaseLayer>
          {/* <LayersControl.BaseLayer checked name="Padrão">
            <TileLayer
              url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}"
              maxZoom={25}
              minZoom={1}
              opacity={1}
              noWrap={true}
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Terreno">
            <TileLayer
              url="http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}"
              maxZoom={25}
              minZoom={1}
              opacity={1}
              noWrap={true}
            />
          </LayersControl.BaseLayer> */}
          <LocationMarker />
        </LayersControl>
      </MapContainer>

      {/* Create orphanage */}
      <Link to="" className="absolute right-10 bottom-10 w-16 h-16 bg-azul-botao rounded-[20px] flex justify-center items-center hover:bg-azul-botao-hover z-10">
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  );
}
