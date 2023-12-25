
<p align="center">
  <a href="https://getbootstrap.com/">
    <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap logo" width="200" height="165">
  </a>
</p>

<h3 align="center">Lionstyle</h3>

Легковесная библиотека для применения готовых стилей и компонентов команды GasuDev

## Быстрый старт
Установить модурь командой: `npm install lionstyle`

Предоставить доступ к файлам (примери для express)
```js
app.use('/css', express.static(path.join(_dirname, 'node_modules/lionstyle/dist/css')));
app.use('/js', express.static(path.join(_dirname, 'node_modules/lionstyle/dist/js')));
```

Импортировать файлы в свой проект:
``` html 
<link rel="stylesheet" href="./css/lionstyle.min.css">
<script src="./js/lionstyle.min.js" crossorigin="anonymous"></script>
```

``` pug 
include '../node_modules/lionstyle/dist/pug/lionstyle';
```

## Документация
_(Coming soon)_

## Примеры
* [codepen.io](https://codepen.io/followtheowlets/pen/bGORpEp)

## License
Copyright (c) 2023 FollowTheOwlets Lev  
Licensed under the MIT license.
