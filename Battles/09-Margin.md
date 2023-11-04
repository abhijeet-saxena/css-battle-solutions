# Margin

## [Magical Tree](https://cssbattle.dev/play/45)

<img width="200px" src="https://cssbattle.dev/targets/45.png">

#### Solution

```html
<div></div>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    background: #1a4341;
    margin: 0;
  }
  div {
    width: 90px;
    height: 120px;
    box-shadow: 0px 0px 0 30px #998235, 0px 0px 0 60px #1a4341,
      0px 0px 0 90px #f3ac3c;
    margin: 0 auto;
  }
  div::before,
  div::after {
    content: "";
    position: absolute;
    background: #998235;
    bottom: 30px;
    left: 65px;
    width: 270px;
    height: 30px;
  }
  div::after {
    background: #f3ac3c;
    width: 100%;
    top: 90px;
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
  }
</style>
```

#### Minified

```html
<body bgcolor=1A4341><p><h1><h1 a><style>p{width:90;height:122;border:solid 30px#998235;outline:solid 30px#1A4341;box-shadow:0 0 0 60px#F3AC3C;margin:-40 117}h1{width:270;height:30;background:#998235;margin:130 57}[a]{width:380;margin:-300 2;background:#F3AC3C;rotate:90deg
```

## [Mountains](https://cssbattle.dev/play/46)

<img width="200px" src="https://cssbattle.dev/targets/46.png">

#### Solution

```html
<div></div>
<style>
  body {
    background: #293462;
    display: grid;
    place-items: center;
  }
  div {
    width: 200px;
    height: 200px;
    background: #fff1c1;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
  }
  div::before,
  div::after {
    content: "";
    position: absolute;
    width: 200px;
    height: 150px;
    background: #fe5f55;
    top: 108px;
    left: 24px;
    transform: rotate(-45deg);
    box-shadow: -128px -30px 0 0 #fe5f55;
  }
</style>
```

#### Minified

```html
<body bgcolor=293462><p><style>p{width:200;height:200;background:#FFF1C1;border-radius:50%;overflow:hidden;position:relative;margin:50 92}p:after{content:"";position:absolute;width:200;height:150;background:#FE5F55;top:108;left:24;rotate:-45deg;box-shadow:-136q -32q#FE5F55
```
