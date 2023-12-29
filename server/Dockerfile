# 基础镜像
# FROM <image>
# FROM <image>:<tag>
# FROM <image>@<digest>
FROM centos:centos7

# 镜像拥有者
# MAINTAINER <name>
MAINTAINER fengsha


RUN mkdir /music_server

ADD ./ /music_server

## 安装chrome
RUN yum install -y wget
RUN wget -O /music_server/chrome/google-chrome-stable_current_x86_64.rpm https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
RUN chmod 777 /music_server/chrome/google-chrome-stable_current_x86_64.rpm
RUN yum -y install /music_server/chrome/google-chrome-stable_current_x86_64.rpm
RUN chmod +x /music_server/main
RUN chmod 777 /music_server/main

# 设置容器启动时运行的命令,常驻命令避免立马退出
CMD ["tail", "-f", "/dev/null"]