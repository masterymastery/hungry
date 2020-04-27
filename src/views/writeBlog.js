import React from 'react'
import TinyMce from '../components/TinyMce'
import { Input, Button, Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
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

class writeBlog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    state = {
        loading: false
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
                    loading: false
                })
            )
        }
    }
    handlerFunc = () => {
        // debugger
    }
    render() {
        const { TextArea } = Input
        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">Upload</div>
            </div>
        )
        const { imageUrl } = this.state
        return (
            <div className="view">
                主题：
                <Input placeholder="主题：" />
                类型：
                <Input placeholder="类型：" />
                封面：
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                    onChange={this.handleChange}>
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
                简介：
                <Input placeholder="简介：" />
                内容：
                <TinyMce v-model="msg"></TinyMce>
                <Button type="primary" onClick={this.handlerFunc}>
                    发布
                </Button>
            </div>
        )
    }
}

export default writeBlog
