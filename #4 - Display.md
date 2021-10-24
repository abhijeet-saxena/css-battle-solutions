# Display

## [SitePoint Logo](https://cssbattle.dev/play/21)

<img src="https://cssbattle.dev/targets/21.png">

```html
<div class="yellow one">
  <div class="yellow leg">
    <div class="blue one">
      <div class="blue leg">
        <style>
          body {
            background: #222;
            position: relative;
            margin: 0;
            transform: rotateZ(-45deg);
            transform-origin: 38% 29%;
          }
          div {
            width: 100px;
            height: 30px;
            position: absolute;
          }
          .yellow {
            background: #f2994a;
          }
          .one {
            top: 100px;
            left: 100px;
            border-top-left-radius: 10px;
          }
          .leg {
            width: 30px;
            height: 80px;
            border-top-left-radius: 10px;
            border-bottom-right-radius: 6px;
          }
          .blue {
            background: #2d9cdb;
            top: 100px;
            left: -18px;
          }
          .blue.one {
            transform: rotateY(180deg) rotateX(180deg);
          }
          .blue.leg {
            background: #2d9cdb;
            top: 0px;
            left: 0px;
            transform: rotateX(0deg);
          }
        </style>
      </div>
    </div>
  </div>
</div>
```

## [Cloud](https://cssbattle.dev/play/22)

<img src="https://cssbattle.dev/targets/22.png">

```html
<div></div>
<style>
  body {
    background: #f5d6b4;
  }
  div {
    width: 175px;
    height: 50px;
    background: #d86f45;
    border-radius: 30px;
    position: relative;
    top: 157px;
    left: 117px;
  }
  div::before,
  div::after {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #d86f45;
    content: "";
    top: -100%;
    left: -25px;
  }
  div::after {
    position: after;
    left: 55px;
    top: -80;
  }
</style>
```

## [Boxception](https://cssbattle.dev/play/23)

<img src="https://cssbattle.dev/targets/23.png">

```html
<div></div>
<style>
  body {
    background: #f3ac3c;
    display: grid;
    place-items: center;
  }
  div {
    width: 200px;
    height: 200px;
    background: #1a4341;
    position: relative;
  }
  div::before {
    position: absolute;
    content: "";
    background: #998235;
    width: 100px;
    height: 100px;
    bottom: 0;
  }
  div::after {
    position: absolute;
    content: "";
    background: #f3ac3c;
    width: 50px;
    height: 50px;
    bottom: 0;
    left: 25%;
  }
</style>
```

## [Switches](https://cssbattle.dev/play/24)

<img src="https://cssbattle.dev/targets/24.png">

```html
<div></div>
<div></div>
<style>
  body {
    background: #62306d;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
  div {
    width: 100px;
    height: 100px;
    background: #f7ec7d;
    border-radius: 50%;
    position: relative;
  }
  div::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    background: #aa445f;
    border-radius: 50px 50px 0 0;
    z-index: -1;
    top: -50px;
  }
  div:nth-child(2)::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    background: #e38f66;
    border-radius: 0 0 50px 50px;
    top: 50px;
  }
</style>
```

## [Blossom](https://cssbattle.dev/play/25)

<img src="https://cssbattle.dev/targets/25.png">

```html
<div></div>
<div></div>
<style>
  body {
    background: #998235;
  }
  div {
    width: 80px;
    height: 100px;
    background: #1a4341;
    border-radius: 0 50px 0 50px;
    position: relative;
    top: 52px;
    left: 102px;
  }
  div:nth-child(2) {
    transform: rotateY(180deg);
    left: 202px;
    top: 32px;
  }
  div::before {
    content: "";
    position: absolute;
    width: 80px;
    height: 60px;
    background: #f3ac3c;
    border-radius: 0 50px 0 50px;
    top: 120px;
  }
  div:nth-child(2)::before {
    top: -80px;
  }
</style>
```

## [Lock Up](https://cssbattle.dev/play/27)

<img src="https://cssbattle.dev/targets/27.png">

```html
<div></div>
<style>
  body {
    background: #e38f66;
    display: grid;
    place-items: center;
  }
  div {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(
      #aa445f 0px,
      #aa445f 40px,
      #f7ec7d 40px,
      #f7ec7d 70px,
      #aa445f 70px
    );
  }
  div::before,
  div::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    background: #aa445f;
    top: 50px;
    border-top-left-radius: 100%;
  }
  div::after {
    top: 150px;
    left: 200px;
    border-radius: 0;
    border-bottom-right-radius: 100%;
  }
</style>
```

## [Cups & Balls](https://cssbattle.dev/play/28)

<img src="https://cssbattle.dev/targets/28.png">

```html
<div></div>
<div class="yel pie"></div>
<div class="pie"></div>
<div class="yel"></div>
<div class="yel pie inv"></div>
<div></div>
<div class="yel"></div>
<div class="pie inv"></div>
<style>
  body {
    padding: 82px 62px;
    background: #1a4341;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  div {
    width: 50px;
    height: 50px;
    background: #998235;
    border-radius: 50%;
  }
  .yel {
    background: #f3ac3c;
  }
  .pie {
    border-radius: 50% 50% 0 0;
  }
  .inv {
    transform: rotateX(180deg);
  }
</style>
```

<style>
    img{
        width: 200px;
        margin: 1rem 0;
    }
</style>
