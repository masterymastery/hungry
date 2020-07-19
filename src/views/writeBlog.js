import React from 'react'
// import TinyMce from '../components/TinyMce'
import { Input, Button, Upload, message } from 'antd'
import { HashRouter as Router, Route } from 'react-router-dom'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { writeBlogListAsync } from '../redux/actions'
import { Components } from 'antd/lib/date-picker/generatePicker'

function getBase64(img, callback) {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!')
    }
    const isLt5M = file.size / 1024 / 1024 < 5
    if (!isLt5M) {
        message.error('Image must smaller than 5MB!')
    }
    return isJpgOrPng && isLt5M
}
let baseUrl = process.env.NODE_ENV === 'development' ? '/api' : '/'
class writeBlog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            contentType: '',
            coverPath: '',
            intro: '',
            content: '',
            createTime: '',
            publishType: '发布',
        }
    }
    state = {
        loading: false,
    }
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true })
            return
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (imageUrl) =>
                this.setState({
                    imageUrl,
                    loading: false,
                })
            )
        }
    }
    handlerFunc = async () => {
        var par = {
            title: this.state.title,
            contentType: this.state.contentType,
            coverPath: '封面',
            intro: this.state.intro,
            content: this.state.content,
            createTime: new Date(),
            publishType: '发布',
        }
        var res = await writeBlogListAsync(par)
        if (res.errcode === 0) {
            message.success('添加成功')
            this.props.history.replace('/')
        } else {
            message.error(res.errmsg)
        }
        // console.log(par)
    }
    title_change(e) {
        this.setState({
            title: e.target.value,
        })
    }
    intro_change(e) {
        this.setState({
            intro: e.target.value,
        })
    }
    contentType_change(e) {
        this.setState({
            contentType: e.target.value,
        })
    }
    content_change(e) {
        this.setState({
            content: e.target.value,
        })
    }
    render() {
        const view = {
            width: '60%',
            margin: '0 auto',
        }
        const { TextArea } = Input
        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">Upload</div>
            </div>
        )
        const { imageUrl } = this.state
        return (
            <div style={view} className="view">
                主题：
                <Input value={this.state.title} onChange={this.title_change.bind(this)} placeholder="主题：" />
                类型：
                <Input value={this.state.contentType} onChange={this.contentType_change.bind(this)} placeholder="类型：" />
                封面：
                <Upload name="avatar" listType="picture-card" className="avatar-uploader" showUploadList={false} action="" beforeUpload={beforeUpload} onChange={this.handleChange}>
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
                简介：
                <Input value={this.state.intro} onChange={this.intro_change.bind(this)} placeholder="简介：" />
                内容：
                <TextArea rows={4} value={this.state.content} onChange={this.content_change.bind(this)} />
                <Button type="primary" onClick={this.handlerFunc}>
                    发布
                </Button>
            </div>
        )
    }
}

export default writeBlog
