import React from 'react'

// function Header() {
//     return <div className="Header">Header</div>
// }

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '我是Header',
        }
    }
    render() {
        return <div className="Header">{this.state.name}</div>
    }
}

export default Header
