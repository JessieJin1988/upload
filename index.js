/**
 * 上传图片
 * API
 * 上传元素
 * 数量限制
 * 大小限制
 * 方向调整
 * 上传地址
 * 其他参数
 * 回调
 */
module.exports = exports = uploadImg;

function uploadImg() {

    var UploadImg = function (options, callBack) {
        this.options = {
            /*元素*/
            el: options.el || '',

            /*上传图片的数量*/
            imgLenth: options.el.file.length,

            /*图片大小限制，默认为5M*/
            maxSize: options.maxSize/1024 || 5120000,

            /*图片上传地址*/
            uploadUrl: options.uploadUrl || '',

        };
        this.callBack = callBack;
    };
    UploadImg.prototype = {
        /*上传*/
        upload: function(){
            /*没有文件则返回*/
            if(this.imgLenth ==0){
                return
            }
            for(var i=0; i<this.options.el.file.length-1; i++){
                var file = this.options.el.file[i];
                if(this.isImg(file) && this.isSizeOk(file)){

                }
            }
        },
        /*是否为图片格式*/
        isImg: function(file){
            if(file.type !="image/jpeg" && file.type != "image/png"){
                alert('请上传图片格式的文件')
            }else{
                return true;
            }
        },
        /*图片大小是否在限制内*/
        isSizeOk:function(file){
            if(file.size > this.options.maxSize){
                alert('请上传大小在'+ this.options.maxSize/1024 +'M内的图片')
            }else{
                return true;
            }
        },


        /*上传*/
        preview:function(){

        }
        /*图片数量判断*/
        /*图片大小限制*/
        /*压缩图片*/
        /*上传服务器*/
    }




};

