
<p align="center">
    <img src="./img/3style.png" alt="3style logo" width="400">
</p>

<h3 align="center">3style</h3>

Легковесная библиотека для применения готовых стилей и компонентов команды GasuDev

## Быстрый старт
### Внешние зависимости для html страниц
В `<head>` страницы подключите файлы:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/3style@0.1.1/dist/3style.min.css">
<script src="https://cdn.jsdelivr.net/npm/3style@0.1.1/dist/3style.min.js" crossorigin="anonymous"></script>
```
---
### Node js
Установить модуль командой: `npm install 3style`

Предоставить доступ к файлам (пример для express)
```js
app.use('/public', express.static(path.join(_dirname, 'node_modules/3style/dist')));
```

Импортировать файлы в свой проект:
``` html 
<link rel="stylesheet" href="./public/3style.min.css">
<script src="./public/3style.min.js" crossorigin="anonymous"></script>
```

``` pug 
include '../node_modules/3style/dist/pug/3style';
```

## Документация
_(Coming soon)_

## Примеры
* [demo](https://followtheowlets.github.io/3style/)
* [codepen.io](https://codepen.io/followtheowlets/pen/bGORpEp)

## License
Copyright (c) 2023 FollowTheOwlets Lev  
Licensed under the MIT license.
