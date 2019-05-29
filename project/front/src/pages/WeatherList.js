import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import { addWeather, saveToHistory, showToHistroy } from '../actions/weather.thunk';
import { connect } from 'react-redux';
import history from '../history';

class Weather extends React.Component {

    placeSelected = (place) => {

        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        const coords = {
            lat: lat,
            lng: lng
        }
        this.props.addWeather(coords)
    }

    renderTable() {

        let list = this.props.data.list
        // console.log(list);
        if (!list) {
            return <div></div>
        } else {


            return (
                <table className="ui inverted blue selectable celled table"
                    style={{ width: "100%", marginTop: "50px" }}>
                    <thead>
                        <tr><th>Date</th>
                            <th>Tamp</th>
                            <th>Weather</th>
                        </tr>
                    </thead>

                    <tbody>{
                        Object.keys(list).map((key) => {
                            //  console.log(key, list[key].dt_txt, list[key].main.temp - 273.15, list[key].weather[0].main);
                            return (<tr key={key}>
                                <td>{list[key].dt_txt}</td>
                                <td>{list[key].main.temp - 273.15}</td>
                                <td>{list[key].weather[0].main}</td>
                            </tr>
                            )
                        })}
                    </tbody>

                </table>
            )


        }
    }
    showHistory = () => {
        history.push('/history')
    }
    pushHistory = () => {
        let userHisrory = {
            date: new Date(),
            name: this.props.data.city.name,
            list: this.props.data.list
        }
        return (this.props.saveToHistory(userHisrory))

    }

    render() {
        return (

            <div className="ui container">
                <div className="ui left floated" >
                    <button className="ui button"
                        style={{ marginTop: "5px" }}
                        onClick={this.showHistory}>Show history
            </button>
                </div>
                <div className="ui fluid icon input">
                    <Autocomplete
                        style={{ width: "50%", marginTop: "50px" }}
                        onPlaceSelected={this.placeSelected}

                    />
                    <button className="ui  button"

                        style={{ marginTop: "50px" }}
                        onClick={this.pushHistory}><i className="plus icon" /></button>
                </div>
                <div className="ui center aligned container" >
                    {this.renderTable()}
                </div>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        data: state.weather.data,
        loading: state.weather.loading,
        err: state.weather.err
    }
}

export default connect(mapStateToProps, {
    addWeather,
    saveToHistory,
    showToHistroy
})(Weather);