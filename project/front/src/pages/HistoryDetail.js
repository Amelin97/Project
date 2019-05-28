import React from 'react';
/* import {showToHistroyItem} from '../actions/weather.thunk' */
import { connect } from 'react-redux';

class HistoryDetail extends React.Component {


    renderTable() {
        let id = this.props.match.params.id
        let data = this.props.data

        console.log(data[id].list)
        if (!data) {
            return <tr></tr>
        } else {
            return (
                Object.keys(data[id].list).map((key) => {
                    return (<tr key={key}>
                        <td>{data[id].list[key].dt_txt}</td>
                        <td>{data[id].list[key].main.temp - 273.15}</td>
                        <td>{data[id].list[key].weather[0].main}</td>
                    </tr>
                    )
                })
            )
        }
    }

    render() {
        let id = this.props.match.params.id
        let data = this.props.data
        return (
            <div>
                <h1>{data[id].name}</h1>
                <table className="ui inverted blue selectable celled table"
                    style={{ width: "100%", marginTop: "50px" }}>
                    <thead>
                        <tr><th>Date</th>
                            <th>Tamp</th>
                            <th>Weather</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.renderTable()}
                    </tbody>

                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.historyWeather.loading,
        data: state.historyWeather.data,
        err: state.historyWeather.err
    }
}

export default connect(mapStateToProps)(HistoryDetail);


