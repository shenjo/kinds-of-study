### 1.起因

  HTTP是一个没有状态的协议，即使是同一个人，在极短的时间内访问同一个服务器，服务器也会认为这是完全两个不同的请求，根本不知道是同一个人发出的。

  服务器无法分开访问者。 购物车？

  当用户访问服务器的时候，会给每个用户都建立一个会话，每个会话都有一个独一无二的ID。这个ID服务器端会保存，同时也会发回到浏览器这边，让浏览器暂存起来（cookie）。
  
  当用户访问同一网站的时候，浏览器把这个cookie 向服务器发送过去，服务器通过cookie取到那个会话ID，于是就知道是谁在访问它了
  
### 2.经过

  上面忽略了一个很重要的问题：安全
  
  
  security.com => cookie
  
  dangeous.com => 利用javascript访问security.com cookie
  
  
  dangeous.com => 利用cookie假冒用户
  
  【javascript 和 cookie 不同源】
  
  
  除非两个网页是来自于统一‘源头’， 否则不允许一个网页的JavaScript访问另外一个网页的内容，像Cookie，DOM，LocalStorage统统禁止访问！
  
  {protocol,host,port}必须得一样
  
  
 
  
  



