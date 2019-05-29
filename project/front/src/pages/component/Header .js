import React from 'react'
import { Link } from 'react-router-dom'
class Header extends React.Component {
    render() {
        return (
            <div className="ui three item menu">
                <Link className="active item"
                to="/weather">Home</Link>
                <Link className="item"
                to="/history">History</Link>
                <Link className="item"
                to="/login"> LogOut</Link>
            </div>
        )
    }
}
export default Header