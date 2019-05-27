import React from 'react';
import { connect } from 'react-redux';
import { showToHistroy, showToHistroyItem } from '../actions/weather.thunk';
//import history from '../history';
import { Link } from 'react-router-dom';
//import _ from 'lodash';


class HistoryPages extends React.Component {

    //  (i)=> this.props.showToHistroyItem(this.props.data[i]._id)
    renderHistory() {
        let list = this.props.data;
        if (!list) {
            return <div>У вас пока нет истории запросов</div>
        } else {
            return (
                Object.keys(list).map((i) => {
                    return (<div key={list[i]._id} style={{ padding: "20px", fontSize: "30px" }}>

                        <Link
                            to={`/historyDetails/${i}`}
                            key={i}> {list[i].name}
                        </Link>
                        - {list[i].date}</div>)
                })
            )
        }
    }

    render() {
    //    console.log('Data', this.props.data)
        return <div>{this.renderHistory()}</div>
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.historyWeather.loading,
        data: state.historyWeather.data,
        err: state.historyWeather.err
    }
}

export default connect(mapStateToProps, {
    showToHistroy,
    showToHistroyItem
})(HistoryPages);