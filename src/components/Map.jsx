import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

const MapComponent = () => {
  // Default marker icon fix (optional)
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
  });

  return (
    <MapContainer
      center={[6.4448792,3.5171719]}
      zoom={8}
      style={{ height: '345px', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[6.5244, 3.3792]}>
        <Popup>
          TEKKTOPIA LTD <br/> 
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
