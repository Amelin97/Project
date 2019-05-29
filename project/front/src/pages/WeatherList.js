import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import { addWeather, saveToHistory, showToHistroy } from '../actions/weather.thunk';
import { connect } from 'react-redux';
import history from '../history';
import Table from './component/table';

class Weather extends React.Component {

    placeSelected = (place) => {

        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        const coords = {
            lat: lat,
            lng: lng
        };
        this.props.addWeather(coords);
    }
    renderTable() {
        let data = this.props.data
        if (!data) {
            return <div></div>
        } else {
            return ( <Table
                data={data} />)
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

    };

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