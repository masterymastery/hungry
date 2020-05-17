import React from 'react'
import { Link } from 'react-router-dom'
import { _getBlogList } from '../service/blog'
<<<<<<< HEAD
=======
import { connect } from 'react-redux'
import { getBlogListAsync } from '../redux/actions'
>>>>>>> 3e734658b9f5d0385b93a57a4bc39df032d96e3f

class preview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
<<<<<<< HEAD
            name: 'xx',
            blogList: [],
        }
        this.getBlogList = this.getBlogList.bind(this)
        this.getBlogList()
    }
    getBlogList() {
        _getBlogList().then((res) => {
            this.setState({
                blogList: res.data.list,
            })
            // set以后也没有值
            console.log(this.state.blogList)
        })
    }
    render() {
        // 首次render这里没有值
        console.log(this.blogList)
        return (
            <div className="preview">
                <ul>
                    {this.state.blogList.map((item) => (
=======
            name: 'xx'
        }
        this.props.getBlogListAsync()
    }

    render() {
        const { blogList } = this.props
        // 首次render这里没有值
        // console.log(this.blogList)
        return (
            <div className="preview">
                <ul>
                    {blogList.map((item) => (
>>>>>>> 3e734658b9f5d0385b93a57a4bc39df032d96e3f
                        <li key={item.id}>
                            {item.createTime}
                            <Link to={`/view/${item.id}`}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

<<<<<<< HEAD
export default preview
=======
export default connect(
    (state) => ({
        blogList: state.getBlogList
    }),
    { getBlogListAsync }
)(preview)
>>>>>>> 3e734658b9f5d0385b93a57a4bc39df032d96e3f
