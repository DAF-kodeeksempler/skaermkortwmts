import {Map} from 'ol';
import { View } from 'ol';
import proj4 from 'proj4';
import { register } from 'ol/proj/proj4';
import WMTS from 'ol/source/WMTS';
import WMTSTileGrid from 'ol/tilegrid/WMTS';
import LayerTile from 'ol/layer/Tile';
import { get as getProjection } from 'ol/proj';
import {Zoom} from 'ol/control';

var extent= [120000, 5661139.2, 1378291.2, 6500000];

proj4.defs('EPSG:25832', "+proj=utm +zone=32 +ellps=GRS80 +units=m +no_defs");
register(proj4);
var dkProjection = getProjection('EPSG:25832');
dkProjection.setExtent(extent);

const dfTileGrid = new WMTSTileGrid({
	extent: extent,
	resolutions: [1638.4, 819.2, 409.6, 204.8, 102.4, 51.2, 25.6, 12.8, 6.4, 3.2, 1.6, 0.8, 0.4, 0.2],
	matrixIds: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13']
})

var map = new Map({
	target: 'map',
	layers: [new LayerTile({ 
		title: 'Skærmkort (DAF)',
		type: 'base',
		visible: true, 
		source: new WMTS({
			url: "https://services.datafordeler.dk/Dkskaermkort/topo_skaermkort_wmts/1.0.0/wmts?username=USERNAME&password=PASSWORD",
			layer: "topo_skaermkort",
			matrixSet: "View1",
			format: "image/jpeg",
			style: 'default',
			size: [256, 256],
			tileGrid: dfTileGrid
			})
		})
	],
	view: new View({
		minZoom: 2,
		maxZoom: 13,
		center: [722125.86, 6178892.29], 
		zoom: 10, 
		resolutions: [1638.4, 819.2, 409.6, 204.8, 102.4, 51.2, 25.6, 12.8, 6.4, 3.2, 1.6, 0.8, 0.4, 0.2, 0.1], 
		projection: dkProjection 
	}),
	controls: [new Zoom()]
});
