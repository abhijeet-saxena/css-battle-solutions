# Pilot Battle

## [Simply Square](https://cssbattle.dev/play/1)

<img src="https://cssbattle.dev/targets/1.png">

```html
<div class="box"></div>
<style>
  body {
    background: #5d3a3a;
    margin: 0;
  }
  .box {
    background: #b5e0ba;
    width: 200px;
    height: 200px;
  }
</style>
```

## [Carrom](https://cssbattle.dev/play/2)

<img src="https://cssbattle.dev/targets/2.png">

```html
<div class="box one"></div>
<div class="box two"></div>
<div class="box three"></div>
<div class="box four"></div>
<style>
  body {
    background: #62374e;
    display: flex;
    flex-wrap: wrap;
    padding: 42px;
    gap: 100px;
    justify-content: space-between;
  }
  .box {
    width: 50px;
    height: 50px;
    background: #fdc57b;
  }
</style>
```

## [Push Button](https://cssbattle.dev/play/3)

<img src="https://cssbattle.dev/targets/3.png">

```html
<div class="rectangle">
  <div class="circle"></div>
  <div class="circle2"></div>
</div>
<style>
  body {
    background: #6592cf;
    display: grid;
    place-items: center;
  }
  .rectangle {
    background: #243d83;
    width: 300px;
    height: 150px;
    display: grid;
    place-items: center;
  }
  .circle {
    width: 50px;
    height: 50px;
    background: #eeb850;
    border-radius: 50%;
    border: solid 50px #243d83;
    z-index: 1;
  }
  .circle2 {
    position: absolute;
    width: 50px;
    height: 50px;
    background: transparent;
    border-radius: 50%;
    border: solid 100px #6592cf;
  }
</style>
```

## [Ups n Downs](https://cssbattle.dev/play/4)

<img src="https://cssbattle.dev/targets/4.png">

```html
<div class="pie"></div>
<div class="pie"></div>
<div class="pie"></div>
<style>
  body {
    background: #62306d;
    display: flex;
    position: relative;
  }
  .pie {
    background: #f7ec7d;
    width: 100px;
    height: 100px;
    border-radius: 0px 0px 50px 50px;
    position: absolute;
    top: 50%;
  }
  .pie:nth-child(1) {
    left: 42px;
  }
  .pie:nth-child(2) {
    left: 142px;
    border-radius: 50px 50px 0px 0px;
    top: 42px;
  }
  .pie:nth-child(3) {
    left: 242px;
  }
</style>
```

## [Acid Rain](https://cssbattle.dev/play/5)

<img src="https://cssbattle.dev/targets/5.png">

```html
<div class="pie"></div>
<div class="pie"></div>
<div class="pie"></div>
<style>
  body {
    background: #0b2429;
    display: flex;
    position: relative;
  }
  .pie {
    background: #f3ac3c;
    width: 120px;
    height: 120px;
    position: absolute;
    border-radius: 50% 0% 50% 50%;
  }
  .pie:nth-child(1) {
    top: 142px;
    left: 72px;
    z-index: 2;
  }
  .pie:nth-child(2) {
    background: #998235;
    left: 132px;
    top: 82px;
    z-index: 1;
  }
  .pie:nth-child(3) {
    left: 192px;
    top: 22px;
    border-radius: 50%;
  }
</style>
```

## [Missing Slice](https://cssbattle.dev/play/6)

<img src="https://cssbattle.dev/targets/6.png">

```html
<div class="box">
  <div class="part one"></div>
  <div class="part two"></div>
  <div class="part three"></div>
</div>
<style>
  body {
    background: #e3516e;
    display: grid;
    place-items: center;
  }
  .box {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
  }
  .part {
    width: 100px;
    height: 100px;
    background: #51b5a9;
  }
  .part:nth-child(2) {
    background: #fade8b;
  }
  .part:nth-child(3) {
    background: #f7f3d7;
  }
</style>
```

## [Leafy Trail](https://cssbattle.dev/play/7)

<img src="https://cssbattle.dev/targets/7.png">

```html
<div class="leaf"></div>
<div class="leaf"></div>
<div class="leaf"></div>

<style>
  body {
    background: #0b2429;
    position: relative;
  }
  .leaf {
    width: 150px;
    height: 150px;
    background: #1a4341;
    border-radius: 69% 0 69% 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 70px;
  }
  .leaf:nth-child(2) {
    background: #998235;
    left: 115px;
    z-index: 1;
  }
  .leaf:nth-child(3) {
    background: #f3ac3c;
    left: 165px;
    z-index: 2;
  }
</style>
```

## [Forking Crazy](https://cssbattle.dev/play/8)

<img src="https://cssbattle.dev/targets/8.png">

```html
<div class="stem"></div>
<div class="prong">
  <div class="p"></div>
  <div class="p"></div>
  <div class="p"></div>
  <div class="p"></div>
  <div class="p"></div>
  <div class="p"></div>
  <div class="p"></div>
</div>
<div class="base"></div>
<style>
  body {
    background: #6592cf;
    position: reltive;
  }
  body > div {
    background: #060f55;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .base {
    width: 140px;
    height: 100px;
    border-radius: 0 0 68px 68px;
    bottom: 50px;
  }
  .stem {
    width: 20px;
    height: 52px;
    bottom: 0;
  }
  .prong {
    width: 140px;
    height: 110px;
    bottom: 140px;
    display: flex;
    z-index: 1;
    background: linear-gradient(#6592cf, #6592cf, #060f55, #060f55);
  }
  .p:nth-child(2n) {
    width: 20px;
    height: 110px;
    background: #6592cf;
    border-radius: 0 0 12px 12px;
  }
  .p:nth-child(2n + 1) {
    width: 20px;
    height: 150px;
    background: #060f55;
    border-radius: 10px;
    overflow: hidden;
  }
</style>
```

## [Tesseract](https://cssbattle.dev/play/9)

<img src="https://cssbattle.dev/targets/9.png">

```html
<div class="horizontal"></div>
<div class="center"></div>
<div class="circle"></div>
<style>
  body {
    background: #222730;
    position: relative;
    margin: 0;
  }
  div {
    background: #4caab3;
    position: absolute;
  }
  .horizontal {
    width: 100%;
    height: 150px;
    top: 75px;
  }
  .center {
    box-sizing: border-box;
    background: #4caab3;
    width: 250px;
    height: 250px;
    z-index: 1;
    top: 25px;
    left: 75px;
    transform: rotate(45deg);
    border: solid 50px #222730;
  }
  .circle {
    top: 50%;
    left: 50%;
    background: #393e46;
    width: 50px;
    height: 50px;
    z-index: 2;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
</style>
```

## [Cloaked Spirits](https://cssbattle.dev/play/10)

<img src="https://cssbattle.dev/targets/10.png">

```html
<div class="yel"></div>
<div class="spirit one">
  <div class="disc"></div>
</div>
<div class="spirit two">
  <div class="disc alt"></div>
</div>
<div class="spirit three">
  <div class="disc"></div>
</div>
<style>
  body {
    background: #62306d;
    position: relative;
    margin: 0;
  }
  .yel {
    background: #f7ec7d;
    top: 100px;
    bottom: 0;
    position: absolute;
    left: 50px;
    right: 50px;
  }
  .spirit {
    width: 100px;
    height: 250px;
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column-reverse;
  }
  .spirit.one {
    background: #62306d;
    left: 50px;
    border-radius: 0 0 50px 50px;
    overflow: hidden;
  }
  .spirit.two {
    background: #f7ec7d;
    left: 150px;
    top: 50px;
    border-radius: 50px 50px 0 0;
    overflow: hidden;
    flex-direction: column;
  }
  .spirit.three {
    background: #62306d;
    left: 250px;
    border-radius: 0 0 50px 50px;
    overflow: hidden;
  }
  .disc {
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    background: #e38f66;
    border: solid 20px #aa445f;
    border-radius: 50%;
  }
  .disc.alt {
    background: #aa445f;
    border: solid 20px #e38f66;
  }
</style>
```

## [Eye of Sauron](https://cssbattle.dev/play/11)

<img src="https://cssbattle.dev/targets/11.png">

```html
<div class="disc"></div>
<div class="half left"></div>
<div class="half right"></div>
<style>
  body {
    background: #191210;
    display: grid;
    place-items: center;
    position: relative;
  }
  .disc {
    background: radial-gradient(
      #84271c 0px,
      #84271c 25px,
      #191210 25px,
      #191210 50px,
      #eca03d 50px,
      #eca03d 70px,
      #191210 70px,
      #191210 70px
    );
    width: 150px;
    height: 150px;
  }
  .half {
    position: absolute;
    top: 0;
    left: 0;
    background: radial-gradient(
      transparent 0px,
      transparent 25px,
      #eca03d 25px,
      #eca03d 45px,
      transparent 45px
    );
    width: 110px;
    height: 110px;
    border-radius: 50%;
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
    top: 50%;
    transform: translateY(-50%);
    left: 232px;
  }
  .right {
    clip-path: polygon(0 100%, 0 50%, 100% 50%, 100% 100%);
    left: 42px;
  }
</style>
```

## [Wiggly Moustache](https://cssbattle.dev/play/12)

<img src="https://cssbattle.dev/targets/12.png">

```html
<div class="disc"></div>
<div class="disc"></div>
<div class="disc"></div>
<style>
  body {
    background: #f5d6b4;
    position: relative;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  .disc {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
    border: solid 20px #d86f45;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .disc:nth-child(1) {
    left: 70px;
    clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);
  }
  .disc:nth-child(2) {
    left: 150px;
  }
  .disc:nth-child(3) {
    left: 230px;
    clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);
  }
  body::after,
  body::before {
    content: "";
    width: 20px;
    height: 20px;
    background: #d86f45;
    position: absolute;
    border-radius: 50%;
    left: 70px;
    top: 50%;
    z-index: 1;
    transform: translateY(-50%);
  }
  body::before {
    left: 310px;
  }
</style>
```

<style>
    img{
        width: 200px;
        margin: 1rem 0;
    }
</style>
