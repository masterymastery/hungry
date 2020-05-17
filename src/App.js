import React from 'react'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import preview from './views/preview'
import view from './views/view'
import writeBlog from './views/writeBlog'
import Header from './views/Header'

import './App.css'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header></Header>
                    <Link to="/">文章列表</Link>
                    <Link to="/writeBlog">写文章</Link>
                    <hr />
                    <Route path="/" exact component={preview}></Route>
                    <Route path="/view/:blogId" component={view}></Route>
                    <Route path="/writeBlog" component={writeBlog}></Route>
                </div>
            </Router>
        )
    }
}

export default App
