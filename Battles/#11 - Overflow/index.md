# Overflow

## [Pastel Logo](https://cssbattle.dev/play/53)

<img width="200px" src="https://cssbattle.dev/targets/53.png">

```html
<div></div>
<style>
  body {
    background: radial-gradient(
      circle at 50% 125px,
      #4f77ff 75px,
      #19191a 75px
    );
  }
  div {
    width: 75px;
    height: 125px;
    background: #f9e492;
    margin: 125px 117px;
  }
  div::before {
    content: "";
    position: absolute;
    width: 75px;
    height: 75px;
    background: #9ad5ff;
    border-bottom-left-radius: 75px;
  }
</style>
```

## [Black Lives Matter](https://cssbattle.dev/play/54)

<img width="200px" src="https://cssbattle.dev/targets/54.png">

```html
<div></div>
<style>
  body {
    background: #f9e492;
  }
  div {
    width: 50px;
    height: 80px;
    background: #191919;
    border-radius: 0 0 10px 10px;
    margin: 143px auto;
    position: relative;
    z-index: 1;
  }
  div::before,
  div::after {
    position: absolute;
    content: "";
    top: -5px;
    left: -25px;
    width: 100px;
    height: 40px;
    background: #191919;
    border-radius: 0 0 10px 10px;
  }
  div::after {
    width: 65px;
    height: 20px;
    border: solid 5px #f9e492;
    z-index: 1;
    border-radius: 20px;
    top: -16px;
    left: -45px;
    transform: rotate(-30deg);
  }
  body::before,
  body::after {
    position: absolute;
    content: "";
    top: 88px;
    left: 155px;
    width: 20px;
    height: 45px;
    background: #191919;
    border-radius: 12px;
  }
  body::before {
    box-shadow: 25px -10px 0 0 #191919, 50px 0 0 0 #191919;
  }
  body::after {
    width: 20px;
    height: 35px;
    left: 230px;
    top: 98px;
  }
</style>
```

## [Windmill](https://cssbattle.dev/play/55)

<img width="200px" src="https://cssbattle.dev/targets/55.png">

```html
<div></div>
<style>
  body {
    background: #191919;
  }
  body::before,
  body::after,
  div::before,
  div::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    background: #4f77ff;
    border-radius: 50%;
    left: 150px;
    top: 150px;
    clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
  }
  body::before {
    top: 50px;
    box-shadow: 50px 0 0 0 #191919;
    transform: rotate(180deg);
  }
  div::before,
  div::after {
    background: #f9e492;
    top: 100px;
    left: 100px;
    transform: rotate(90deg);
  }
  div::after {
    left: 200px;
    transform: rotate(270deg);
  }
</style>
```

## [Skull](https://cssbattle.dev/play/56)

<img width="200px" src="https://cssbattle.dev/targets/56.png">

```html
<div></div>
<style>
  body {
    background: #191919;
  }
  div {
    width: 120px;
    height: 100px;
    background: #4f77ff;
    margin: 85px auto;
    border-radius: 60px 60px 10px 10px;
    position: relative;
    z-index: 1;
  }
  div::before,
  div::after {
    position: absolute;
    background: #191919;
    content: "";
  }
  div::before {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    bottom: -11px;
    left: 50px;
    box-shadow: 25px -28px 0 10px #191919, -25px -28px 0 10px #191919;
  }
  div::after {
    width: 10px;
    height: 20px;
    bottom: -40px;
    left: 55px;
    border-radius: 4px;
    box-shadow: 15px 0px 0 0 #191919, -15px 0px 0 0 #191919;
  }
  body::after {
    position: absolute;
    background: #4f77ff;
    content: "";
    width: 80px;
    height: 40px;
    left: 160px;
    bottom: 85px;
    border-radius: 0 0 20px 20px;
  }
</style>
```

## [Pillars](https://cssbattle.dev/play/57)

<img width="200px" src="https://cssbattle.dev/targets/57.png">

```<div><div>
<style>
  body{
    background: #191919;
    display: grid;
    place-items: center;
  }
  div{
    background: #4F77FF;
    width: 110px;
    height: 110px;
    position: relative;
  }
  div::after{
    position: absolute;
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #4F77FF;
    top: -20px;
    left: -20px;
    box-shadow:
      8px 8px 0 7px #F9E492,
      14px 14px 0 16px #191919,
      120px 0px 0 0px #4F77FF,
      112px 8px 0 7px #F9E492,
      106px 14px 0 16px #191919,
      120px 120px 0 0px #4F77FF,
      112px 112px 0 7px #F9E492,
      106px 106px 0 16px #191919,
      0px 120px 0 0px #4F77FF,
      8px 112px 0 7px #F9E492,
      14px 106px 0 16px #191919
      ;
  }
</style>
```

## [Rose](https://cssbattle.dev/play/58)

<img width="200px" src="https://cssbattle.dev/targets/58.png">

```html
<div></div>
<p></p>
<style>
  body {
    background: #191919;
    margin: 0;
    position: relative;
  }
  body::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    background: transparent;
    border-radius: 50%;
    top: 40px;
    left: 185px;
    box-shadow: 0 60px 0 35px #4f77ff, 0 110px 0 5px #f9e492;
  }
  body::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 90px;
    background: #f9e492;
    border-radius: 10px;
    top: 165px;
    left: 190px;
  }
  div {
    box-sizing: border-box;
    width: 160px;
    height: 50px;
    background: #4f77ff;
    position: relative;
    top: 75px;
    left: 120px;
    border: solid 10px #191919;
    border-radius: 100px 100px 200px 200px;
  }
  p {
    width: 30px;
    height: 30px;
    background: #4f77ff;
    position: relative;
    border-radius: 50%;
    z-index: 1;
    top: -30px;
    left: 175px;
    border: solid 10px #191919;
  }
  div::after {
    box-sizing: border-box;
    position: absolute;
    content: "";
    width: 120px;
    height: 50px;
    background: #4f77ff;
    top: -30px;
    left: 10px;
    border: solid 10px #191919;
    border-radius: 100px 100px 200px 200px;
  }
</style>
```

## [Earth](https://cssbattle.dev/play/59)

<img width="200px" src="https://cssbattle.dev/targets/59.png">

```html
<div>
  <div>
    <style>
      body {
        background: linear-gradient(
            transparent 105px,
            #191919 105px,
            #191919 115px,
            transparent 115px,
            transparent 145px,
            #191919 145px,
            #191919 155px,
            transparent 155px,
            transparent 185px,
            #191919 185px,
            #191919 195px,
            transparent 155px
          ), linear-gradient(
            to right,
            transparent 195px,
            #191919 195px,
            #191919 205px,
            transparent 205px
          ), radial-gradient(
            circle at 265px 150px,
            transparent 100px,
            #191919 100px,
            #191919 110px,
            transparent 110px
          ), radial-gradient(
            circle at 135px 150px,
            transparent 100px,
            #191919 100px,
            #191919 110px,
            transparent 110px
          ), radial-gradient(circle, #4f77ff 75px, #191919 75px);
        display: grid;
        place-items: center;
      }
    </style>
  </div>
</div>
```

## [Evil Triangles](https://cssbattle.dev/play/60)

<img width="200px" src="https://cssbattle.dev/targets/60.png">

```html
<div></div>
<style>
  body {
    background: #191919;
    display: grid;
    place-items: center;
  }
  div {
    width: 200px;
    height: 150px;
    background: #4f77ff;
    position: relative;
  }
  div::after,
  div::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    background: #191919;
    top: 25px;
    transform: skewY(45deg);
  }
  div::before {
    box-shadow: 0 100px 0 0 #191919, 100px 0px 0 0 #191919,
      100px -100px 0 0 #191919;
  }
  div::after {
    transform: skewY(-45deg);
    left: 50px;
    box-shadow: 0 100px 0 0 #191919, 100px 100px 0 0 #191919,
      100px 200px 0 0 #191919;
  }
</style>
```
