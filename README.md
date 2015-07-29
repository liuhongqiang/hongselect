HongSelect
=======
A simple select plugin based on jQuery.

一个基于jQuery的简单select插件。

![hongselect](http://www.smallyard.cn/img/hongselect.png)

##一.安装

###1.使用bower
```shell
bower install hongselect
```

###2.直接下载
https://github.com/liuhongqiang/hongselect/releases

##二.用例
###1.引用hongselect的js文件
>在这之前要引用[jQuery](http://jquery.com/)

```html
<script type="text/javascript" src="dist/hongselect.min.js"></script>
```
###2.引用hongselect的css文件
```html
<script type="text/javascript" src="dist/hongselect.min.css"></script>
```
###3.编写select html
```html
<select id="myselect">
  <option value="1">one</option>
  <option value="2" selected>two</option>
  <option value="3">three</option>
  <option value="4">four</option>
  <option value="5">five</option>
</select>
```
###4.调用hongselect
```javascript
$("#myselect").hongselect();
```




