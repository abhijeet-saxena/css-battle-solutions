---
description: Time to flex your CSS and build some cool CSS art!
---

# Gradient

## [Striped Triangle](https://cssbattle.dev/play/187)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/187.png">

#### Solution:

```html
<div></div>
<h1></h1>
<style>
  body {
    background: #40234b;
  }
  div {
    width: 230px;
    height: 200px;
    background: #a94ea4;
    margin: 50 auto;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  h1 {
    width: 230px;
    height: 10px;
    background: #40234b;
    color: #40234b;
    margin: -200 -47;
    position: relative;
    rotate: -60deg;
    box-shadow: 0 26px, 0 52px, 10px 78px, 35px 104px, 50px 130px, 60px 156px;
  }
</style>
```

#### Minified:

```html
<p><h1><style>*{background:#40234B}h1{width:230;height:10;color:40234B;margin:-200-47;rotate:-60deg;box-shadow:0 27q,0 55q,11q 82q,35q 110q,50q 137q,60q 165q}p{width:230;height:200;background:#A94EA4;margin:50 77;clip-path:polygon(0 0,100%0,50%100%
```

## [title](https://cssbattle.dev/play/188)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/188.png">

#### Solution:

```html
<div></div>
<div a></div>
<div a b></div>
<style>
  body {
    background: #fffd9b;
  }
  div {
    width: 340px;
    height: 20px;
    background: #646521;
    border-radius: 20px;
    color: #969610;
    margin: 140 auto -160;
    box-shadow: 0 80px, 0 -80px;
    position: relative;
  }
  [a] {
    rotate: 90deg;
    width: 240px;
  }
  [b] {
    color: #646521;
    width: 20px;
    border-radius: 0;
  }
</style>
```

#### Minified:

```html
<body bgcolor=FFFD9B text=969610><p z><p z a><p a b><style>p{width:340;height:20;background:#646521;margin:140 auto -160;box-shadow:0 5em,0 -5em}[z]{border-radius:20q}[a]{rotate:90deg;width:240}[b]{color:646521;width:20
```

## [Triangle Hook](https://cssbattle.dev/play/189)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/189.png">

#### Solution:

```html
<div></div>
<div a></div>
<div b></div>
<h1></h1>
<style>
  body {
    background: #d669ec;
  }
  div {
    width: 80px;
    height: 80px;
    background: #fdfbf8;
    margin: 110 47;
    clip-path: polygon(0 50%, 100% 0, 100% 100%);
  }
  [a] {
    background: #d669ec;
    margin: -190 77;
  }
  [b] {
    width: 180px;
    height: 180px;
    margin: 60 157;
    background: linear-gradient(
      90deg,
      #fdfbf8 50px,
      #d669ec 50px,
      #d669ec 70px,
      #fdfbf8 70px
    );
    scale: -1;
  }
  h1 {
    width: 90px;
    height: 20px;
    background: #fdfbf8;
    margin: -160 70;
    position: sticky;
  }
</style>
```

#### Minified:

```html
<p><p a><p b><h1><style>&{background:#D669EC}[a]{background:#D669EC;margin:-190 77}[b]{width:180;height:180;margin:60 157;background:linear-gradient(90deg,#FDFBF8 53q,#D669EC 0 74q,#FDFBF8+0);scale:-1}h1{width:90;height:20;background:#FDFBF8;margin:-160+70;position:fixed}p{width:80;height:80;background:#FDFBF8;margin:110 47;clip-path:polygon(0 50%,100%0,100%100%
```

## [Power Chip](https://cssbattle.dev/play/190)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/190.png">

#### Solution:

```html
<div></div>
<h1></h1>
<h2></h2>
<h2 a></h2>
<h2 b></h2>
<style>
  * {
    background: #e3516e;
  }
  div {
    width: 280px;
    height: 150px;
    background: #fade8b;
    margin: 75 52;
  }
  h1 {
    width: 20px;
    height: 80px;
    margin: -150 107;
    color: #e3516e;
    box-shadow: 75px -10px, 75px 10px, 150px 0;
  }
  h2 {
    width: 50px;
    height: 40px;
    margin: 55 92;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
  }
  [a] {
    margin: -95 242;
  }
  [b] {
    width: 105px;
    height: 85px;
    margin: -100 auto;
    scale: -1;
  }
</style>
```

#### Minified:

```html
<p><h1><h2><h2 a><h2 b><style>*{background:#E3516E}p{width:280;height:150;background:#FADE8B;margin:75 52}h1{width:20;height:80;margin:-150 107;color:E3516E;box-shadow:79q -12q,79q 11q,50vh 0}[a]{margin:-95 242}[b]{width:105;height:85;margin:-100 auto;scale:-1}h2{width:50;height:40;margin:55 92;clip-path:polygon(50%0,100%100%,0 100%
```

## [Modern Fence](https://cssbattle.dev/play/191)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/191.png">

#### Solution:

```html
<div></div>
<div a></div>
<style>
  body {
    background: #2f2e59;
  }
  div {
    width: 20px;
    height: 150px;
    background: #eeecf6;
    border-radius: 10px;
    margin: 75 69;
    box-shadow: 226px 0 #eeecf6;
  }
  [a] {
    height: 240px;
    margin: -329.5 193;
    rotate: -60deg;
    box-shadow: -57px 0 #eeecf6, -57px 40px #eeecf6, -114px 40px #eeecf6;
  }
</style>
```

#### Minified:

```html
<body bgcolor=2F2E59 text=EEECF6><p><p a><style>p{width:20;height:150;background:#EEECF6;border-radius:10q;margin:75 69;box-shadow:239q 0}[a]{height:240;margin:-329.5 193;rotate:-60deg;box-shadow:-60q 0,-60q 40q,-121q 42q
```

## [Galver](https://cssbattle.dev/play/193)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/193.png">

#### Solution:

```html
<div></div>
<h1></h1>
<h1 a></h1>
<h1 b></h1>
<h1 a b c></h1>
<style>
  div {
    width: 40px;
    height: 40px;
    background: #8b0051;
    border: solid 15px #f180b6;
    box-shadow: 0 0 0 15px #8b0051, 0 0 0 30px #fcddeb, 0 0 0 45px #8b0051, 0 0
        0 3in #fcddeb;
    border-radius: 50%;
    margin: 115 auto;
  }
  h1 {
    width: 30px;
    height: 80px;
    background: #8b0051;
    margin: -265 auto 335;
    border-radius: 30px;
    clip-path: polygon(0 15px, 0 0, 100% 0, 100% 15px, 20px 100%, 10px 100%);
  }
  [a] {
    scale: -1;
  }
  [b] {
    rotate: 90deg;
    margin: -490 252;
  }
  [c] {
    margin: 410 102;
  }
</style>
```

#### Minified:

```html
<h1></h1><p><p a><p b><p a b c><style>*{background:#8B0051;color:FCDDEB}h1{width:40;height:40;border:solid 16q#F180B6;box-shadow:0 0 0 16q#8B0051,0 0 0 32q,0 0 0 48q#8B0051,0 0 0 3in;border-radius:50%;margin:115 157}p{width:30;height:80;margin:-265 177 335;border-radius:30q;clip-path:polygon(0 16q,0 0,100%0,100%15q,22q 100%,10q 100%)}[a]{scale:-1}[b]{rotate:90deg;margin:-490 252}[c]{margin:410 102
```

## [Fountain](https://cssbattle.dev/play/194)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/194.png">

#### Solution:

```html
<div></div>
<div a></div>
<div b></div>
<div a c></div>
<div d></div>
<div a e></div>
<h1></h1>
<style>
  body {
    background: #4fa07b;
  }
  div {
    width: 100px;
    height: 210px;
    border-radius: 440px;
    background: #4fa07b;
    box-shadow: 0 0 0 20px #0d1335;
    margin: 40 auto -210;
  }
  [a] {
    width: 20px;
    height: 140px;
    border-radius: 20px;
  }
  [b] {
    margin: 130 82;
  }
  [c] {
    margin: -300 122;
  }
  [d] {
    margin: 120 202;
  }
  [e] {
    margin: -290 242;
  }
  h1 {
    width: 20px;
    height: 100px;
    background: #4fa07b;
    margin: 207 62;
    box-shadow: 40px 22.5px #4fa07b, 80px 42.5px #4fa07b, 160px 42.5px #4fa07b, 200px
        22.5px #4fa07b, 240px 0 #4fa07b;
  }
</style>
```

#### Minified:

```html
<p><p a><p b><p a c><p d><p a e><h1><style>*{background:#4FA07B}p{width:100;height:210;border-radius:53q;box-shadow:0 0 0 20px#0D1335;margin:40 auto -210}[a]{width:20;height:140;border-radius:20q}[b]{margin:130 82}[c]{margin:-300 122}[d]{margin:120 202}[e]{margin:-290 242}h1{width:20;height:100;margin:207 62;color:4FA07B;box-shadow:40px 24q,80px 45q,40vw 45q,50vw 24q,60vw 0
```

[\[↑ Scroll to top\]](#gradient)
