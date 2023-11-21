---
description: 48 hours, 2 Targets and some intense CSS golfing.
---

# Inline

## [Suffocate](https://cssbattle.dev/play/29)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/29.png">

#### Solution:

```html
<div></div>
<div></div>
<div></div>
<div></div>
<style>
  body {
    background: #1a4341;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }
  div {
    width: 200px;
    height: 150px;
    background: #f3ac3c;
  }
  div:nth-child(1) {
    border-bottom-right-radius: 100px;
  }
  div:nth-child(2) {
    border-bottom-left-radius: 100px;
  }
  div:nth-child(3) {
    border-top-right-radius: 100px;
  }
  div:nth-child(4) {
    border-top-left-radius: 100px;
  }
</style>
```

#### Minified:

```html
<p><style>&{background:#1A4341}p{width:300;height:400;background:#F3AC3C;color:F3AC3C;border-radius:25vw;margin:-258-108;box-shadow:0 400px,75vw 0,75vw 400px
```

## [Horizon](https://cssbattle.dev/play/30)

<img width="400px" height="300px" loading="lazy" src="https://cssbattle.dev/targets/30.png">

#### Solution:

```html
<style>
  body {
    background: linear-gradient(
      #f7ec7d 50px,
      #e38f66 50px,
      #e38f66 100px,
      #aa445f 100px,
      #aa445f 200px,
      #62306d 200px
    );
  }
</style>
```

#### Minified:

```html
<style>&{background:linear-gradient(#F7EC7D 53q,#E38F66 0 25vw,#AA445F 0 50vw,#62306D 0
```

[\[↑ Scroll to top\]](#inline)
