import React from 'react'
import { Link } from 'react-router-dom'
import { _getBlogList } from '../service/blog'

class preview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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

export default preview
