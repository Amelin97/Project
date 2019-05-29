import React from 'react';
import { showToHistroyItem } from '../actions/weather.thunk'
import { connect } from 'react-redux';
import Table from './component/table'
class HistoryDetail extends React.Component {

    componentDidMount() {
        this.props.showToHistroyItem(this.props.match.params.id)
    }

    render() {

        let data = this.props.data
        if(!data){
            return <div></div>
        }else{
        return (
            <div>
                <h1>{data.name}</h1>
                {<Table
                data={this.props.data}/>}
            </div>
        )
                }
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


