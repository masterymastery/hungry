import React from 'react'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import preview from './views/preview'
import view from './views/view'
import Header from './views/Header'

import { connect } from 'react-redux'
import { addNameCreater, addAgeCreater, addNameAsync } from './redux/actions'
import AddName from './views/addName'

import './App.css'

const createBlog = () => (
    <div>
        <h2>createBlog</h2>
    </div>
)

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header></Header>
                    <Link to="/">文章列表</Link>
                    <Link to="/createBlog">写文章</Link>
                    <hr />
                    <Route path="/" exact component={preview}></Route>
                    <Route path="/view/:blogId" component={view}></Route>
                    <Route path="/createBlog" component={createBlog}></Route>
                </div>
            </Router>
        )
    }
}

export default App

