import React from 'react'
import { Tabs, Button } from 'antd'
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
            blogId: this.props.match.params.blogId
        }
        this.props.getBlogListAsync()
    }
    handlerFunc = () => {
        // debugger
        this.props.addNameCreater('123')
        // this.props.getBlogListAsync()
    }
    render() {
        const { lastname, lastage, blogList } = this.props
        return (
            <div className="view">
                <button onClick={this.handlerFunc}>confirm</button>
                {lastname}
                <ul>66666666</ul>
                {lastage}
                {JSON.stringify(blogList.find((item) => item.id === parseInt(this.state.blogId)))}
            </div>
        )
    }
}

export default connect(
    (state) => ({
        lastname: state.addName,
        lastage: state.addAge,
        blogList: state.getBlogList
    }),
    { addNameCreater, addAgeCreater, addNameAsync, getBlogListAsync }
)(view)
// export default view
