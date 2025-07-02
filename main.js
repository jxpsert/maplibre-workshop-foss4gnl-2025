import * as maplibregl from "https://esm.sh/maplibre-gl";

const map = new maplibregl.Map({
    container: 'mijnkaart',
    style: 'https://tiles.openfreemap.org/styles/liberty',
    center: [5.04781, 51.64956],
    zoom: 15
});