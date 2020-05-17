import React from 'react'
import { Tabs, Button } from 'antd'
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
        return (
            <div className="view">
                <button onClick={this.handlerFunc}>confirm</button>
                {lastname}
                {JSON.stringify(blogList.find((item) => item.id === parseInt(this.state.blogId)))}
            </div>
        )
    }
}

export default connect(
    (state) => ({
        lastname: state.addName,
        blogList: state.getBlogList
    }),
    { addNameCreater }
)(view)
