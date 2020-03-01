import React, {Component} from 'react';
import './Content.scss';
import MapSelectorContainerComponent from "./MapSelector/MapSelectorContainerComponent";


class Content extends Component {

    render() {
        return (
            <div className="content">
                <div className="image-container">
                    <MapSelectorContainerComponent/>
                </div>
            </div>
        )
    }
}

export default Content
