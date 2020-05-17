import React from 'react'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import preview from './views/preview'
import view from './views/view'
<<<<<<< HEAD
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

=======
import writeBlog from './views/writeBlog'
import Header from './views/Header'

import './App.css'

>>>>>>> 3e734658b9f5d0385b93a57a4bc39df032d96e3f
class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header></Header>
                    <Link to="/">文章列表</Link>
<<<<<<< HEAD
                    <Link to="/createBlog">写文章</Link>
                    <hr />
                    <Route path="/" exact component={preview}></Route>
                    <Route path="/view/:blogId" component={view}></Route>
                    <Route path="/createBlog" component={createBlog}></Route>
=======
                    <Link to="/writeBlog">写文章</Link>
                    <hr />
                    <Route path="/" exact component={preview}></Route>
                    <Route path="/view/:blogId" component={view}></Route>
                    <Route path="/writeBlog" component={writeBlog}></Route>
>>>>>>> 3e734658b9f5d0385b93a57a4bc39df032d96e3f
                </div>
            </Router>
        )
    }
}

export default App
<<<<<<< HEAD

=======
>>>>>>> 3e734658b9f5d0385b93a57a4bc39df032d96e3f
