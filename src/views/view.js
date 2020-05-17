import React from 'react'
import { Tabs, Button } from 'antd'
<<<<<<< HEAD
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNameCreater, addAgeCreater, addNameAsync, getBlogListAsync } from '../redux/actions'

class view extends React.Component {
    //声明属性
    // static propTypes = {
    //     lastname: PropTypes.string.isRequired,
    //     addNameCreater: PropTypes.func.isRequired,
    //     lastage: PropTypes.number.isRequired,
    //     addAgeCreater: PropTypes.func.isRequired,
    //     addNameAsync: PropTypes.func.isRequired,
    //     blogList: PropTypes.array.isRequired,
    //     getBlogListAsync: PropTypes.func.isRequired,
    // }
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            blogList: [],
        }
        this.props.getBlogListAsync()
    }
    handlerFunc = () => {
        this.props.addNameCreater('123')
        // this.props.getBlogListAsync()
    }
    render() {
        const { lastname, lastage, blogList } = this.props
=======
import { connect } from 'react-redux'
import { addNameCreater } from '../redux/actions'

class view extends React.Component {
    constructor(props) {
        super(props)
        // console.log(this.props)
        this.state = {
            blogId: this.props.match.params.blogId
        }
    }
    handlerFunc = () => {
        // debugger
        this.props.addNameCreater('123')
    }
    render() {
        const { lastname, blogList } = this.props
>>>>>>> 3e734658b9f5d0385b93a57a4bc39df032d96e3f
        return (
            <div className="view">
                <button onClick={this.handlerFunc}>confirm</button>
                {lastname}
<<<<<<< HEAD
                <ul>66666666</ul>
                {lastage}
                {JSON.stringify(blogList)}
=======
                {JSON.stringify(blogList.find((item) => item.id === parseInt(this.state.blogId)))}
>>>>>>> 3e734658b9f5d0385b93a57a4bc39df032d96e3f
            </div>
        )
    }
}

export default connect(
    (state) => ({
        lastname: state.addName,
<<<<<<< HEAD
        lastage: state.addAge,
        blogList: state.getBlogList,
    }),
    { addNameCreater, addAgeCreater, addNameAsync }
)(view)
// export default view
=======
        blogList: state.getBlogList
    }),
    { addNameCreater }
)(view)
>>>>>>> 3e734658b9f5d0385b93a57a4bc39df032d96e3f
