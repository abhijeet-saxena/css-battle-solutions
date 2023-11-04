# Aspect

## [Summit](https://cssbattle.dev/play/89)

<img width="200px" src="https://cssbattle.dev/targets/89.png">

```html
<div></div>
<style>
  body {
    background: radial-gradient(
      circle at 200px 150px,
      #f9e492 100px,
      #191919 100px
    );
  }
  div {
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle at 150px 141px,
      #191919 100px,
      #4f77ff 100px
    );
    margin: 9px auto;
    clip-path: polygon(50% 50%, 100% 100%, 0 100%);
  }
</style>
```

## [Eclipse](https://cssbattle.dev/play/90)

<img width="200px" src="https://cssbattle.dev/targets/90.png">

```html
<style>
  body {
    margin: 0;
    background: radial-gradient(
        circle at 50% 350px,
        #998235 200px,
        transparent 200px
      ), radial-gradient(
        circle,
        #1a4341 100px,
        #f3ac3c 100px,
        #f3ac3c 125px,
        transparent 125px
      ), radial-gradient(circle at 50% -50px, #998235 200px, #f3ac3c 200px);
  }
</style>
```

## [Reflection](https://cssbattle.dev/play/91)

<img width="200px" src="https://cssbattle.dev/targets/91.png">

```html
<style>
  body {
    background: linear-gradient(
        transparent 150px,
        #6cb3a9 150px,
        #6cb3a9 165px,
        transparent 165px,
        transparent 175px,
        #6cb3a9 175px,
        #6cb3a9 190px,
        transparent 190px,
        transparent 200px,
        #6cb3a9 200px,
        #6cb3a9 215px,
        transparent 215px,
        transparent 225px,
        #6cb3a9 225px,
        #6cb3a9 240px,
        transparent 240px,
        transparent 250px
      ), radial-gradient(circle, #f6df96 100px, transparent 100px),
      linear-gradient(#d25b70 50%, #6cb3a9 50%);
  }
</style>
```

## [Squeeze](https://cssbattle.dev/play/92)

<img width="200px" src="https://cssbattle.dev/targets/92.png">

```html
<style>
  body {
    background: radial-gradient(
        circle at 87px 125px,
        #6592cf 15px,
        transparent 15px
      ), radial-gradient(circle at 87px 175px, #6592cf 15px, transparent 15px),
      radial-gradient(circle at 312px 125px, #6592cf 15px, transparent 15px),
      radial-gradient(circle at 312px 175px, #6592cf 15px, transparent 15px),
      linear-gradient(
        transparent 130px,
        #243d83 130px,
        #243d83 170px,
        transparent 170px
      ), radial-gradient(circle, #243d83 100px, transparent 100px),
      radial-gradient(circle at -25px, #243d83 100px, transparent 100px),
      radial-gradient(circle at 425px, #243d83 100px, #6592cf 100px);
  }
</style>
```

## [Great Wall](https://cssbattle.dev/play/93)

<img width="200px" src="https://cssbattle.dev/targets/93.png">

```html
<div></div>
<style>
  body {
    background: radial-gradient(
        circle at 160px 110px,
        #f9e492 20px,
        transparent 20px
      ), radial-gradient(circle, #191919 100px, #4f77ff 100px);
  }
  div {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 50px auto;
    position: relative;
    overflow: hidden;
  }
  div::before,
  div::after {
    position: absolute;
    content: "";
  }
  div::before {
    background: #d6b73f;
    width: 22px;
    height: 16px;
    transform: skew(0, -32deg);
    top: 116px;
    left: 99px;
    box-shadow: 0 26px 0 0 #d6b73f, 0 52px 0 0 #d6b73f;
  }
  div::after {
    background: #f9e492;
    width: 101px;
    height: 16px;
    top: 122px;
    left: 0px;
    box-shadow: 0 26px 0 0 #f9e492, 0 52px 0 0 #f9e492, 121px -13px 0 0 #f9e492,
      121px 13px 0 0 #f9e492, 121px 39px 0 0 #f9e492;
  }
</style>
```

## [Ripples](https://cssbattle.dev/play/94)

<img width="200px" src="https://cssbattle.dev/targets/94.png">

```html
<style>
  body {
    background: radial-gradient(
      circle,
      #f3ac3c 20px,
      #0e2e2c 20px,
      #0e2e2c 28px,
      #f3ac3c 28px,
      #f3ac3c 40px,
      #0e2e2c 40px,
      #0e2e2c 50px,
      #998235 50px,
      #998235 60px,
      #0e2e2c 60px,
      #0e2e2c 72px,
      #f3ac3c 72px,
      #f3ac3c 80px,
      #0e2e2c 80px,
      #0e2e2c 94px,
      #f3ac3c 94px,
      #f3ac3c 100px,
      #0e2e2c 100px
    );
  }
</style>
```

## [Pokeball](https://cssbattle.dev/play/95)

<img width="200px" src="https://cssbattle.dev/targets/95.png">

```html
<div></div>
<style>
  body{
    background: radial-gradient(circle, #781728 90px, #6CB3A9 50px);
  }
  div {
    margin: 50px auto;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(#D25B70 90px, #781728 90px, #781728 110px,  #FFFFFF 110px);
    position: relative:
  }
  div::before, div::after{
    position: absolute;
    content: "";
    width: 10px;
    height: 20px;
    top: 140px;
    background: #6CB3A9;
    box-shadow: 190px 0 0 0 #6CB3A9;
  }
  div::after{
    width: 50px;
    height: 50px;
    background: #F6DF96;
    border-radius: 50%;
    border: solid 10px #781728;
    top: 115px;
    left: 165px;
  }
</style>
```

## [Mandala](https://cssbattle.dev/play/96)

<img width="200px" src="https://cssbattle.dev/targets/96.png">

```html
<div></div>
<style>
  body {
    background: radial-gradient(circle, #6592cf 100px, #243d83 0px);
  }
  body::before,
  body::after,
  div::before,
  div::after {
    width: 130px;
    height: 130px;
    position: absolute;
    content: "";
    border-radius: 50%;
    border: solid 20px #243d83;
    top: -10px;
    left: 115px;
  }
  body::after {
    top: 140px;
  }
  div::before,
  div::after {
    top: 65px;
    left: 40px;
  }
  div::after {
    left: 190px;
  }
</style>
```
