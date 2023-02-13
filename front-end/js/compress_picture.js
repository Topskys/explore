// 图片压缩
const compress_img=(imgBase64,quality,mimeType)=>{
  let [canvas,img]=[document.createElement('canvas'),document.createElement('img')]
  
  img.src=imgBase64
  img.onload=()=>{
    // canvas 宽高   
    canvas.width=200
    canvas.height=200
    
    let ctx=canvas.getContext('2d')
    ctx.drawImage(img,0,0,400,400) // 从左上角开始绘制，宽高均为400，可自行修改
    
    // 将canvas对象转换为base64位编码    
    const newImgBase64 = canvas.toDataURL(mimeType,quality/100) // 参数：type，文件类型 encoderOptions，取值0~1，可用表示图片的质量
    console.log(newImgBase64) // 压缩后的图片base64
    }
}

const upload_button=(e)=>{
  // console.log(e.target.files[0])
  const read=new FileReader()
  read.onload=()=>{
    // read.result 读取原始图片base64
    compress_img(read.result,90,'image/jpeg')
  }
  read.readAsDataURL(e.target.files[0])
}
