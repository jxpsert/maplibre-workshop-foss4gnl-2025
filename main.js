import * as maplibregl from "https://esm.sh/maplibre-gl";
import { Protocol } from "https://esm.sh/pmtiles";
const protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

const map = new maplibregl.Map({
    container: 'mijnkaart',
    style: './assets/style.json',
    center: [5.66457, 51.96704],
    zoom: 15
});