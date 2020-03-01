import React, {Component} from "react";
import Constants from "../../Enviroments/Constants";
import MapComponent from "./Childs/MapComponent";
import SelectMapLayerComponent from "./Childs/SelectMapLayerComponent";
import SelectMapTimeLapsComponent from "./Childs/SelectMapTimeLapsComponent";

export default class MapSelectorContainerComponent extends Component {
    static mapParams = {
        bbox: Constants.getBoundingBoxMountEtna(),
        fromTime: new Date(Date.UTC(2019, 11 - 1, 22, 0, 0, 0)),
        toTime: new Date(Date.UTC(2019, 12 - 1, 22, 23, 59, 59)),
        width: Constants.getMapWidth(),
        height: Constants.getMapHeight(),
        format: Constants.getMapFormat(),
    };
    static defaultProps = {
        wmsPath: Constants.getWmsPath(),
        instanceId: Constants.getInstanceId(),
        mapParams: this.mapParams,
        imageText: Constants.getImageText(),
        mapId: Constants.getMapId()
    };

    constructor(props) {
        super(props);
        this.state = {
            layerId: Constants.getLayerIds()[0],
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(layerId) {
        this.setState(() => ({
            layerId: layerId
        }));
    };

    render() {
        return <div className="map-selector-container">
            <MapComponent wmsPath={this.props.wmsPath} instanceId={this.props.instanceId}
                          mapParams={this.props.mapParams} layerId={this.state.layerId} imageText={this.props.imageText}
                          mapId={this.props.mapId}/>
            <SelectMapLayerComponent layerId={this.state.layerId} layerIds={Constants.getLayerIds()}
                                     handleToggle={this.handleToggle}/>
            <SelectMapTimeLapsComponent/>
        </div>
    }
}
