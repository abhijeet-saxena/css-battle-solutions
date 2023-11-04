# Christmas

## [Snowman](https://cssbattle.dev/play/97)

<img width="400px" src="https://cssbattle.dev/targets/97.png">

#### Solution:

```html
<div></div>
<style>
  body {
    background: #ac474b;
  }
  body::before,
  body::after,
  div::before,
  div::after {
    position: fixed;
    content: "";
    z-index: 1;
  }
  body::before {
    top: 143px;
    left: 170px;
    width: 60px;
    height: 10px;
    background: #ffa63f;
    z-index: 2;
    border-radius: 10px;
  }
  body::after {
    top: 139px;
    left: 162px;
    width: 80px;
    height: 18px;
    background: #ac474b;
  }
  div {
    position: fixed;
    top: 113px;
    left: 185px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #0e1f2b;
    box-shadow: 20px 0 0 0 #0e1f2b, 10px 7px 0 25px #ffffff,
      10px 77px 0 45px #ffffff;
  }
  div::before {
    width: 40px;
    height: 45px;
    background: linear-gradient(
      to bottom,
      #0e1f2b 33%,
      #ffffff 33%,
      #ffffff 56%,
      #0e1f2b 56%
    );
    top: 55;
    left: 180;
  }
  div::after {
    top: 95;
    left: 170px;
    width: 60px;
    height: 5px;
    background: #0e1f2b;
  }
</style>
```

#### Minified:

```html
TBD
```

## [Candle](https://cssbattle.dev/play/98)

<img width="400px" src="https://cssbattle.dev/targets/98.png">

#### Solution:

```html
<div></div>
<style>
  body {
    background: #14313e;
  }
  body::before,
  div::before,
  div::after {
    position: absolute;
    content: "";
  }
  body::before {
    width: 30px;
    height: 50px;
    background: #f3ac3c;
    border-radius: 50px 0;
    top: 60px;
    left: 200px;
    z-index: 1;
  }
  div {
    position: fixed;
    top: 125px;
    left: 160px;
    width: 80px;
    height: 100px;
    background: #ba3e46;
  }
  div::before {
    background: #f3695a;
    width: 80px;
    height: 30px;
    border-radius: 50%;
    top: -15px;
    left: 0px;
    box-shadow: 0 100px 0 0 #ba3e46;
  }
  div::after {
    top: -25px;
    left: 10px;
    width: 60px;
    height: 30px;
    border-radius: 50%;
    background: #14313e;
  }
</style>
```

#### Minified:

```html
<body bgcolor=14313E><p><h1 a><h1><h3><style>p{width:80;height:100;background:#BA3E46;margin:128 152}h1{width:60;height:30;background:#14313E;border-radius:50%;margin:206 162}[a]{width:80;background:#F3695A;margin:-64%152;box-shadow:0 106q#BA3E46}h3{width:30;height:50;background:#F3AC3C;border-radius:50q 0;margin:-72%192
```

## [Gift Box](https://cssbattle.dev/play/99)

<img width="400px" src="https://cssbattle.dev/targets/99.png">

#### Solution:

```html
<div></div>
<style>
  body {
    background: linear-gradient(
        #ac474b 110px,
        transparent 110px,
        transparent 170px,
        #ac474b 170px,
        #ac474b 190px,
        transparent 190px,
        transparent 250px,
        #ac474b 250px
      ), linear-gradient(to right, #ac474b 130px, transparent 130px, transparent
          190px, #ac474b 190px, #ac474b 210px, transparent 210px, transparent
          270px, #ac474b 0px);
  }
  body::before,
  body::after {
    position: fixed;
    content: "";
    width: 20px;
    height: 20px;
    background: #ac474b;
    border: solid 10px #ffffff;
    top: 50px;
    left: 165px;
    border-radius: 50px 50px 0 50px;
  }
  body::after {
    left: 195px;
    transform: rotateY(180deg);
  }
</style>
```

#### Minified:

```html
<body bgcolor=AC474B><p><p a><h1><style>*{color:FFF}p{width:20;height:20;border:solid 10px;border-radius:50%50%0 50%;margin:13%157}[a]{margin:-90 187;scale:-1 1}h1{width:0;border:solid 32q;margin:110 122;box-shadow:5ch 0,5ch 5ch,0 5ch
```

## [CSSBattle](https://cssbattle.dev/play/100)

<img width="400px" src="https://cssbattle.dev/targets/100.png">

#### Solution:

```html
<div></div>
<p class="one"></p>
<p class="two"></p>
<h1></h1>
<h2></h2>
<h3></h3>
<style>
  body {
    background: #14313e;
  }
  body::before,
  body::after,
  div::before,
  div::after {
    position: fixed;
    content: "";
  }
  div {
    position: fixed;
    top: 75px;
    left: 63px;
    width: 214px;
    height: 90px;
    border: solid 30px #ffdf00;
    border-radius: 20px;
  }
  div::before {
    top: 0;
    bottom: 0;
    left: 103px;
    right: 103px;
    background: #14313e;
    z-index: 1;
  }
  div::after {
    width: 294px;
    height: 40px;
    background: #ffdf00;
    top: 130px;
    left: 53px;
    border-radius: 5px;
  }
  body::before {
    width: 224px;
    height: 100px;
    background: #14313e;
    top: 100px;
    left: 88px;
    z-index: 1;
    border-radius: 10px;
  }
  p {
    position: relative;
    width: 148px;
    height: 30px;
    background: #ffdf00;
    z-index: 1;
  }
  .one {
    top: 110px;
    left: 107px;
    transform: rotate(45deg);
  }
  .two {
    top: 64px;
    left: 130px;
    transform: rotate(135deg);
  }
  p::before,
  p::after {
    position: absolute;
    content: "";
  }
  p::before {
    width: 20px;
    height: 80px;
    background: #ffdf00;
    left: 136px;
    top: -25px;
  }
  p::after {
    width: 50px;
    height: 20px;
    background: #ffdf00;
    border-radius: 8px;
    top: 5px;
    left: 145px;
  }
  h1 {
    position: fixed;
    z-index: 1;
    width: 50px;
    height: 10px;
    background: #14313e;
    transform: rotate(45deg);
    top: 132px;
    left: 160px;
    box-shadow: 0 -40px 0 0 #14313e;
  }
  h2,
  h3 {
    position: fixed;
    z-index: 1;
    width: 0px;
    height: 0px;
    border: solid 15px transparent;
    border-bottom-color: #ffdf00;
    transform: rotate(-45deg);
    top: 36;
    left: 112;
  }
  h3 {
    transform: rotate(45deg);
    top: 37;
    left: 259;
  }
</style>
```

#### Minified:

```html
TBD
```
