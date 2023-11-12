---
description: 6 targets to battle out over 2 weeks and learn about best practices against Corona Virus 🔥
---

# Block

## [Corona Virus](https://cssbattle.dev/play/47)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/47.png">

#### Solution:

```html
<div class="virus">
  <div class="spots"></div>
</div>
<style>
  body {
    background: #1a4341;
    display: grid;
    place-items: center;
  }
  .virus {
    width: 100px;
    height: 100px;
    background: #f3ac3c;
    border-radius: 50%;
    position: relative;
  }
  .spots {
    width: 10px;
    height: 10px;
    background: #998235;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    left: 70px;
    box-shadow: -25px 50px 0 5px #998235, -40px 10px 0 10px #998235;
    z-index: 1;
  }
  body::before,
  body::after {
    content: "";
    position: absolute;
    width: 180px;
    height: 10px;
    background: #f3ac3c;
    border-radius: 4px;
    top: 150px;
    left: 119px;
    transform: rotate(30deg);
  }
  body::after {
    top: 140px;
    left: 119px;
    transform: rotate(-30deg);
  }
  .virus::after {
    content: "";
    position: absolute;
    background: #f3ac3c;
    border-radius: 4px;
    top: -50px;
    left: 45px;
    width: 10px;
    height: 180px;
    transform: none;
    z-index: -1;
  }
</style>
```

#### Minified:

```html
TBD
```

## [Wash Your Hands](https://cssbattle.dev/play/48)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/48.png">

#### Solution:

```html
<div class="soap"></div>
<style>
  body {
    background: #293462;
    margin: 0;
  }
  .soap {
    width: 200px;
    height: 100px;
    border-radius: 20px;
    background: #fe5f55;
    margin: 90px auto;
    box-shadow: 0 20px 0 0 #a64942;
    position: relative;
  }
  .soap::after {
    content: "";
    position: absolute;
    background: #a64942;
    width: 140px;
    height: 40px;
    border-radius: 50px;
    top: 30px;
    left: 30px;
  }
</style>
```

#### Minified:

```html
<body bgcolor=293462><p><h1><style>p{width:200;height:100;border-radius:20q;background:#FE5F55;margin:90 92;box-shadow:0 20px#A64942}h1{background:#A64942;width:140;height:40;border-radius:4em;margin:-160 122
```

## [Stay At Home](https://cssbattle.dev/play/49)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/49.png">

#### Solution:

```html
<div></div>
<style>
  body {
    background: #6592cf;
  }
  body::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: solid 100px transparent;
    border-bottom-color: #243d83;
    top: -50px;
    left: 100px;
  }
  div {
    margin: 140px auto;
    width: 150px;
    height: 110px;
    background: #243d83;
    border-radius: 0 0 10px 10px;
    position: relative;
  }
  div::before,
  div::after {
    position: absolute;
    content: "";
    background: #eeb850;
    width: 50px;
    height: 50px;
    bottom: 0;
    left: 50px;
    border-radius: 10px 10px 0 0;
  }
  div::after {
    width: 100px;
    top: 5px;
    left: 25px;
    height: 10px;
    z-index: 1;
    border-radius: 10px;
  }
</style>
```

#### Minified:

```html
<body bgcolor=6592CF><p><h1><h2 a><h2><style>p{width:200;height:100;background:#243D83;margin:50 92;clip-path:polygon(50%0,100%100%,0%100%)}h1{width:150;height:100;background:#243D83;margin:-50 117;border-radius:0 0 10q 10q}h2{width:100;height:10;background:#EEB850;border-radius:10q;position:fixed;top:125;left:150}[a]{border-radius:10q 10q 0 0;width:50;height:50;top:180;left:175
```

## [Use Hand Sanitizer](https://cssbattle.dev/play/50)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/50.png">

#### Solution:

```html
<div class="bottle"></div>
<style>
  body {
    background: #1a4341;
  }
  .bottle {
    margin: 110px auto;
    width: 100px;
    height: 140px;
    background: linear-gradient(#f3ac3c 55px, #998235 55px);
    border-radius: 20px;
    position: relative;
  }
  div::before,
  div::after {
    position: absolute;
    content: "";
    background: #f3ac3c;
    width: 50px;
    height: 50px;
    left: 25px;
    top: -20px;
    border-radius: 10px;
  }
  div::after {
    width: 20px;
    height: 40px;
    left: 40px;
    top: -50px;
    box-shadow: 90px -10px 0 0 #f3ac3c;
  }
  body::after {
    position: absolute;
    content: "";
    background: #998235;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    z-index: 1;
    top: 155px;
    left: 165px;
    box-shadow: 0px 0px 0 15px #998235, 50px 0px 0 15px #f3ac3c,
      115px -55px 0 0 #998235, 115px -55px 0 0 #998235, 115px -25px 0 0 #998235;
  }
  body::before {
    position: absolute;
    content: "";
    background: #f3ac3c;
    width: 150px;
    height: 20px;
    top: 50px;
    left: 150px;
    border-radius: 10px;
  }
</style>
```

#### Minified:

```html
<p><p a><p b><p c><p d><style>&{background:#1A4341}p{background:#F3AC3C;width:150;height:20;border-radius:10q;margin:50 142;color:F3AC3C}[a]{height:30;width:20;border-radius:0;margin:-50 182;border-radius:0 0 10q 10q;box-shadow:95q -11q}[b]{width:50;border-radius:10q 10q 0 0;margin:40 167}[c]{width:100;height:140;background:linear-gradient(#F3AC3C 55q,#998235 0);border-radius:22q;margin:-40 142}[d]{width:20;height:20;border-radius:50%;background:#998235;margin:-39%272;box-shadow:0 32q#998235,-115px 58q 0 15px#998235,-69q 58q 0 16q
```

## [Wear a Mask](https://cssbattle.dev/play/51)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/51.png">

#### Solution:

```html
<div></div>
<style>
  body {
    background: #293462;
  }
  body::after {
    position: absolute;
    content: "";
    width: 250px;
    height: 40px;
    top: 100px;
    left: 65px;
    border: solid 10px #fff1c1;
    border-radius: 50px;
    z-index: -1;
  }
  div {
    margin: 110px auto;
    width: 150px;
    height: 90px;
    background: #fff1c1;
    border-radius: 0 0 50px 50px;
    position: relative;
  }
  div::before,
  div::after {
    position: absolute;
    content: "";
    background: #fe5f55;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    right: 20px;
    bottom: 20px;
  }
  div::after {
    width: 40px;
    height: 10px;
    bottom: 70px;
    right: 90px;
    border-radius: 5px;
    box-shadow: 0px 20px 0 0 #fe5f55;
  }
  bodsy::after {
    position: absolute;
    content: "";
    background: #998235;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    z-index: 1;
    top: 155px;
    left: 165px;
    box-shadow: 0px 0px 0 15px #998235, 50px 0px 0 15px #f3ac3c,
      115px -55px 0 0 #998235, 115px -55px 0 0 #998235, 115px -25px 0 0 #998235;
  }
</style>
```

#### Minified:

```html
<body bgcolor=293462><p><h1><h2><style>p{width:250;height:40;border:solid 11q#FFF1C1;border-radius:4em;margin:26%57}h1{margin:-39%117;width:150;height:90;background:radial-gradient(circle at 116q 53q,#FE5F55 20px,#FFF1C1 0);border-radius:0 0 52q 52q}h2{width:40;height:10;border-radius:5q;background:#FE5F55;margin:70 137;box-shadow:0 21q#FE5F55
```

## [Break the Chain](https://cssbattle.dev/play/52)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/52.png">

#### Solution:

```html
<div></div>
<style>
  body {
    background: #6592cf;
  }
  div {
    width: 10px;
    height: 45px;
    background: #243d83;
    position: relative;
    top: 137px;
    left: 37px;
    box-shadow: 45px 0 0 0 #243d83, 90px 0 0 0 #243d83, 165px 0 0 0 #243d83, 210px
        0 0 0 #243d83, 255px 0 0 0 #243d83, 300px 0 0 0 #243d83;
  }
  div::before {
    position: absolute;
    content: "";
    background: #243d83;
    top: -15px;
    left: -5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #eeb850, 45px 0 0 0 #243d83, 90px 0 0 0 #243d83, 165px
        0 0 0 #243d83, 210px 0 0 0 #243d83, 255px 0 0 0 #243d83,
      300px 0 0 0 #243d83, 45px -10px 0 20px #eeb850, 90px 0 0 10px #eeb850;
    z-index: -1;
  }
</style>
```

#### Minified:

```html
<p><h1><style>&{background:radial-gradient(circle at 95px 138q,#EEB850 32q,#6592CF 0);color:243D83}p{background:#243D83;width:20;height:20;border-radius:50%;margin:130 32;box-shadow:48q 0,95q 0,175q 0,70vh 0,270q 0,318q 0,0 0 0 10px#EEB850,95q 0 0 10px#EEB850}h1{width:10;height:45;background:#243D83;box-shadow:45px 0,95q 0,175q 0,70vh 0,270q 0,318q 0;margin:-35% 37Chris
```
