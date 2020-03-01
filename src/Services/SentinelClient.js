import {ApiType, WmsLayer} from '@sentinel-hub/sentinelhub-js';

class SentinelClient {

    /**
     * Get MapSelector Image Uri
     * @return {string} The image Uri.
     * @param wmsPath
     * @param instanceId
     * @param mapParams
     * @param layerId
     */
    static GetImageUri(wmsPath, instanceId, mapParams, layerId) {
        const layer = new WmsLayer(wmsPath + instanceId, layerId);
        return layer.getMapUrl(mapParams, ApiType.WMS);
    }
}

export default SentinelClient
