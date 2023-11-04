# Visibility

## [Totally Triangle](https://cssbattle.dev/play/13)

<img width="200px" src="https://cssbattle.dev/targets/13.png">

```html
<div class="triangle"></div>
<style>
  * {
    margin: 0;
  }
  html {
    background: #0b2429;
  }
  body {
    background: #f3ac3c;
    clip-path: polygon(0 0, 140px 0, 0 140px);
  }
</style>
```

## [Web Maker Logo](https://cssbattle.dev/play/14)

<img width="200px" src="https://cssbattle.dev/targets/14.png">

```html
<div class="elem">
  <div class="triangle"></div>
</div>
<div class="elem">
  <div class="triangle"></div>
</div>
<style>
  html {
    background: #f2f2b6;
  }
  .elem {
    position: relative;
    top: 77px;
    left: 20px;
  }
  .triangle {
    width: 150px;
    height: 150px;
    background: #ff6d00;
    clip-path: polygon(0 0, 150px 0, 75px 130px);
    position: absolute;
    z-index: 1;
    left: 2rem;
  }
  .elem::after {
    position: absolute;
    content: "";
    width: 150px;
    height: 150px;
    background: #fd4602;
    clip-path: polygon(0 0, 150px 0, 75px 130px);
    left: 13.5%;
  }
  .elem:nth-child(2) {
    position: relative;
    top: 77px;
    left: 150px;
    transform: rotate(180deg);
    transform-origin: 107px 65px;
  }
  .elem:nth-child(2) .triangle {
    z-index: -1;
  }
</style>
```

## [Overlap](https://cssbattle.dev/play/15)

<img width="200px" src="https://cssbattle.dev/targets/15.png">

```html
<div class="circle"></div>
<div class="circle"></div>
<style>
  html {
    background: #09042a;
    position: relative;
  }
  .circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: #7b3f61;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 75px;
  }
  .circle:nth-child(2) {
    background: #e78481;
    left: 175px;
    z-index: 1;
  }
  .circle:nth-child(2)::after {
    content: "";
    position: absolute;
    width: 80px;
    height: 80px;
    background: #09042a;
    z-index: 2;
    border-radius: 0% 96% 0% 96%;
    left: -15px;
    top: 35px;
    transform: rotate(45deg);
  }
</style>
```

## [Eye of the Tiger](https://cssbattle.dev/play/16)

<img width="200px" src="https://cssbattle.dev/targets/16.png">

```html
<div class="box">
  <div class="circle"></div>
</div>
<style>
  body {
    background: #0b2429;
    display: grid;
    place-items: center;
    position: relative;
  }
  .box {
    background: #998235;
    width: 200px;
    height: 200px;
    border-radius: 0 50% 0 50%;
    transform: rotate(-45deg);
  }
  .circle {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 0%;
    left: 0%;
    background: radial-gradient(
      #0b2429 0px,
      #0b2429 25px,
      #f3ac3c 25px,
      #f3ac3c 70px,
      #0b2429 70px,
      #0b2429 90px,
      transparent 50px,
      transparent 60px
    );
    border-radius: 50%;
  }
</style>
```

## [Fidget Spinner](https://cssbattle.dev/play/17)

<img width="200px" src="https://cssbattle.dev/targets/17.png">

```html
<div class="bar"></div>
<div class="circle top light"></div>
<div class="circle left dark"></div>
<div class="circle bottom light"></div>
<div class="circle right dark"></div>
<style>
  body {
    background: #09042a;
    display: grid;
    place-items: center;
    position: relative;
  }
  .bar {
    background: #e78481;
    width: 160px;
    height: 55px;
  }
  .circle {
    width: 60px;
    height: 60px;
    position: absolute;
    border-radius: 50%;
  }
  .light {
    background: #f5bb9c;
    border: solid 10px #09042a;
  }
  .dark {
    background: #09042a;
    border: solid 10px #e78481;
  }
  .top {
    top: 49px;
  }
  .left {
    left: 92px;
  }
  .bottom {
    bottom: 49px;
  }
  .right {
    right: 92px;
  }
</style>
```

## [Matrix](https://cssbattle.dev/play/18)

<img width="200px" src="https://cssbattle.dev/targets/18.png">

```html
<div class="slice"></div>
<div class="slice"></div>
<div class="slice"></div>
<div class="slice"></div>
<div class="slice"></div>
<div class="slice"></div>
<div class="slice"></div>
<div class="slice"></div>
<div class="slice"></div>
<div class="slice"></div>
<div class="slice"></div>
<div class="slice"></div>
<style>
  body {
    background: #5c434c;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px;
  }
  .slice {
    width: 80px;
    height: 80px;
    background: #f5d6b4;
    border-top-left-radius: 100%;
  }
  .slice:nth-child(3n),
  .slice:nth-child(8n),
  .slice:nth-child(11n),
  .slice:nth-child(1) {
    background: #f09462;
  }
  .slice:nth-child(12n) {
    background: #f5d6b4;
  }
</style>
```
