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
##三.方法

```javascript
//设置选中值
$("#myselect").hongselect("setSelectVal", 1);

//更新
$("#myselect").hongselect("refresh");

//隐藏
$("#myselect").hongselect("hide");

//显示
$("#myselect").hongselect("show");

//销毁
$("#myselect").hongselect("destroy");
```

##四.自定义皮肤
###1.编写皮肤css
```css
.myskin_hongselect {
    width: 150px;
    position: absolute;
}

.myskin_info_span {
    cursor: pointer;
    text-indent: 10px;
    color: #666;
    display: block;
    padding-right: 20px;
    height: 30px;
    line-height: 25px;
    background: url(../img/arrow.png) no-repeat right center;
    position: relative;
    border: 1px solid #ccc;
    text-overflow: ellipsis;
    overflow: hidden;
}

.myskin_dl {

    border-bottom: 1px solid #ccc;
    margin: 1px 0 0;
}

.myskin_dd {
    cursor: pointer;
    height: 30px;
    line-height: 25px;
    color: #666;
    white-space: normal;
    padding: 0 10px;
    background: #f1f1f1;
    margin: 0;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    text-overflow: ellipsis;
    overflow: hidden;
}

.myskin_dd_hover {
    background: #fff;
}
  
```
###2.使用皮肤
```javascript
$("#myselect").hongselect({theme: "myskin"});
```


