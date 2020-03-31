
#### nodejs:
服务端开发，利用数据库，cookie，session，Redis，获取和处理前端的请求。
#### express :
nodejs的框架 app ，router

#### mysql：
数据库

#### redis
存储在服务端的内存里

 为什么session适合用redis？ session访问频繁，对性能要求极高 session可不考虑断电丢失数据的问题 session数据量不会太大（相比于mysql中存储的数据） mysql是硬盘数据库，redis是内存数据库

xss 
#### cookie ：
cookie有6个特点：小，跨域不共享，kv格式，跟随请求，server端可修改，js可修改（有限）

#### session
内存过大，会把进程的空间挤爆 2.多进程之间，数据无法共享

#### nginx

## 开发
代理
> cd html-test  
> http-server -p 8001

nginx 全局
> nginx  
> 假如已经占用 sudo nginx -s stop 再重启

redis 全局
> redis-server  
> redis-cli 

> cd blog-express
> npm run dev


## 配置
nginx 配置
> sudo vi  /usr/local/etc/nginx/nginx.conf 

```
location / {
	proxy_pass http://localhost:8001;
}
location /api/{
	proxy_pass http://localhost:8000;
	proxy_set_header Host $host;
}
```

mysql配置
- 账号:root
- 密码:password


## 其他
### session 与cookie 的区别
Session是在服务端保存的一个数据结构，用来跟踪用户的状态，这个数据可以保存在集群、数据库、文件中；
Cookie是客户端保存用户信息的一种机制，用来记录用户的一些信息，也是实现Session的一种方式

### 安全

### 日志

