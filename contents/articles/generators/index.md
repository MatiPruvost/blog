---
title: Generadores Yeoman
author: Mati Pruvost
date: 2015-11-09
template: article.jade
comments: true
cc: false
---

[Yeoman](http://yeoman.io/) agiliza el inicio de un nuevo proyecto de software utilizando herramientas para facilitar el desempeño y productividad.

<span class="more"></span>

![Yeoman](yeoman.jpg)
<div class="caption">
[Yeoman Warder Merry](https://www.flickr.com/photos/byzantiumbooks/14922961157/in/photolist-oJG5rK-6qQXEa-vwxKjc-ptcF3N-pveNWB-bwJZVn-87AFRa-5ywmUk-ptcEZb-eFavYN-sDJq9E-eF4pCg-pvV5u9-omYtzj-kxekPP-oeB3Db-rBQTpW-erLBS-t3RkB-6JQNZa-oK9GLV-oCeM84-oX2Qgv-w2VyFJ-x7StvE-qAoaRE-pesoYQ-8qx6WA-7zVkFT-okgAF4-isEhpF-6E1DcH-7prqaA-puXyn4-iv7zdg-uno5ZS-aqqhHP-efbr2B-efbqM6-efbqxe-rtwf9K-df3qB8-df3q4i-df3p9d-6uqxAG-rUiCLS-8GGqqA-7jVQWa-3npWM1-87Av8X) by [Bill Smith](https://www.flickr.com/photos/byzantiumbooks/) is licensed under [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)
</div>

# ¿Por qué utilizar generadores Yeoman?
El objetivo principal de esta herramienta es construir la estructura del proyecto de software que estamos por iniciar. A este esqueleto se le denomina `scaffolding`. 

La estructura que proporciona el generador sigue las ideas de patrones de diseño y buenas prácticas propias del lenguaje en el que estamos desarrollando. Por lo tanto, nos aseguramos que el proyecto de software se ubica dentro de una guía establecida y planificada. Es posible no incluir ciertas guías por el simple hecho de no conocerlas, de esta forma nos aseguramos de lo contrario.

Otro punto importante es agregar nuevas piezas de software al proyecto de manera automática. Posibilita incluir nuevos módulos evitando hacerlo de forma manual.

Incluir tareas automáticas es otra ventaja. Las tareas pueden ser compilar el proyecto para diferentes ambientes como `development`, `testing` o `production`, ejecutar tests automáticos, crear documentación del proyecto e incluir nuevas librerías. 

# ¿Qué tipos de generadores Yeoman hay disponibles?
La variedad de generadores es bastante amplia, existen aquellos desarrollados oficialmente por el equipo de Yeoman y otros por la comunidad.

A continuación algunos generadores de ejemplo:

- [generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack#readme): Crear aplicaciones MEAN, incluye MongoDB, Express, AngularJS y Node.  
- [generator-ionic](https://github.com/diegonetto/generator-ionic#readme): Crear aplicaciones Ionic utilizando AngularJS y Apache Cordova.  
- [generator-chrome-extension](https://github.com/yeoman/generator-chrome-extension#readme): Crear extensiones para Chrome.  
- [generator-polymer](https://github.com/yeoman/generator-polymer#readme): Crear aplicaciones utilizando la plataforma Polymer.  
- [generator-generator](https://github.com/yeoman/generator-generator#readme): Crear generadores Yeoman.  

Para ver a la lista provista por el proyecto debes acceder a este [link](http://yeoman.io/generators/).

# Requisitos

Los requisitos para instalar Yeoman son:

- Node.js.  
- npm.  
- bower.  
- grunt.  

## Node y npm
[Node.js](https://nodejs.org) es un runtime environment en Javascript, multiplataforma y basado en motor V8 de Chrome. [Npm](https://www.npmjs.com/) es el gestor de paquetes de Node.js.

Para instalar Node.js y npm tenés que dirigirte a este [link](https://nodejs.org/en/download/) 

## Bower

[Bower](http://bower.io/) es un gestor de paquetes optimizado para desarrollo front-end. Para instalar bower tenes que ejecutar el siguiente comando:

```bash
$ npm install bower -g
```

## Grunt
[Grunt](http://gruntjs.com/) es un gestor de tareas repetitivas. Para instalar grunt tenes que ejecutar el siguiente comando:

```bash
$ npm install grunt-cli -g
```

# Instalación
Para instalar yeoman tenes que ejecutar el siguiente comando:

```bash
$ npm install yo -g
```

Luego tendrás que instalar el generador específico conveniente para tu idea, en el caso que quisieras empezar un proyecto MEAN, deberás ejecutar el siguiente comando:

```bash
$ npm install generator-angular-fullstack -g
```