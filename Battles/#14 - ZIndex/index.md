# Zindex

## [Notes](https://cssbattle.dev/play/77)

<img width="200px" src="https://cssbattle.dev/targets/77.png">

```html
<div></div>
<style>
  body {
    background: #191919;
  }
  body::before,
  body::after {
    content: "";
    position: absolute;
    background: #fe5f55;
    top: 170px;
    left: 55px;
    box-shadow: 70px 0 0 0 #fe5f55, 140px 0 0 0 #a64942, 210px 0 0 0 #fe5f55;
  }
  body::before {
    width: 10px;
    height: 100px;
    left: 95px;
    top: 90px;
  }
  body::after {
    width: 50px;
    height: 40px;
    border-radius: 50%;
  }
  div {
    width: 40px;
    height: 10px;
    background: #fe5f55;
    position: absolute;
    top: 90px;
    left: 95px;
    box-shadow: 30px 0 0 0 #fe5f55, 140px 0 0 0 #a64942, 210px 0 0 0 #fe5f55, 210px
        20px 0 0 #fe5f55;
  }
</style>
```

## [Ukelele](https://cssbattle.dev/play/78)

<img width="200px" src="https://cssbattle.dev/targets/78.png">

```html
<div></div>
<style>
  body {
    background: radial-gradient(
        circle at 165px 50%,
        #1a4341 20px,
        #f3ac3c 20px,
        #f3ac3c 25px,
        #998235 25px,
        #998235 50px,
        transparent 50px
      ), radial-gradient(circle at 105px 50%, #998235 60px, transparent 60px),
      linear-gradient(
        to right,
        #f3ac3c 50px,
        transparent 10px,
        transparent 325px,
        #f3ac3c 325px
      ), linear-gradient(#f3ac3c 140px, #1a4341 140px, #1a4341 160px, #f3ac3c
          160px);
  }
  div {
    width: 40px;
    height: 30px;
    background: #998235;
    border-radius: 10px;
    position: relative;
    left: 307px;
    top: 127px;
  }
  div::before,
  div::after {
    position: absolute;
    content: "";
    width: 20px;
    height: 4px;
    background: #1a4341;
    top: 8px;
    left: 10px;
    border-radius: 2px;
    box-shadow: 0 10px 0 0 #1a4341;
  }
  div::after {
    width: 40px;
    height: 10px;
    left: -245px;
    border-radius: 4px;
    top: 10px;
    box-shadow: none;
    transform: rotate(90deg);
  }
</style>
```

## [Tambourine](https://cssbattle.dev/play/79)

<img width="200px" src="https://cssbattle.dev/targets/79.png">

```html
<div></div>
<style>
  body {
    background: #6592cf;
  }
  div {
    width: 150px;
    height: 150px;
    background: #6592cf;
    border: solid 10px #243d83;
    border-radius: 50%;
    margin: 75px auto;
    position: relative;
    clip-path: circle(85px);
  }
  div::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    background: #6592cf;
    border: solid 10px #243d83;
    border-radius: 50%;
    top: 115px;
    left: 15px;
  }
  body::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: #243d83;
    border-radius: 50%;
    top: 75px;
    left: 195px;
    z-index: 1;
    box-shadow: 0 0 0 0 red, 0 0 0 10px #6592cf, 0 0 0 20px #243d83, 70px 40px 0
        0 #243d83, 70px 40px 0 10px #6592cf, 70px 40px 0 20px #243d83,
      70px 110px 0 0 #243d83, 70px 110px 0 10px #6592cf,
      70px 110px 0 20px #243d83, -70px 40px 0 0 #243d83,
      -70px 40px 0 10px #6592cf, -70px 40px 0 20px #243d83,
      -70px 110px 0 0 #243d83, -70px 110px 0 10px #6592cf,
      -70px 110px 0 20px #243d83;
  }
</style>
```

## [Piano](https://cssbattle.dev/play/80)

<img width="200px" src="https://cssbattle.dev/targets/80.png">

```html
<div></div>
<style>
  body {
    background: #998235;
  }
  div {
    width: 180px;
    height: 100px;
    border-radius: 10px;
    background: #191919;
    margin: 100px auto;
    position: relative;
  }
  div::before,
  div::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 70px;
    background: #ffffff;
    left: 5px;
    top: 25px;
    border-radius: 5px;
  }
  div::before {
    box-shadow: 25px 0 0 0 #ffffff, 50px 0 0 0 #ffffff, 75px 0 0 0 #ffffff, 100px
        0 0 0 #ffffff, 125px 0 0 0 #ffffff, 150px 0 0 0 #ffffff;
  }
  div::after {
    height: 35px;
    background: #191919;
    width: 15px;
    border-radius: 0px;
    left: 20px;
    box-shadow: 25px 0 0 0 #191919, 75px 0 0 0 #191919, 100px 0 0 0 #191919, 125px
        0 0 0 #191919;
  }
</style>
```
