# Block

## [Corona Virus](https://cssbattle.dev/play/47)

<img src="https://cssbattle.dev/targets/47.png">

```html
<div class="virus">
  <div class="spots"></div>
</div>
<style>
  body {
    background: #1a4341;
    display: grid;
    place-items: center;
  }
  .virus {
    width: 100px;
    height: 100px;
    background: #f3ac3c;
    border-radius: 50%;
    position: relative;
  }
  .spots {
    width: 10px;
    height: 10px;
    background: #998235;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    left: 70px;
    box-shadow: -25px 50px 0 5px #998235, -40px 10px 0 10px #998235;
    z-index: 1;
  }
  body::before,
  body::after {
    content: "";
    position: absolute;
    width: 180px;
    height: 10px;
    background: #f3ac3c;
    border-radius: 4px;
    top: 150px;
    left: 119px;
    transform: rotate(30deg);
  }
  body::after {
    top: 140px;
    left: 119px;
    transform: rotate(-30deg);
  }
  .virus::after {
    content: "";
    position: absolute;
    background: #f3ac3c;
    border-radius: 4px;
    top: -50px;
    left: 45px;
    width: 10px;
    height: 180px;
    transform: none;
    z-index: -1;
  }
</style>
```

## [Wash Your Hands](https://cssbattle.dev/play/48)

<img src="https://cssbattle.dev/targets/48.png">

```html
<div class="soap"></div>
<style>
  body {
    background: #293462;
    margin: 0;
  }
  .soap {
    width: 200px;
    height: 100px;
    border-radius: 20px;
    background: #fe5f55;
    margin: 90px auto;
    box-shadow: 0 20px 0 0 #a64942;
    position: relative;
  }
  .soap::after {
    content: "";
    position: absolute;
    background: #a64942;
    width: 140px;
    height: 40px;
    border-radius: 50px;
    top: 30px;
    left: 30px;
  }
</style>
```

## [Stay At Home](https://cssbattle.dev/play/49)

<img src="https://cssbattle.dev/targets/49.png">

```html
<div></div>
<style>
  body {
    background: #6592cf;
  }
  body::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: solid 100px transparent;
    border-bottom-color: #243d83;
    top: -50px;
    left: 100px;
  }
  div {
    margin: 140px auto;
    width: 150px;
    height: 110px;
    background: #243d83;
    border-radius: 0 0 10px 10px;
    position: relative;
  }
  div::before,
  div::after {
    position: absolute;
    content: "";
    background: #eeb850;
    width: 50px;
    height: 50px;
    bottom: 0;
    left: 50px;
    border-radius: 10px 10px 0 0;
  }
  div::after {
    width: 100px;
    top: 5px;
    left: 25px;
    height: 10px;
    z-index: 1;
    border-radius: 10px;
  }
</style>
```

## [Use Hand Sanitizer](https://cssbattle.dev/play/50)

<img src="https://cssbattle.dev/targets/50.png">

```html
<div class="bottle"></div>
<style>
  body {
    background: #1a4341;
  }
  .bottle {
    margin: 110px auto;
    width: 100px;
    height: 140px;
    background: linear-gradient(#f3ac3c 55px, #998235 55px);
    border-radius: 20px;
    position: relative;
  }
  div::before,
  div::after {
    position: absolute;
    content: "";
    background: #f3ac3c;
    width: 50px;
    height: 50px;
    left: 25px;
    top: -20px;
    border-radius: 10px;
  }
  div::after {
    width: 20px;
    height: 40px;
    left: 40px;
    top: -50px;
    box-shadow: 90px -10px 0 0 #f3ac3c;
  }
  body::after {
    position: absolute;
    content: "";
    background: #998235;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    z-index: 1;
    top: 155px;
    left: 165px;
    box-shadow: 0px 0px 0 15px #998235, 50px 0px 0 15px #f3ac3c,
      115px -55px 0 0 #998235, 115px -55px 0 0 #998235, 115px -25px 0 0 #998235;
  }
  body::before {
    position: absolute;
    content: "";
    background: #f3ac3c;
    width: 150px;
    height: 20px;
    top: 50px;
    left: 150px;
    border-radius: 10px;
  }
</style>
```

## [Wear a Mask](https://cssbattle.dev/play/51)

<img src="https://cssbattle.dev/targets/51.png">

```html
<div></div>
<style>
  body {
    background: #293462;
  }
  body::after {
    position: absolute;
    content: "";
    width: 250px;
    height: 40px;
    top: 100px;
    left: 65px;
    border: solid 10px #fff1c1;
    border-radius: 50px;
    z-index: -1;
  }
  div {
    margin: 110px auto;
    width: 150px;
    height: 90px;
    background: #fff1c1;
    border-radius: 0 0 50px 50px;
    position: relative;
  }
  div::before,
  div::after {
    position: absolute;
    content: "";
    background: #fe5f55;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    right: 20px;
    bottom: 20px;
  }
  div::after {
    width: 40px;
    height: 10px;
    bottom: 70px;
    right: 90px;
    border-radius: 5px;
    box-shadow: 0px 20px 0 0 #fe5f55;
  }
  bodsy::after {
    position: absolute;
    content: "";
    background: #998235;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    z-index: 1;
    top: 155px;
    left: 165px;
    box-shadow: 0px 0px 0 15px #998235, 50px 0px 0 15px #f3ac3c,
      115px -55px 0 0 #998235, 115px -55px 0 0 #998235, 115px -25px 0 0 #998235;
  }
</style>
```

## [Break the Chain](https://cssbattle.dev/play/52)

<img src="https://cssbattle.dev/targets/52.png">

```html
<div></div>
<style>
  body {
    background: #6592cf;
  }
  div {
    width: 10px;
    height: 45px;
    background: #243d83;
    position: relative;
    top: 137px;
    left: 37px;
    box-shadow: 45px 0 0 0 #243d83, 90px 0 0 0 #243d83, 165px 0 0 0 #243d83, 210px
        0 0 0 #243d83, 255px 0 0 0 #243d83, 300px 0 0 0 #243d83;
  }
  div::before {
    position: absolute;
    content: "";
    background: #243d83;
    top: -15px;
    left: -5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #eeb850, 45px 0 0 0 #243d83, 90px 0 0 0 #243d83, 165px
        0 0 0 #243d83, 210px 0 0 0 #243d83, 255px 0 0 0 #243d83,
      300px 0 0 0 #243d83, 45px -10px 0 20px #eeb850, 90px 0 0 10px #eeb850;
    z-index: -1;
  }
</style>
```

<style>
    img{
        width: 200px;
        margin: 1rem 0;
    }
</style>
