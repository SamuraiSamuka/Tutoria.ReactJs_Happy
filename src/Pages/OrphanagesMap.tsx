import { Link } from "react-router-dom";
import mapMarkerImg from "/map-marker.svg";
import { FiPlus } from "react-icons/fi";
import { LayersControl, ImageOverlay, TileLayer } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function OrphanagesMap() {
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
          <strong className="text-extrabold">Araci</strong>
          <span>Bahia</span>
        </footer>
      </aside>


      <MapContainer
        style={{height: "100vh", width: "100%"}}
        center={[-11.332442591499072, -38.95533760198204]} 
        zoom={15}
      >
        <LayersControl>
          <LayersControl.Overlay checked name="OpenStreetmap">
            <TileLayer 
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Google">
            <TileLayer
              url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
              subdomains={["mt0", "mt1", "mt2", "mt3"]}
              maxZoom={25}
              minZoom={1}
              opacity={1}
              noWrap={true}
            />
          </LayersControl.Overlay>
          <ImageOverlay 
            url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" 
            bounds={L.latLngBounds([
              [90, 180],
              [-90, -180]
            ])}>

          </ImageOverlay>
        </LayersControl>
        {/* url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" */}
      </MapContainer>

      {/* Create orphanage */}
      <Link to="" className="absolute right-10 bottom-10 w-16 h-16 bg-azul-botao rounded-[20px] flex justify-center items-center hover:bg-azul-botao-hover">
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  );
}
