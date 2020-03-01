import {BBox, CRS_EPSG4326, MimeTypes} from "@sentinel-hub/sentinelhub-js";

/**
 * ApiPath
 */
const wmsPath = 'https://services.sentinel-hub.com/ogc/wms/';

/**
 * Instance and Layer Id for sentinel-hub WmsLayer
 */
const instanceId = '7a595734-1c6c-4329-ac93-0e24dcb840dd';
const layerIds = ['TRUECOLOR', 'NDVI', 'FALSECOLOR'];

/**
 * Bounding box of the area (Mount Etna)
 */
const boundingBoxMountEtna = new BBox(CRS_EPSG4326, 14.95, 37.7, 15.05, 37.8);

/**
 * malicious
 */
const imageText = 'Mount Etna, Sicily, Italy';
const mapId = "map";

const mapWidth = 512;
const mapHeight = 512;
const mapFormat = MimeTypes.JPEG;

/**
 * getters
 */
class Constants {
    static getWmsPath() {
        return wmsPath
    }

    static getInstanceId() {
        return instanceId
    }

    static getLayerIds() {
        return layerIds
    }

    static getBoundingBoxMountEtna() {
        return boundingBoxMountEtna
    }

    static getImageText() {
        return imageText
    }

    static getMapId() {
        return mapId
    }

    static getMapWidth() {
        return mapWidth
    }
    static getMapHeight() {
        return mapHeight
    }
    static getMapFormat() {
        return mapFormat
    }
}

export default Constants
