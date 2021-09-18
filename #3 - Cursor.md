# Cursor

## [Cube](https://cssbattle.dev/play/19)

<img src="https://cssbattle.dev/targets/19.png">

```html
<div class="square one"></div>
<div class="square two"></div>
<div class="square three"></div>
<style>
  body {
    background: #0b2429;
    position: relative;
    margin: 0;
  }
  .square {
    width: 100px;
    height: 100px;
    position: absolute;
  }
  .one {
    background: #f3ac3c;
    top: 135px;
    left: 150px;
    transform: rotate(45deg);
  }
  .two {
    width: 70px;
    height: 70px;
    background: #998235;
    top: 80px;
    left: 130px;
    transform: skew(0deg, -45deg);
  }
  .three {
    background: #1a4341;
    width: 70px;
    height: 70px;
    top: 80px;
    left: 200px;
    transform: skew(0deg, 45deg);
  }
</style>
```

## [Ticket](https://cssbattle.dev/play/20)

<img src="https://cssbattle.dev/targets/20.png">

```html
<div class="yellow"></div>
<div class="peach"></div>
<style>
  body {
    background: #62306d;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  body::before,
  body::after {
    width: 20px;
    height: 20px;
    background: red;
    position: absolute;
    content: "";
    border-radius: 50%;
    left: 222px;
    top: 82px;
    z-index: 1;
    background: #62306d;
  }
  body::after {
    top: 182px;
  }
  .yellow {
    width: 140px;
    height: 100px;
    background: #f7ec7d;
    position: relative;
  }
  .yellow::before,
  .yellow::after,
  .peach::before,
  .peach::after {
    content: "";
    position: absolute;
    background: red;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: -20px;
    left: -20px;
    background: #62306d;
  }
  .yellow::after {
    top: 80px;
  }
  .peach::before {
    top: -20px;
    left: 40px;
  }
  .peach::after {
    top: 80px;
    left: 40px;
  }
  .peach {
    width: 60px;
    height: 100px;
    background: #e38f66;
    position: relative;
  }
</style>

<!-- 
  .yellow::after,
  .peach::before,
  .peach::after
-->
```

<style>
    img{
        width: 200px;
        margin: 1rem 0;
    }
</style>
