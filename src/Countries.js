import { Component } from "react";
import Country from "./Country";

class Countries extends Component {
    constructor() {
        super()
        this.state = {
            countries: [], filter: ''
        }
    }
    componentDidMount() {
        // fetch("https://corona.lmao.ninja/v2/countries")
        fetch("https://api.covid19india.org/data.json")
            .then(res => res.json())
            .then(data => {
                // this.setState({ countries: data });
                this.setState({ countries: data.statewise });

            })
            .catch(console.log);
    }
    render() {
        const topCountries = this.state.countries;
        const countries = topCountries
            .filter(c => c.state.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1)
            .map(country => {
                return <Country key={country.state} coronaInfo={country} />
            })

        return (
            <div>
                <input type="text" onChange={e => this.setState({ filter: e.target.value })} />
                <br />
                <div className="wrapper">{countries}</div>

            </div>
        )
    }
}

export default Countries;