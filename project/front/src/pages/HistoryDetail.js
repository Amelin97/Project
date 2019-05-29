import React from 'react';
import { showToHistroyItem } from '../actions/weather.thunk'
import { connect } from 'react-redux';

class HistoryDetail extends React.Component {

    componentDidMount() {
        this.props.showToHistroyItem(this.props.match.params.id)
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
                            // console.log(key, list[key].dt_txt, list[key].main.temp - 273.15, list[key].weather[0].main);
                            return (<tr key={key}>
                                <td>{list[key].dt_txt}</td>
                                <td>{(list[key].main.temp - 273.15).toFixed(2)}</td>
                                <td>{list[key].weather[0].main}</td>
                            </tr>
                            )
                        })}
                    </tbody>

                </table>
            )


        }
    }

    render() {

        let data = this.props.data
        return (
            <div>
                <h1>{data.name}</h1>
                {this.renderTable()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.historyItem.loading,
        data: state.historyItem.data,
        err: state.historyItem.err
    }
}

export default connect(mapStateToProps, {
    showToHistroyItem
})(HistoryDetail);


