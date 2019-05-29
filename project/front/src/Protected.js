import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Weather from './pages/WeatherList';
import history from './history'
import { instance } from './config/axios';
import HistoryPages from './pages/HistoryPages'
import HistoryDetail from './pages/HistoryDetail';
import Header from './pages/component/Header'
// import Autocomplete from './components/Googlemaps';
// import OpenWeather from './components/Googlemaps';

class Protected extends React.Component {
    state = {
        authenticated: false
    }


    componentDidMount() {

        return instance.post('/auth/checkToken')
            .then((res) => {
                this.setState({
                    authenticated: true
                }, () => {
                    history.push('/weather')
                })
            })
            .catch((err) => {
                history.push('/login')
            })
    }

    render() {

        const { authenticated } = this.state;
        if (!authenticated) return null;
        if (authenticated) return ( <div>
            <Header/>

            <Switch>

                <Route path="/" exact component={this.renderSearch} />
                <Route path="/weather" exact component={Weather} />
                <Route path="/history" exact component={HistoryPages} />
                <Route path="/historyDetails/:id" exact component={HistoryDetail} />

            </Switch>
            </div>
        )
        return
    };
}

export default Protected;