import React, {Component} from "react";
import DateTimePicker from 'react-datetime-picker'

export default class SelectMapTimeLapsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromTime: this.props.defaultFrom,
            toTime: this.props.defaultTo,
        };
    }

    onChangeFrom = (date) => {
        this.setState(() => ({
            fromTime: date,
        }));
        this.props.handleTimeLaps(this.state.fromTime, this.state.toTime);
    };
    onChangeTo = (date) => {
        this.setState(() => ({
            toTime: date,
        }));
        this.props.handleTimeLaps(this.state.fromTime, this.state.toTime);
    };

    render() {
        return (
            <div>
                <div>
                    time-laps from <DateTimePicker onChange={this.onChangeFrom} value={this.state.fromTime}/>
                </div>
                <div>
                    time-laps to <DateTimePicker onChange={this.onChangeTo} value={this.state.toTime}/>
                </div>
            </div>)
    }
}
