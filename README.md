# Starlight
 A fork of the Stargazing theme for Flarum, updated for compatibility.

**Disclaimer**: This port of the Stargazing theme is still in development and **NOT** ready for production. Enable at your own risk.

## Installation
Add the repository to your `composer.json`:
```sh
composer config repositories.starlight vcs https://github.com/damienvesper/starlight
```

Install the theme.
```sh
composer require damienvesper/starlight:dev-master
```

### Fonts
Append this to your custom stylesheet:
```css
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Titillium+Web:wght@400;600;700&display=swap');
```

### Background
Append this to the bottom of your custom footer HTML:
```js
<script
    src="https://cdnjs.cloudflare.com/ajax/libs/bubbly-bg/1.0.0/bubbly-bg.js"
    integrity="sha512-eL1rMdogBNiO1YKG1K6W3TcZBgAHB0/qBdnHd9WhMSGLTG3iXX9uBckGSG7SyODb346fNO7QtdW9rkKZpXuB1w=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
></script>
<script>
    bubbly({
        blur: 0.7,
        bubbleFunc: () => `hsla(${Math.random() * 360}, 0%, 100%, ${Math.random() * 0.3})`,
        bubbles: 120,
        colorStart: "#181520",
        colorStop: "#181520",
        shadowColor: "#fff7fe",
        radiusFunc:() => Math.random() * 2.5
    });
</script>
```


## Uninstallation
To remove, the theme, simply run:
```sh
composer remove damienvesper/starlight
```
