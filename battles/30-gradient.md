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

[\[↑ Scroll to top\]](#gradient)
