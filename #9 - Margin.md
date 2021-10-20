# Margin

## [Magical Tree](https://cssbattle.dev/play/45)

<img src="https://cssbattle.dev/targets/45.png">

```html
<div></div>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    background: #1a4341;
    margin: 0;
  }
  div {
    width: 90px;
    height: 120px;
    box-shadow: 0px 0px 0 30px #998235, 0px 0px 0 60px #1a4341,
      0px 0px 0 90px #f3ac3c;
    margin: 0 auto;
  }
  div::before,
  div::after {
    content: "";
    position: absolute;
    background: #998235;
    bottom: 30px;
    left: 65px;
    width: 270px;
    height: 30px;
  }
  div::after {
    background: #f3ac3c;
    width: 100%;
    top: 90px;
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
  }
</style>
```

## [Mountains](https://cssbattle.dev/play/46)

<img src="https://cssbattle.dev/targets/46.png">

```html
<div></div>
<style>
  body {
    background: #293462;
    display: grid;
    place-items: center;
  }
  div {
    width: 200px;
    height: 200px;
    background: #fff1c1;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
  }
  div::before,
  div::after {
    content: "";
    position: absolute;
    width: 200px;
    height: 150px;
    background: #fe5f55;
    top: 108px;
    left: 24px;
    transform: rotate(-45deg);
    box-shadow: -128px -30px 0 0 #fe5f55;
  }
</style>
```

<style>
    img{
        width: 200px;
        margin: 1rem 0;
    }
</style>
