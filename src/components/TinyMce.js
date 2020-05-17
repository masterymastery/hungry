import React from 'react'
import ReactDOM from 'react-dom'
import TinyMCE from 'react-tinymce'
import { Editor } from '@tinymce/tinymce-react'
// import tinymce from 'tinymce/tinymce'
// import 'tinymce/skins/content/default/content.css'
// import 'tinymce/themes/silver'
// import 'tinymce/plugins/image' // 插入上传图片插件
// // import 'tinymce/plugins/media'
// import 'tinymce/plugins/table' // 插入表格插件
// import 'tinymce/plugins/code' // 插入表格插件
// import 'tinymce/plugins/lists' // 列表插件
// import 'tinymce/plugins/wordcount' // 字数统计插件
// import 'tinymce/plugins/searchreplace'
// import 'tinymce/plugins/autolink'
// import 'tinymce/plugins/directionality'
// import 'tinymce/plugins/visualblocks'
// import 'tinymce/plugins/visualchars'
// import 'tinymce/plugins/fullscreen'
// import 'tinymce/plugins/codesample'
// import 'tinymce/plugins/charmap'
// import 'tinymce/plugins/hr'
// import 'tinymce/plugins/pagebreak'
// import 'tinymce/plugins/nonbreaking'
// import 'tinymce/plugins/anchor'
// import 'tinymce/plugins/insertdatetime'
// import 'tinymce/plugins/template'
// import 'tinymce/plugins/advlist'
// import 'tinymce/plugins/link'
// import 'tinymce/plugins/lists'
// import 'tinymce/plugins/wordcount'
// import 'tinymce/plugins/imagetools'
// import 'tinymce/plugins/textpattern'
// import 'tinymce/plugins/help'
// import 'tinymce/plugins/emoticons'
// import 'tinymce/plugins/emoticons/js/emojis'
// import 'tinymce/plugins/autosave'
// import 'tinymce/plugins/autoresize'

const baseUrl = process.env.VUE_APP_BASEURL

// components: {
//     Editor
// },
// name: 'tinymce',
// props: {
//     value: {
//         type: String,
//         default: ''
//     },
//     disabled: {
//         type: Boolean,
//         default: false
//     },
//     plugins: {
//         type: [String, Array],
//         default:
//             'searchreplace autolink directionality visualblocks visualchars fullscreen image link template code codesample table charmap hr nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help autosave autoresize'
//         // default: 'lists image table wordcount code'
//     },
//     toolbar: {
//         type: [String, Array],
//         default: `code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent |
// table image media charmap hr insertdatetime print preview | fullscreen | bullist numlist | subscript superscript removeformat
// styleselect formatselect fontselect fontsizeselect | `
//         // default: 'undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | code |lists image media table | removeformat '
//     }
// },
// data() {
//     return {
//         init: {
//             content_css: 'tinymce/skins/content/default/content.css',
//             language_url: 'tinymce/langs/zh_CN.js',
//             language: 'zh_CN',
//             skin_url: 'tinymce/skins/ui/oxide',
//             // skin_url: 'tinymce/skins/ui/oxide-dark',//暗色系
//             width: '100%',
//             min_height: 300,
//             // height: 550,
//             plugins: this.plugins,
//             toolbar: this.toolbar,
//             branding: true,
//             menubar: true,
//             resize: true,
//             convert_urls: false,
//             formats: {
//                 bold: { inline: 'span', styles: { 'font-weight': 'bold' } },
//                 italic: { inline: 'span', styles: { 'font-style': 'italic' } }
//             },
//             //automatic_uploads: true,
//             // images_upload_url: "/blog/update/cover"
//             // images_upload_base_path: "/blog",
//             // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
//             // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
//             images_upload_handler: (blobInfo, success, failure) => {
//                 // const img = "data:image/jpeg;base64," + blobInfo.base64();
//                 // success(img);
//                 var xhr, formData
//                 xhr = new XMLHttpRequest()
//                 xhr.withCredentials = false
//                 xhr.open('POST', '/blog/update/cover')
//                 xhr.onload = function() {
//                     var json
//                     if (xhr.status != 200) {
//                         failure('HTTP Error: ' + xhr.status)
//                         return
//                     }
//                     json = JSON.parse(xhr.responseText)
//                     if (!json || typeof json.data.path != 'string') {
//                         failure('Invalid JSON: ' + xhr.responseText)
//                         return
//                     }
//                     success(baseUrl + json.data.path)
//                 }
//                 formData = new FormData()
//                 formData.append('file', blobInfo.blob(), blobInfo.filename())
//                 xhr.send(formData)
//             }
//         },
//         myValue: this.value
//     }
// },
// mounted() {
//     tinymce.init({})
// },
// methods: {
//     // 需要什么事件可以自己增加
//     onClick(e) {
//         this.$emit('onClick', e, tinymce)
//     },
//     // 可以添加一些自己的自定义事件，如清空内容
//     clear() {
//         this.myValue = ''
//     }
// },
// watch: {
//     value(newValue) {
//         this.myValue = newValue
//     },
//     myValue(newValue) {
//         this.$emit('input', newValue)
//     }
// }

class TinyMce extends React.Component {
    handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content)
    }

    render() {
        const editorObj = {
            height: '500px',
            language: 'zh_CN',
            // 放进项目的服务器上，用线上地址，部署之后应该可以正常使用
            language_url: './langs/zh_CN.js',
            plugins: 'table lists link image preview code',
            toolbar: `formatselect | code | preview | bold italic strikethrough forecolor backcolor | 
         link image | alignleft aligncenter alignright alignjustify  | 
         numlist bullist outdent indent`,
            relative_urls: false,
            file_picker_types: 'image',
            images_upload_url: '/blog/update/cover',
            image_advtab: true,
            image_uploadtab: true,
            images_upload_handler: (blobInfo, success, failure) => {
                //这里写你上传图片的方法
            }
        }
        return (
            <Editor
                inline={false}
                selector="editorStateRef" // 选择器
                apiKey="ty9pn1qtntcsgzjwqq67z8oiz4m0lvnl1ugogd15mghiceva"
                initialValue=""
                init={{ ...editorObj }}
                onEditorChange={this.handleEditorChange}></Editor>
        )
    }
    // render() {
    //     return (
    //         <div class="tinymce-box">
    //             <editor v-model="myValue" :init="init" :disabled="disabled" @onClick="onClick"> </editor>
    //         </div>
    //     )
    // }
}

export default TinyMce
