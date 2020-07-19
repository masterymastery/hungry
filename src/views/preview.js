import React from 'react'
import { Link } from 'react-router-dom'
import { Button, message } from 'antd'
import { connect } from 'react-redux'
import { getBlogListAsync, deleteBlogListAsync } from '../redux/actions'

class preview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'xx',
        }
        this.props.getBlogListAsync()
    }
    deleteTd = async (e, id) => {
        var res = await deleteBlogListAsync({ id: id })
        if (res.errcode === 0) {
            message.success('刪除成功')
        } else {
            message.error(res.errmsg)
        }
        this.props.getBlogListAsync()
    }
    render() {
        const preview = {
            display: 'flex',
            justifyContent: 'center',
        }
        const { blogList } = this.props
        // 首次render这里没有值
        // console.log(this.blogList)
        return (
            <div style={preview} className="preview">
                <table>
                    <thead>
                        <tr>
                            <th>标题</th>
                            <th>创建时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    {blogList.map((item) => (
                        <tbody key={item.id}>
                            <tr key={item.id}>
                                <td>
                                    <Link to={`/view/${item.id}`}>{item.title}</Link>
                                </td>
                                <td>{item.createTime}</td>
                                <td>
                                    <Button type="primary" onClick={(e) => this.deleteTd(e, item.id)}>
                                        删除
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        blogList: state.getBlogList,
    }),
    { getBlogListAsync }
)(preview)
