---
description: 4 weeks full of CSS art! 8 fun targets coming your way!
---

# Spacing

## [Curtain](https://cssbattle.dev/play/109)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/109.png">

#### Solution:

```html
<div></div>
<style>
  body {
    background: #191919;
  }
  div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f6e59c;
    margin: 20px 12px;
    box-shadow: 0 60px 0 0 #f6e59c, 0 120px 0 0 #f6e59c, 0 180px 0 0 #f6e59c, 60px
        60px 0 0 #f6e59c, 60px 120px 0 0 #f6e59c, 120px 60px 0 0 #f6e59c,
      60px 0 0 0 #f6e59c, 120px 0 0 0 #f6e59c, 180px 0 0 0 #f6e59c;
  }
</style>
```

#### Minified:

```html
<body bgcolor=191919><p><style>p{width:275;height:275;background:radial-gradient(circle at 32px 32px,#F6E59C 20px,#191919 0);background-size:60px 60px;clip-path:polygon(0 0,100% 0,0 100%
```

## [Sunrays](https://cssbattle.dev/play/110)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/110.png">

#### Solution:

```html
<div></div>
<p></p>
<style>
  body {
    background: #d25b70;
  }
  div,
  div::before,
  div::after,
  p,
  p::before,
  p::after {
    width: 10px;
    height: 100px;
    background: #f2e09f;
    border-radius: 5px;
    margin: 80px auto;
    content: "";
    position: absolute;
  }
  div,
  p {
    position: relative;
  }
  div::before {
    transform: rotate(30deg);
    left: 35px;
    top: -70px;
  }
  div::after {
    transform: rotate(-30deg);
    left: -35px;
    top: -70px;
  }
  p {
    transform: rotate(90deg);
    top: -110;
    left: -70;
    box-shadow: 0 -140px 0 0 #f2e09f;
  }
  p::before {
    transform: rotate(30deg);
    left: -35px;
    top: -90px;
  }
  p::after {
    transform: rotate(-30deg);
    left: -35px;
    top: -210px;
  }
</style>
```

#### Minified:

```html
<p a><p b><p c><p d><p e><p f><body bgcolor=D25B70><style>p{width:100;height:10;background:#F2E09F;border-radius:5q;margin:195 72}[a]{box-shadow:35vw 0#F2E09F}[b]{rotate:30deg;margin:-240 81}[c]{rotate:-30deg;margin:230 202}[d]{rotate:60deg;margin:-69%107}[e]{rotate:-60deg;margin:255 177}[f]{rotate:90deg;margin:-72%142
```

## [Rain Drops](https://cssbattle.dev/play/111)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/111.png">

#### Solution:

```html
<div></div>
<style>
  body {
    background: radial-gradient(
        circle at 200px 80px,
        #254241 40px,
        transparent 0px
      ), radial-gradient(circle at 200px 220px, #254241 40px, transparent 0px),
      radial-gradient(circle at 120px 150px, #254241 40px, #f3ac3c 0px);
  }
  div {
    position: relative;
    margin: 111px auto;
    width: 0px;
    height: 0px;
    border: solid 26px transparent;
    border-top-color: #254241;
  }
  div::before,
  div::after {
    position: absolute;
    content: "";
    border: solid 26px transparent;
    border-left-color: #254241;
    top: -13px;
    left: -50px;
  }
  div::after {
    top: -0px;
    left: -25px;
    transform: rotate(-90deg);
  }
</style>
```

#### Minified:

```html
<body bgcolor=F3AC3C><p><p a><p a b><style>p{width:80;height:80;background:#254241;border-radius:50%50%0;margin:110 72;rotate:-45deg}[a]{margin:-260 152;rotate:45deg}[b]{margin:320 152;scale:-1
```

## [Chevron](https://cssbattle.dev/play/112)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/112.png">

#### Solution:

```html
<div></div>
<p></p>
<style>
  body {
    background: #6592cf;
  }
  div {
    width: 130px;
    height: 24px;
    background: #293d7e;
    position: relative;
    transform: rotate(38.5deg);
    top: 79px;
    left: 82px;
    box-shadow: 30px 39px 0 #293d7e, 60px 78px 0 #293d7e;
  }
  p {
    width: 130px;
    height: 24px;
    background: #293d7e;
    position: relative;
    transform: rotate(-38.5deg);
    top: 41px;
    left: 169px;
    box-shadow: -30px 39px 0 #293d7e, -61px 78px 0 #293d7e;
  }
  body::after,
  body::before,
  div::before,
  div::after,
  p::before,
  p::after {
    position: fixed;
    top: 50px;
    left: 78px;
    content: "";
    width: 37px;
    height: 18px;
    background: #293d7e;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
    transform: rotate(-0.5deg);
  }
  body::after {
    transform: rotate(2deg);
    top: 52px;
    left: 282px;
  }
  div::before {
    top: 46.5px;
    left: 7px;
    transform: rotate(-38.5deg);
  }
  div::after {
    top: -77px;
    left: 167px;
    transform: rotate(-40deg);
    z-index: 1;
  }
  p::before {
    transform: rotate(40deg);
    top: 86.5px;
    left: 56px;
  }
  p::after {
    transform: rotate(40deg);
    top: -45;
    left: -105;
  }
</style>
```

#### Minified:

```html
TBD
```

## [Black Light](https://cssbattle.dev/play/113)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/113.png">

#### Solution:

```html
<style>
  body {
    background: linear-gradient(3.5deg, #5776f6 125px, transparent 0px),
      linear-gradient(-3.5deg, #191919 200px, #5776f6 0);
  }
</style>
```

#### Minified:

```html
<style>*>*{background:linear-gradient(3.5deg,#5776F6 125px,transparent 0),linear-gradient(-3.5deg,#191919 50vw,#5776F6 0
```

## [Negative Box](https://cssbattle.dev/play/114)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/114.png">

#### Solution:

```html
<div></div>
<p></p>
<style>
  body {
    background: linear-gradient(
      -20deg,
      #000000 70px,
      #172d2c 70px,
      #172d2c 350px,
      #000000 0px
    );
    margin: 0;
  }
  div {
    width: 50%;
    height: 50%;
    background: #e9af53;
    margin-left: 200px;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
  }
  p {
    width: 50%;
    height: 75%;
    position: fixed;
    top: 60px;
    left: 0;
    background: #e9af53;
    clip-path: polygon(0 0, 100% 75px, 100% 100%, 0 150px);
  }
</style>
```

#### Minified:

```html
<body bgcolor=172D2C><p><p a><style>p{width:180;height:195;background:#E9AF53;margin:85 12;clip-path:polygon(0 0,100%33%,100%100%,0 67%)}p[a]{margin:-345 192;clip-path:polygon(0 0,100%33%,0 67%
```

## [Droplet](https://cssbattle.dev/play/115)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/115.png">

#### Solution:

```html
<style>
  body {
    background: linear-gradient(#c36271 50%, #f2e09f 50%);
    margin: 0;
  }
  body::before,
  body::after {
    position: fixed;
    content: "";
    width: 380px;
    height: 150px;
    border-radius: 0 0 100px 0;
  }
  body::before {
    background: radial-gradient(
      circle at 200px 100%,
      #c36271 50px,
      #f2e09f 50px
    );
  }
  body::after {
    top: 50%;
    left: 20px;
    transform: rotate(180deg);
    background: radial-gradient(
      circle at 200px 100%,
      #f2e09f 50px,
      #c36271 50px
    );
  }
</style>
```

#### Minified:

```html
<p><p a><style>p{height:150;width:380;background:radial-gradient(1in at 50vw 100%,#C36271 53q,#F2E09F 0);border-radius:0 0 25vw 0;color:C36271;box-shadow:2in 0;margin:-8}
[a]{background:radial-gradient(1in at 50vw 100%,#F2E09F 53q,#C36271 0);color:F2E09F;margin:8 12;scale:-1
```

## [Headphones](https://cssbattle.dev/play/116)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/116.png">

#### Solution:

```html
<div></div>
<style>
  body {
    background: #293d7e;
  }
  div {
    width: 130px;
    height: 110px;
    border: solid 20px #6e91ca;
    margin: 45 auto;
    border-radius: 100px 100px 0 0;
    border-bottom: none;
  }
  div::before,
  div::after {
    position: fixed;
    content: "";
    width: 60px;
    height: 80px;
    background: #6e91ca;
    top: 165px;
    left: 115px;
    border-radius: 0px 27px 40px 40px;
  }
  div::after {
    left: 225px;
    border-radius: 27px 0px 40px 40px;
  }
</style>
```

#### Minified:

```html
<body bgcolor=293D7E><p><h1><h1 a>
<style>p{width:130;height:100;border:solid 20px#6E91CA;margin:45 107;border-radius:25vw 25vw 0 0;border-bottom:0}h1{width:60;height:80;background:#6E91CA;border-radius:0 27q 40q 40q;margin:-45 107}[a]{scale:-1 1;margin:-80 217
```
