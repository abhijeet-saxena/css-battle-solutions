# Flex

## [Pawn](https://cssbattle.dev/play/151)

<img width="200px" src="https://cssbattle.dev/targets/151.png">

```html
<div></div>
<h1></h1>
<h2></h2>
<style>
  body {
    background: radial-gradient(circle at 50% 80px, #d86f45 25px, #f5d6b4 0);
  }
  div {
    width: 90px;
    height: 65px;
    background: #dd6b4d;
    margin: 135 auto 0;
    position: relative;
  }
  div::before,
  div::after {
    position: absolute;
    content: "";
    width: 135px;
    height: 135px;
    border-radius: 50%;
    background: #f5d6b4;
    top: -55;
    left: -110;
  }
  div::after {
    left: 65;
  }
  h1,
  h2 {
    position: fixed;
    background: #d86f45;
  }
  h1 {
    width: 80px;
    height: 20px;
    top: 88.5px;
    left: 160px;
    border-radius: 7px 7px 13px 13px;
  }
  h2 {
    width: 140px;
    height: 40px;
    top: 185px;
    left: 130px;
    border-radius: 20px 20px 10px 10px;
  }
</style>
```

## [Rook](https://cssbattle.dev/play/152)

<img width="200px" src="https://cssbattle.dev/targets/152.png">

```html
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>
<p></p>
<div></div>
<style>
  body {
    background: #62306d;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    background: #f7ec7d;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
  h1 {
    width: 90;
    height: 30;
    top: 77;
    border-radius: 5px 5px 10px 10px;
  }
  h2 {
    width: 60;
    height: 10;
    border-radius: 5px;
    top: 60.5;
  }
  h3 {
    width: 90;
    height: 65;
    top: 45.5;
    z-index: -1;
  }
  h4 {
    width: 110;
    height: 10;
    border-radius: 5px;
    top: 29.5;
  }
  h5 {
    width: 140;
    height: 25;
    top: 12;
    border-radius: 16px 16px 8px 8px;
  }
  h6 {
    width: 10;
    height: 40;
    top: -202.5;
    border-radius: 5px;
    box-shadow: 40px 0 0 0 #f7ec7d, -40px 0 0 0 #f7ec7d;
  }
  p {
    width: 150;
    height: 150;
    position: fixed;
    border-radius: 50%;
    background: #62306d;
    top: 54;
    left: 30;
    box-shadow: 190px 0 0 0 #62306d;
  }
  div {
    position: fixed;
    width: 30;
    height: 70;
    background: #62306d;
    top: 30;
    left: 205;
    z-index: 1;
    border-radius: 5px;
    box-shadow: -40px 0 0 0 #62306d;
  }
</style>
```

## [Checkers](https://cssbattle.dev/play/153)

<img width="200px" src="https://cssbattle.dev/targets/153.png">

```html
<div></div>
<p></p>
<style>
  body {
    background: #e3516e;
  }
  div {
    width: 40px;
    height: 40px;
    background: #fade8b;
    margin: 50px 0 0 92px;
    box-shadow: 80px 0 #fade8b, 160px 0 #fade8b, 40px 40px #fade8b, 120px 40px
        #fade8b, 0 80px #fade8b, 80px 80px #fade8b, 160px 80px #fade8b, 40px
        120px #fade8b, 120px 120px #fade8b, 0 160px #fade8b, 80px 160px #fade8b,
      160px 160px #fade8b;
  }
  p {
    width: 20px;
    height: 20px;
    background: #fade8b;
    border-radius: 50%;
    margin: 10px 0 0 102px;
    box-shadow: 80px 0 #fade8b, 160px 0 #fade8b, 40px -40px #fade8b, 120px -40px
        #fade8b, 0 80px #fade8b, 80px 80px #fade8b, 160px 80px #fade8b, 40px
        120px #fade8b, 120px 120px #fade8b;
  }
</style>
```

## [Poker Chip](https://cssbattle.dev/play/154)

<img width="200px" src="https://cssbattle.dev/targets/154.png">

```html
<div></div>
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<style>
  body {
    background: radial-gradient(
      circle at center,
      #0b2429,
      80px,
      #fcbe5c 80px,
      #fcbe5c 95px,
      #0b2429 95px,
      #0b2429 105px,
      #998235 0
    );
  }
  h1,
  h2,
  h3,
  h4 {
    position: fixed;
    width: 200px;
    height: 30px;
    background: #0b2429;
    top: 116.5px;
    left: 100px;
  }
  h2 {
    rotate: 90deg;
  }
  h3 {
    rotate: 45deg;
  }
  h4 {
    rotate: -45deg;
  }
  div {
    width: 120px;
    height: 120px;
    border: solid 10px #fcbe5c;
    border-radius: 50%;
    margin: 80px auto 0;
    position: relative;
    z-index: 1;
  }
</style>
```

## [Snakes & Ladders](https://cssbattle.dev/play/155)

<img width="200px" src="https://cssbattle.dev/targets/155.png">

```html
<div></div>
<p></p>
<style>
  body {
    background: #6592cf;
  }
  div {
    width: 30px;
    height: 250px;
    background: #060f55;
    margin: 60 0 0 112;
    border-radius: 15px 15px 0 0;
    box-shadow: 130px 0 0 0 #060f55;
  }
  p {
    width: 100px;
    height: 30px;
    background: #060f55;
    position: fixed;
    top: 104;
    left: 150px;
    box-shadow: 0 60px 0 0 #060f55, 0 120px 0 0 #060f55;
  }
</style>
```

## [Chinese Checkers](https://cssbattle.dev/play/156)

<img width="200px" src="https://cssbattle.dev/targets/156.png">

```html
<div></div>
<p></p>
<style>
  body {
    background: #926927;
    display: grid;
    place-items: center;
  }
  div {
    width: 200px;
    height: 220px;
    background: radial-gradient(
        circle at 10px 10px,
        #f8b140 10px,
        transparent 10px
      ), radial-gradient(circle at 10px 10px, #f8b140 10px, transparent 10px);
    background-size: 30px 50px, 30px 50px;
    background-position: 0 0px, 15px 25px;
  }
  p {
    width: 100px;
    height: 25px;
    position: fixed;
    background: #926927;
    top: 20;
    left: 90;
    box-shadow: 0 200px 0 0 #926927, 130px 0 0 0 #926927,
      130px 200px 0 0 #926927, -20px 25px 0 0 #926927, -20px 175px 0 0 #926927, 140px
        25px 0 0 #926927, 140px 175px 0 0 #926927, -80px 75px 0 0 #926927,
      200px 75px 0 0 #926927, -60px 102px 0 0 #926927, 190px 102px 0 0 #926927, -80px
        129px 0 0 #926927, 200px 129px 0 0 #926927;
  }
</style>
```

## [Monopoly](https://cssbattle.dev/play/157)

<img width="200px" src="https://cssbattle.dev/targets/157.png">

```html
<div></div>
<p></p>
<h1></h1>
<h2></h2>
<style>
  body {
    background: #e38f66;
  }
  div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fffbda;
    position: fixed;
    bottom: 108px;
    left: 160px;
    box-shadow: 60px 0 0 0 #e38f66, 60px 0 0 10px #fffbda,
      5px 58px 0 10px #fffbda, 55px 58px 0 10px #fffbda;
  }
  p {
    width: 120px;
    height: 90px;
    background: #fffbda;
    margin: 40 auto 0;
    border-radius: 60px 60px 0 0;
  }
  h1 {
    width: 180px;
    height: 20px;
    background: #fffbda;
    border-radius: 10px;
    margin: 0 auto 0;
  }
  h2 {
    position: fixed;
    width: 20px;
    height: 20px;
    background: #fffbda;
    transform: rotate(45deg);
    bottom: 30px;
    left: 151px;
    box-shadow: 55px -55px 0 0 #fffbda;
  }
</style>
```

## [Clubs](https://cssbattle.dev/play/158)

<img width="200px" src="https://cssbattle.dev/targets/158.png">

```html
<div></div>
<p></p>
<style>
  body {
    background: #4f77ff;
  }
  div {
    width: 45px;
    height: 60px;
    background: #1038bf;
    margin: 190 auto 0;
  }
  p {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #1038bf;
    position: fixed;
    top: 34px;
    left: 150px;
    box-shadow: -45px 70px 0 0 #1038bf, 45px 70px 0 0 #1038bf,
      -55px 110px 0 0 #4f77ff, 55px 110px 0 0 #4f77ff;
  }
</style>
```
