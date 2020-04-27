import React from 'react'
import { Link } from 'react-router-dom'
import { _getBlogList } from '../service/blog'
import { connect } from 'react-redux'
import { getBlogListAsync } from '../redux/actions'

class preview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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

export default connect(
    (state) => ({
        blogList: state.getBlogList
    }),
    { getBlogListAsync }
)(preview)
