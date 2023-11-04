# Conic

## [Equals](https://cssbattle.dev/play/31)

<img width="200px" src="https://cssbattle.dev/targets/31.png">

#### Soluton

```html
<div></div>
<style>
  body {
    background: #aa445f;
    display: grid;
    place-items: center;
  }
  div {
    width: 250px;
    height: 200px;
    background: linear-gradient(
      90deg,
      #f7ec7d 100px,
      #aa445f 100px,
      #aa445f 150px,
      #e38f66 150px
    );
    border-radius: 100px;
  }
</style>
```

#### Minified:

```html
<body bgcolor=AA445F><p><style>p{width:250;height:200;background:linear-gradient(90deg,#F7EC7D 25vw,#AA445F 0 50vh,#E38F66 0);border-radius:25vw;margin:13%67
```

## [Band-aid](https://cssbattle.dev/play/32)

<img width="200px" src="https://cssbattle.dev/targets/32.png">

#### Soluton

```html
<div></div>
<div class="alt"></div>
<style>
  body {
    transform: rotate(-45deg);
  }
  div {
    width: 200px;
    height: 50px;
    background: #a3a368;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    mix-blend-mode: screen;
  }
  .alt {
    width: 50px;
    height: 200px;
    background: #f3ac3c;
    top: 92px;
  }
</style>
```

#### Minified:

```html
<p><p a><style>p{width:200;height:50;background:#A3A368;mix-blend-mode:screen;rotate:-45deg;margin:125 92}[a]{background:#F3AC3C;rotate:45deg;margin:-175 92
```
