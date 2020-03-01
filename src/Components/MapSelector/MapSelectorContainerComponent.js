import React, {Component} from "react";
import Constants from "../../Enviroments/Constants";
import MapComponent from "./Childs/MapComponent";
import SelectMapLayerComponent from "./Childs/SelectMapLayerComponent";
import SelectMapTimeLapsComponent from "./Childs/SelectMapTimeLapsComponent";


export default class MapSelectorContainerComponent extends Component {

    getMapParams(from, to) {
        return {
            bbox: Constants.getBoundingBoxMountEtna(),
            fromTime: from,
            toTime: to,
            width: Constants.getMapWidth(),
            height: Constants.getMapHeight(),
            format: Constants.getMapFormat(),
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            layerId: Constants.getLayerIds()[0],
            fromTime: Constants.getFromTimeDefault(),
            toTime: Constants.getToTimeDefault(),
            mapParams: this.getMapParams(Constants.getFromTimeDefault(), Constants.getToTimeDefault())
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleTimeLaps = this.handleTimeLaps.bind(this);
    }

    static defaultProps = {
        wmsPath: Constants.getWmsPath(),
        instanceId: Constants.getInstanceId(),
        imageText: Constants.getImageText(),
        mapId: Constants.getMapId()
    };


    handleToggle(layerId) {
        this.setState(() => ({
            layerId: layerId,
        }));
    };

    handleTimeLaps(from, to) {
        this.setState(() => ({
            mapParams: this.getMapParams(from, to)
        }));
    }

    render() {
        return <div className="map-selector-container">
            <MapComponent
                wmsPath={this.props.wmsPath} instanceId={this.props.instanceId}
                mapParams={this.state.mapParams} layerId={this.state.layerId} imageText={this.props.imageText}
                mapId={this.props.mapId}
            />
            <SelectMapLayerComponent
                layerId={this.state.layerId}
                layerIds={Constants.getLayerIds()}
                handleToggle={this.handleToggle}
            />
            <SelectMapTimeLapsComponent
                handleTimeLaps={this.handleTimeLaps}
                defaultFrom={Constants.getFromTimeDefault()}
                defaultTo={Constants.getToTimeDefault()}
            />
        </div>
    }
}
