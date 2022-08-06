# Hover

## [Arineo](https://cssbattle.dev/play/117)

<img width="200px" src="https://cssbattle.dev/targets/117.png">

```html
<style>
  body {
    background: radial-gradient(
        circle at center,
        #0088ca 11px,
        transparent 10px
      ), linear-gradient(
        #fff 60px,
        transparent 60px,
        transparent 240px,
        #fff 240px
      ), linear-gradient(
        115deg,
        #fff 185px,
        #2e2926 185px,
        #2e2926 225px,
        transparent 225px
      ), linear-gradient(-115deg, #fff 185px, #2e2926 100px, #2e2926 225px, #fff
          225px);
  }
  body::before,
  body::after {
    position: fixed;
    content: "";
    width: 142px;
    height: 20px;
    background: linear-gradient(45deg, #ffffff 20px, #0088ca 10px);
    border: solid 8px #fff;
    top: 92px;
    left: 114px;
    transform: rotate(45deg);
    transform-origin: 0 0;
  }
  body::after {
    border-left: none;
    width: 179px;
    top: 184px;
    left: 194px;
    transform: rotate(-45deg);
    background: linear-gradient(-45deg, #ffffff 20px, #0088ca 10px);
  }
</style>
```

## [Donkey Kong](https://cssbattle.dev/play/118)

<img width="200px" src="https://cssbattle.dev/targets/118.png">

```html
<p></p>
<style>
  body {
    background: #000000;
  }
  p {
    width: 300px;
    height: 20px;
    background: #af067c;
    margin: 90 auto;
    border-radius: 10px;
    box-shadow: 0 100px 0 0 #af067c;
  }
  p::before {
    position: fixed;
    content: "";
    width: 300px;
    height: 20px;
    background: #af067c;
    border-radius: 10px;
    top: 140;
    transform: rotate(-4deg);
  }
  p::after {
    position: fixed;
    content: "";
    width: 20px;
    height: 50px;
    background: #ffffff;
    top: 110px;
    left: 80px;
    box-shadow: 110px 40px 0 0 #ffffff, 220px -10px 0 0 #ffffff,
      220px 40px 0 0 #ffffff;
    z-index: -1;
  }
</style>
```
