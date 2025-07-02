import { Component } from "react";

class Country extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div key={this.props.key} className="info-wrapper box-shadow">
                <div className="country">

                    {this.props.coronaInfo.state}

                </div>

                <div className="left">
                    <div className="info">
                        <span className="label alarm">Confirmed</span>
                        <span className="number">{this.props.coronaInfo.confirmed}</span>
                    </div>
                    <div className="info">
                        <span className="label alarm">Death</span>
                        <span className="number">{this.props.coronaInfo.deaths}</span>
                    </div>
                </div>

                <div className="right">
                    <div className="info">
                        <span className="label recover">Recovered</span>
                        <span className="number">{this.props.coronaInfo.recovered}</span>
                    </div>
                    <div className="info">
                        <span className="label alarm">Active</span>
                        <span className="number">{this.props.coronaInfo.active}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Country;