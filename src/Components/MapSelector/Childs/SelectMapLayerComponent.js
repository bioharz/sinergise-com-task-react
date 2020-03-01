import React, {Component} from "react";

export default class SelectMapLayerComponent extends Component {
    constructor(props) {
        super(props);
    }

    handleToggle(e) {
        this.props.handleToggle(e);
    }

    render() {
        return (<div>
            {this.props.layerIds.map((layerId, key) => {
                return (<button onClick={() => this.handleToggle(layerId)} key={key}>
                    {layerId}
                </button>)
            })}
        </div>)
    }
}
