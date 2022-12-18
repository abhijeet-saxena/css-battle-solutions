# Grid

## [Spiral](https://cssbattle.dev/play/133)

<img width="200px" src="https://cssbattle.dev/targets/133.png">

```html
<div></div>
<p></p>
<style>
  body {
    background: radial-gradient(
        circle at 90px 150px,
        #d86f45 10px,
        transparent 10px
      ), radial-gradient(circle at 170px 150px, #d86f45 10px, #f5d6b4 10px);
  }
  div {
    width: 160px;
    height: 80px;
    background: radial-gradient(
      circle at 50% 100%,
      #f5d6b4 20px,
      #d86f45 20px,
      #d86f45 40px,
      #f5d6b4 40px,
      #f5d6b4 60px,
      #d86f45 60px
    );
    border-radius: 110px 110px 0 0;
    margin: 70px auto;
  }
  p {
    width: 200px;
    height: 100px;
    background: red;
    margin: -70px 72px;
    border-radius: 0 0 100px 100px;
    background: radial-gradient(
      circle at 50% 0%,
      transparent 40px,
      #d86f45 40px,
      #d86f45 60px,
      #f5d6b4 60px,
      #f5d6b4 80px,
      #d86f45 80px
    );
  }
</style>
```

## [Wig](https://cssbattle.dev/play/134)

<img width="200px" src="https://cssbattle.dev/targets/134.png">

```html
<div></div>
<p></p>
<style>
  body {
    background: #62306d;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div,
  p {
    width: 80px;
    height: 160px;
    background: #f7ec7d;
    border-radius: 80px 0 40px 0;
  }
  p {
    border-radius: 0 80px 0 40px;
  }
</style>
```

## [Spikes](https://cssbattle.dev/play/135)

<img width="200px" src="https://cssbattle.dev/targets/135.png">

```html
<div></div>
<p></p>
<style>
  body {
    background: #e3516e;
  }
  div {
    width: 90px;
    height: 40px;
    border-radius: 50px;
    background: #d9d9d9;
    margin: 100px 0 0 92px;
    box-shadow: 110px 0 0 0 #d9d9d9, 0 60px 0 0 #d9d9d9, 110px 60px 0 0 #d9d9d9;
  }
  p {
    width: 100px;
    height: 100px;
    background: #e3516e;
    transform: rotate(45deg);
    margin-top: -40px;
    margin-left: 40.5px;
    box-shadow: 143.5px -143.5px 0 0 #e3516e;
  }
</style>
```

## [Alien Eye](https://cssbattle.dev/play/136)

<img width="200px" src="https://cssbattle.dev/targets/136.png">

```html
<div></div>
<style>
  body {
    display: grid;
    place-items: center;
    background: radial-gradient(circle at center, #fcbe5c 90px, #998235 90px);
  }
  div {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #998235;
    margin-left: 20px;
    box-shadow: -10px 0 0 20px #fcbe5c, 0px 0 0 40px #0b2429;
  }
</style>
```

## [Elbow](https://cssbattle.dev/play/137)

<img width="200px" src="https://cssbattle.dev/targets/137.png">

```html
<div></div>
<style>
  body {
    background: #6592cf;
  }
  div {
    width: 250px;
    height: 150px;
    border: solid 50px #060f55;
    border-radius: 100px 0 0;
    margin: 50 42;
    border-right: none;
    border-bottom: none;
  }
</style>
```

## [Lotus](https://cssbattle.dev/play/138)

<img width="200px" src="https://cssbattle.dev/targets/138.png">

```html
<div></div>
<style>
  body {
    background: #926927;
  }
  div,
  div::before,
  div::after {
    width: 100px;
    height: 100px;
    background: #6d480a;
    border-radius: 250px 0px;
    position: relative;
    top: 112;
    left: 192;
  }
  div::before,
  div::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100;
    transform: rotate(90deg);
  }
  div::after {
    top: -20;
    left: -50;
    background: #ffffff;
    transform: rotate(-45deg);
  }
</style>
```
