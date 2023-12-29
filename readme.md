# 介绍：

## 系统采用：

[vue-pure-admin](https://github.com/pure-admin/vue-pure-admin)

[go-zero](https://github.com/zeromicro/go-zero)：goquery，chromedp

[aplayer.js](https://aplayer.js.org/#/zh-Hans/)

## 原理：

使用chromedp调用chrome浏览器，模拟访问音乐网站。使用goquery对获取到的内容分析，解析音乐文件地址，歌词，图片地址。使用aplayer进行播放。

mysql存贮用户的喜欢的音乐信息。

## 需要暴露端口：

80，888

执行命令如下

```shell
#安装docker
wget -qO- https://get.docker.com | sh

#开机启动daocker
sudo systemctl enable docker

#开放端口888，80
sudo firewall-cmd --zone=public --add-port=888/tcp --permanent
sudo firewall-cmd --zone=public --add-port=80/tcp --permanent
sudo firewall-cmd --reload
```



## PS:

如果启动报错权限不足，执行命令 chmod 777 server/main
