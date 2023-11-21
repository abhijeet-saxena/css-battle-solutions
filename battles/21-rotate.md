---
description: 4 weeks full of crazy letter art! Time to do some CSS art calligraphy.
---

# Rotate

## [Root Learn](https://cssbattle.dev/play/125)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/125.png">

#### Solution:

```html
<div></div>
<p></p>
<h1></h1>
<h2></h2>
<style>
  body {
    background: #eff2f1;
  }
  body > *,
  *::before,
  *::after {
    position: fixed;
    content: "";
    background: #1c1c1c;
  }
  div {
    width: 40px;
    height: 180px;
    top: 60px;
    left: 130px;
  }
  p {
    width: 100px;
    height: 90px;
    top: 44px;
    left: 160px;
    border-radius: 0 60px 60px 0;
  }
  p::before {
    width: 50px;
    height: 60px;
    background: #eff2f1;
    top: 75px;
    left: 170px;
    border-radius: 0 60px 60px 0;
  }
  p::after {
    width: 20px;
    height: 21px;
    top: 60px;
    left: 110px;
    clip-path: polygon(0 0, 20px 0px, 20px 20px, 0px 9px);
  }
  h1 {
    width: 80px;
    height: 20.5px;
    top: 198px;
    left: 110px;
    clip-path: polygon(20px 0, 60px 0, 100% 12px, 100% 100%, 0 100%, 0 12px);
  }
  h2 {
    width: 110px;
    height: 91px;
    top: 129px;
    left: 179px;
    clip-path: polygon(0 0, 46px 0, 88px 73px, 100% 84px, 100% 100%, 53px 100%);
  }
</style>
```

#### Minified:

```html
TBD
```

## [Letter A](https://cssbattle.dev/play/126)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/126.png">

#### Solution:

```html
<p></p>
<style>
  body {
    background: linear-gradient(
        #62306d 80px,
        transparent 80px,
        transparent 220px,
        #62306d 0
      ), linear-gradient(
        -70deg,
        transparent 247px,
        #fef9ca 247px,
        #fef9ca 287px,
        #62306d 0
      ), linear-gradient(70deg, #62306d 247px, #c5b732 247px, #c5b732 287px, #62306d
          0);
  }
  p {
    width: 150px;
    height: 50px;
    margin: 170px auto 0;
    background: linear-gradient(
        -50deg,
        transparent 72px,
        #e38f66 72px,
        #e38f66 112px,
        transparent 0
      ), linear-gradient(50deg, transparent 72px, #aa445f 72px, #aa445f 112px, transparent
          0);
  }
</style>
```

#### Minified:

```html
TBD
```

## [Letter I](https://cssbattle.dev/play/127)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/127.png">

#### Solution:

```html
<div></div>
<style>
  body {
    background: radial-gradient(
        circle at 125px 215px,
        #fade8b 15px,
        transparent 0
      ), radial-gradient(circle at 275px 85px, #fade8b 15px, #e3516e 0);
  }
  div {
    width: 100px;
    height: 30px;
    margin: 70 auto;
    background: #fade8b;
    border-radius: 15px;
    box-shadow: 0 130px 0 0 #fade8b;
  }
  div::before,
  div::after {
    position: absolute;
    content: "";
  }
  div::before {
    width: 46px;
    height: 100px;
    background: #fade8b;
    top: 100;
    left: 177;
  }
  div::after {
    width: 30px;
    height: 100px;
    background: #e3516e;
    top: 100;
    border-radius: 10px;
    left: 155;
    box-shadow: 60px 0 0 0 #e3516e;
  }
</style>
```

#### Minified:

```html
TBD
```

## [Letter N](https://cssbattle.dev/play/128)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/128.png">

#### Solution:

```html
<div></div>
<style>
  body {
    background: linear-gradient(
        to right,
        #998235 135px,
        #0b2429 135px,
        #0b2429 175px,
        transparent 0px
      ), linear-gradient(
        70deg,
        #998235 219px,
        #fcbe5c 219px,
        #fcbe5c 259px,
        transparent 0px
      ), linear-gradient(to right, #998235 225px, #0b2429 225px, #0b2429 265px, #998235
          0px);
  }
  div {
    width: 100px;
    height: 70px;
    background: #998235;
    margin: -8 100px;
    box-shadow: 70px 230px 0 0 #998235;
  }
</style>
```

#### Minified:

```html
<body bgcolor=998235><p><p a><h1><style>p{width:40;height:230;background:#0B2429;margin:-8 217}h1{width:42;height:160;background:linear-gradient(110deg,#0B2429 25q,#FCBE5C 0);margin:-60%171;transform:skewX(20deg)}[a]{margin:-160 127
```

## [Letter B](https://cssbattle.dev/play/129)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/129.png">

#### Solution:

```html
<div></div>
<style>
  body {
    background: #6592cf;
  }
  div {
    width: 100px;
    height: 80px;
    background: #060f55;
    margin: 80 102;
    border-radius: 0 40px 40px 0;
    box-shadow: 0 60px 0 0 #060f55, 40px 0px 0 0 #2e3b9f, 40px 60px 0 0 #2e3b9f,
      80px 0px 0 0 #515dbd, 80px 60px 0 0 #515dbd;
  }
</style>
```

#### Minified:

```html
<body bgcolor=6592CF><p><style>p{width:100;height:80;background:#060F55;color:515DBD;margin:80 102;border-radius:0 5ch 5ch 0;box-shadow:0 64q#060F55,5ch 0px#2E3B9F,5ch 64q#2E3B9F,5em 0px,5em 64q
```

## [Letter O](https://cssbattle.dev/play/130)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/130.png">

#### Solution:

```html
<div></div>
<p></p>
<style>
  body {
    background: #926927;
  }
  div,
  p {
    width: 60px;
    height: 120px;
    border: solid 20px #6d480a;
    margin: 70px 132px;
    border-radius: 30px;
  }
  p {
    position: fixed;
    border-color: #fff;
    top: 0;
    left: 28;
  }
</style>
```

#### Minified:

```html
<body bgcolor=926927><p><style>*>*{width:60;height:120;color:6D480A;border:solid 20px;margin:70 140;border-radius:30px}p{color:FFF;margin:-20 0
```

## [Letter W](https://cssbattle.dev/play/131)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/131.png">

#### Solution:

```html
<div></div>
<style>
  body {
    background: #e38f66;
  }
  div {
    width: 30px;
    height: 20px;
    background: #62306d;
    border-radius: 20px 20px 0 0;
    margin: 70px 87px;
    box-shadow: 90px 0 0 0 #62306d, 180px 0 0 0 #fffbda;
  }
  div::before,
  div:after {
    content: "";
    position: absolute;
    width: 60px;
    height: 115px;
    border: solid 30px #62306d;
    border-top: none;
    top: 85px;
    border-radius: 0 0 60px 60px;
  }
  div::after {
    left: 185px;
    border-color: #fffbda;
    z-index: -1;
  }
</style>
```

#### Minified:

```html
<p a><p><p c><style>*{background:#E38F66;color:62306D}p{width:60;height:100;border:solid 32q;border-radius:0 0 63q 63q;border-top:0;margin:-60%87}[a]{color:FFFBDA;margin:100 177}[c]{width:30;border:0;background:#FFFBDA;border-radius:55q;margin:70 267;box-shadow:-95q 0,-60vh 0;
```

## [Letter S](https://cssbattle.dev/play/132)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/132.png">

#### Solution:

```html
<div></div>
<style>
  body {
    background: #4f77ff;
  }
  body::before {
    position: fixed;
    content: "";
    width: 20px;
    height: 20px;
    background: #ffffff;
    top: 120px;
    left: 80px;
    box-shadow: 220px 40px 0 0 #ffffff;
  }
  div {
    width: 240px;
    height: 20px;
    background: #ffffff;
    margin: 140px 72px;
    border-radius: 0 10px 0 10px;
  }
  div:before,
  div::after {
    position: fixed;
    content: "";
    width: 240px;
    height: 50px;
    background: #ffffff;
    top: 70px;
    left: 80px;
    border-radius: 10px;
  }
  div::before {
    border-bottom-left-radius: 0;
    box-shadow: 20px -20px 0 0 #1038bf;
  }
  div::after {
    top: 180px;
    border-top-right-radius: 0;
    box-shadow: -20px 20px 0 0 #1038bf;
  }
</style>
```

#### Minified:

```html
<body bgcolor=4F77FF><p><p a><p b><style>p{width:240;height:20;background:#FFF;border-radius:10q;margin:140 72}[a]{height:50;margin:-230 72;color:1038BF;box-shadow:0 116q#FFF,21q -21q,-21q 137q}[b]{width:20;height:50;margin:215 72;box-shadow:233q 40q#FFF
```

[\[↑ Scroll to top\]](#rotate)
