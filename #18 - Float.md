# Float

## [Sharingan](https://cssbattle.dev/play/101)

<img width="200px" src="https://cssbattle.dev/targets/101.png">

```html
<div></div>
<style>
  body {
    background: #161616;
    margin: 0;
    display: grid;
    place-items: center;
  }
  div {
    width: 190px;
    height: 190px;
    background: #a22015;
    border-radius: 50%;
    border: solid 5px #000000;
    position: relative;
    overflow: hidden;
  }
  div::before {
    position: absolute;
    content: "";
    width: 50px;
    height: 50px;
    background: #000000;
    border-radius: 50%;
    top: 70px;
    left: 70px;
    box-shadow: 0 0 0 10px #e96a23, 0 0 0 25px #000000,
      74px -43px 0 10px #a22015, 74px -43px 0 25px #000000,
      -74px -43px 0 10px #a22015, -74px -43px 0 25px #000000,
      0px 85px 0 10px #a22015, 0px 85px 0 25px #000000;
  }
</style>
```

## [One Piece](https://cssbattle.dev/play/102)

<img width="200px" src="https://cssbattle.dev/targets/102.png">

```html
<div></div>
<p></p>
<p></p>
<p></p>
<p></p>
<style>
  body {
    background: #000000;
  }
  body::after {
    content: "";
    position: absolute;
    background: #ffffff;
    width: 15px;
    height: 20px;
    top: 220px;
    left: 173px;
    box-shadow: 20px 0 0 0 #ffffff, 40px 0 0 0 #ffffff;
  }
  div {
    width: 150px;
    height: 100px;
    background: #ffffff;
    border-radius: 100px;
    margin: 110px auto;
  }
  div::before,
  div::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 40px;
    background: #000000;
    border-radius: 50%/50%;
    top: 140px;
    left: 145px;
    transform: rotate(-30deg);
  }
  div::after {
    left: 205px;
    transform: rotate(30deg);
  }
  p {
    position: fixed;
    background: #ffffff;
    width: 20px;
    height: 25px;
    top: 83px;
    left: 112px;
    z-index: 1;
    transform: rotate(-45deg);
  }
  p::before {
    position: absolute;
    content: "";
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #ffffff;
    top: -13;
    left: -10;
    box-shadow: 15px 0 0 0 #ffffff;
  }
  p:nth-child(2) {
    left: 268px;
    transform: rotate(45deg);
  }
  p:nth-child(3) {
    top: 180px;
    left: 112px;
    transform: rotate(-135deg);
  }
  p:nth-child(4) {
    top: 180px;
    left: 268px;
    transform: rotate(135deg);
  }
</style>
```

## [Super Saiyan](https://cssbattle.dev/play/103)

<img width="200px" src="https://cssbattle.dev/targets/103.png">

```html
<div></div>
<p></p>
<style>
  body {
    background: #161616;
    position: relative;
  }
  body::after {
    position: absolute;
    content: "";
    background: #161616;
    width: 20px;
    height: 10px;
    border-radius: 0 0 10px 10px;
    top: 188px;
    left: 182px;
  }
  div {
    width: 80px;
    height: 70px;
    background: linear-gradient(to right, #ffffff 40px, #ffdeb9 25px);
    position: relative;
    top: 138px;
    left: 152px;
    border-radius: 0px 0px 50px 50px;
  }
  div::before,
  div::after {
    position: absolute;
    content: "";
    width: 55px;
    height: 30px;
    background: #ebae11;
    border-radius: 0px 0px 50px 50px;
    z-index: -1;
    top: 12px;
    left: 47px;
    transform: rotate(-10deg);
  }
  div::before {
    top: 13px;
    left: -22px;
    transform: rotate(15deg);
  }
  p {
    width: 60px;
    height: 60px;
    background: #ebae11;
    border-radius: 100% 0px;
    position: relative;
    z-index: 1;
    left: 162px;
    transform: rotate(-45deg);
    top: 2px;
  }
  p::before,
  p::after {
    content: "";
    position: absolute;
    width: 60px;
    height: 28px;
    background: #ebae11;
    border-radius: 0px 0px 50px 50px;
  }
  p::before {
    top: 52px;
    left: 3px;
    transform: rotate(-15deg);
  }
  p::after {
    top: 12px;
    left: -35px;
    transform: rotate(107deg);
  }
</style>
```

## [Amegakure](https://cssbattle.dev/play/104)

<img width="200px" src="https://cssbattle.dev/targets/104.png">

```html
<div></div>
<style>
  body {
    background: #000;
    display: grid;
    place-items: center;
    position: relative;
  }
  body::before {
    position: absolute;
    content: "";
    width: 240px;
    height: 120px;
    top: 82px;
    left: 72px;
    background: #37385a;
    border-radius: 20px;
  }
  div {
    width: 200px;
    height: 80px;
    background: linear-gradient(
      105deg,
      #9897ae 0px,
      #9897ae 82px,
      #c0c3db 82px,
      #c0c3db 132px,
      #9897ae 0px
    );
    border-radius: 10px;
    position: relative;
  }
  div::before,
  div::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
  }
  div::before {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #000;
    top: 15px;
    left: 15px;
    box-shadow: 0 0 0 0 #000, 0 20px 0 0 #000, 0 40px 0 0 #000, 160px 0px 0 0
        #000, 160px 20px 0 0 #000, 160px 40px 0 0 #000;
  }
  div::after {
    width: 10px;
    height: 50px;
    border-radius: 5px;
    background: #000;
    top: 15px;
    left: 65px;
    box-shadow: 20px 0 0 0 #000, 40px 0 0 0 #000, 60px 0 0 0 #000;
  }
</style>
```
