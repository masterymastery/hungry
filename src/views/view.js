import React from 'react'
import { Input, Button, Upload, message } from 'antd'
import { updateBlogListAsync } from '../redux/actions'
import { connect } from 'react-redux'

class view extends React.Component {
    constructor(props) {
        super(props)
        // console.log(this.props)
        // debugger
        this.state = {
            blogId: this.props.match.params.blogId,
            currentData: this.props.blogList.find((item) => item.id === parseInt(this.props.match.params.blogId)),
        }
    }
    title_change(e) {
        let val = e.target.value
        let data = Object.assign({}, this.state.currentData, {
            title: val,
        })
        this.setState({
            currentData: data,
        })
    }
    intro_change(e) {
        let val = e.target.value
        let data = Object.assign({}, this.state.currentData, {
            intro: val,
        })
        this.setState({
            currentData: data,
        })
    }
    contentType_change(e) {
        let val = e.target.value
        let data = Object.assign({}, this.state.currentData, {
            contentType: val,
        })
        this.setState({
            currentData: data,
        })
    }
    content_change(e) {
        let val = e.target.value
        let data = Object.assign({}, this.state.currentData, {
            content: val,
        })
        this.setState({
            currentData: data,
        })
    }
    updateFunc = async () => {
        // debugger
        var par = {
            id: this.state.blogId,
            title: this.state.currentData.title,
            contentType: this.state.currentData.contentType,
            coverPath: '修改封面',
            intro: this.state.currentData.intro,
            content: this.state.currentData.content,
            publishType: '修改发布',
        }
        console.log(par)
        var res = await updateBlogListAsync(par)
        if (res.errcode === 0) {
            message.success('修改成功')
            this.props.history.replace('/')
        } else {
            message.error(res.errmsg)
        }
    }
    render() {
        const view = {
            width: '60%',
            margin: '0 auto',
        }
        const { TextArea } = Input
        return (
            <div style={view} className="view">
                主题：
                <Input value={this.state.currentData.title} onChange={this.title_change.bind(this)} placeholder="主题：" />
                类型：
                <Input value={this.state.currentData.contentType} onChange={this.contentType_change.bind(this)} placeholder="类型：" />
                简介：
                <Input value={this.state.currentData.intro} onChange={this.intro_change.bind(this)} placeholder="简介：" />
                内容：
                <TextArea rows={4} value={this.state.currentData.content} onChange={this.content_change.bind(this)} />
                <Button type="primary" onClick={this.updateFunc}>
                    确认修改
                </Button>
                {/* {JSON.stringify(blogList.find((item) => item.id === parseInt(this.state.blogId)))} */}
            </div>
        )
    }
}

export default connect((state) => ({
    blogList: state.getBlogList,
}))(view)
