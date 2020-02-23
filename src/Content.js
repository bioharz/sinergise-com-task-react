import React from 'react';
import {ApiType, BBox, CRS_EPSG4326, MimeTypes, WmsLayer} from '@sentinel-hub/sentinelhub-js';
import './Content.scss';

/**
 * Bounding box of the area (Mount Etna)
 */
const bbox = new BBox(CRS_EPSG4326, 14.95, 37.7, 15.05, 37.8);

/**
 * Instance and Layer Id for sentinel-hub WmsLayer
 */
const instanceId = '7a595734-1c6c-4329-ac93-0e24dcb840dd';
const layerId = 'TRUECOLOR';

/**
 * initialice WmsLayer
 */
const layer = new WmsLayer('https://services.sentinel-hub.com/ogc/wms/' + instanceId, layerId);

/**
 * malicious
 */
const imageText= 'Mount Etna, Sicily, Italy';

/**
 * map parameters
 */
const getMapParams = {
    bbox: bbox,
    fromTime: new Date(Date.UTC(2019, 11 - 1, 22, 0, 0, 0)),
    toTime: new Date(Date.UTC(2019, 12 - 1, 22, 23, 59, 59)),
    width: 512,
    height: 512,
    format: MimeTypes.JPEG,
};

/**
 * @return {string}
 * return url string of map image
 */
function GetImageBlob() {
    return layer.getMapUrl(getMapParams, ApiType.WMS);
}

export default class Content extends React.Component {

    render() {
        return (
            <div className="content">
                <img className="image-container" src={GetImageBlob()} alt={imageText}/>
            </div>
        )
    }
};
