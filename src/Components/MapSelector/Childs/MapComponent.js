import React, {Component} from 'react';
import SentinelClient from "../../../Services/SentinelClient";

export default class MapComponent extends Component {
    render() {
        return <div>
            <img
                src={SentinelClient.GetImageUri(this.props.wmsPath, this.props.instanceId, this.props.mapParams, this.props.layerId)}
                alt={this.props.imageText} id={this.props.mapId}/>
        </div>
    }
}
