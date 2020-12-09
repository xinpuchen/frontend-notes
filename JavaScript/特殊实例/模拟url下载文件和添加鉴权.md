# 模拟 url 下载文件和添加鉴权

- 通过发送请求获取文件内容
- 请求过程中可控制请求头和请求参数，以起到鉴权的效果
- 将获取内容转化为 base64 地址
- 临时创建链接标签并模拟点击，之后迅速删除

```js
import axios from 'axios';

axios({
  method: 'post',
  url: 'http://file/path',
  responseType: 'blob',
})
  .then(res => {
    const link = document.createElement('a');
    const blob = new Blob([res.data], { type: 'application/vnd.ms-excel' });
    const fileName = res.headers['content-disposition']
      .split(';')[1]
      .split('filename=')[1];
    link.style.display = 'none';
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', decodeURIComponent(fileName));
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  })
  .catch(error => {
    console.log(error);
  });
```
