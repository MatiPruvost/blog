---
title: Wintersmith tutoriial
author: Mati Pruvost
date: 2015-10-19
template: article.jade
---

Guía completa para generar un blog utilizando [Wintersmith](http://wintersmith.io/) y [GitHub Pages](https://pages.github.com/).

<span class="more"></span>

# GitHub Pages

Con GitHub pages es posible crear un website personal rápidamente.
Se necesita:

- Crear una cuenta en GitHub.  
- Crear el repositorio para tu website.
- Instalar Git.

Git es un controlador de versiones, por lo tanto, registra los cambios realizados sobre un archivo a lo largo del tiempo. Es un sistema muy utilizado en el desarrollo de software. 

GitHub es una plataforma de desarrollo para alojar proyectos utilizando Git. 

GitHub Pages es un servicio de GitHub para alojar páginas de una manera muy sencilla. 

Entonces, se utiliza GitHub Pages para poder visualizar el website en la web, GitHub para poder alojar el website y Git para poder realizar todos los cambios posibles en el proyecto.

## Nueva cuenta en GitHub

Para crear una nueva cuenta en GitHub tenés que dirigirte a este [link](https://github.com/join). Hay dos tipos de cuentas:

- *Free*: Cantidad de proyectos públicos y colaboradores ilimitados.
- *Enterprise*: Crear proyectos privados.

Esta cuenta te servirá para alojar tu proyecto en un repositorio Git y para acceder al servicio de GitHub Pages.

## Crear el repositorio para tu website

Para crear el repositorio de tu website debes hacer el paso 1 de la guía de este [link](https://pages.github.com/). Los demás pasos los veremos más adelante. Si necesitas una mejor explicación del paso 1, este [link](https://help.github.com/articles/create-a-repo/) prevé una guía de 6 pasos más completa.

Lo importante es que tu repositorio sea nombrado de esta forma *username*.github.io, donde *username* es el nombre de usuario en GitHub.

## Instalar Git

Para instalar git tenés que dirigirte a este [link](https://git-scm.com/downloads). Deberás elegir entre los diferentes OS disponibles:

- [Linux](https://git-scm.com/download/linux)  
- [Solaris](https://git-scm.com/download/linux)  
- [MAC OS X](https://git-scm.com/download/mac)  
- [Windows](https://git-scm.com/download/win)  

En los links anteriores se encuentra la guía necesaria del proceso de instalación de cada OS.

# Wintersmith

Wintersmith es un generador de sitios estáticos muy flexible. Para instalarlo es necesario:

- Instalar Node.js
- Instalar npm
- Instalar Wintersmith

Node.js es una plataforma para desarrollar software, Wintersmith está desarrollado en Node.js y podemos descargar e instalar el proyecto utilizando el gestor de paquetes npm.

## Instalar Node.js y npm

Node.js es un runtime environment en Javascript, multiplataforma y basado en motor V8 de Chrome. Npm es el gestor de paquetes de Node.js. 

Para instalar Node.js tenés que dirigirte a este [link](https://nodejs.org/en/download/) 

## Instalar Wintersmith

Para instalar Wintersmith es necesario abrir la consola o terminal y ejecutar:

```bash
$ npm install wintersmith -g
```

El comando anterior es muy simple *npm* indica que se va a utilizar npm, *install* indica que se va a instalar un paquete, *wintersmith* indica el nombre del paquete que se va a instalar usando npm y la opción *-g* indica que el paquete será instalado en un contexto global y podrá ser accedido desde cualquier directorio.

# Crear el website

Para crear nuestro proyecto es necesario ejecutar:

```bash
$ wintersmith new <path>
```

Donde *wintersmith* indica que se utilizará ese comando, *new* indica que será un nuevo proyecto y *path* es la ruta al directorio donde el proyecto va a ser generado.

Para probar tu proyecto debes ejecutar los siguientes comandos:

```bash
$ cd <path>
```

Donde *path* es la ruta a tu proyecto. Luego debes ejecutar el siguiente comando para construir el website:

```bash
$ wintersmith build
```

Con el siguiente comando vas a levantar tu website en un servidor local en tu PC:

```bash
$ wintersmith preview
```

Ahora debes abrir el browser que tengas instalado en tu PC y escribir la siguiente url [http://localhost:8080/](http://localhost:8080/).

Lo que vas a observar es un website de ejemplo con algunos artículos ya creados y definidos.

# Estructura del proyecto

En el directorio `build/` se encuentra el website generado y en `contents/articles/` se alojan los artículos que vayas a escribir en tu website.

# Crear un artículo

Debes crear un directorio dentro del directorio `contents/articles/` con el nombre de tu artículo sin espacios por ejemplo `my-first-post/`, por lo tanto vas a obtener la siguiente estructura `contents/my-first-post/`.

Dentro del directorio `contents/my-first-post/` debes crear un archivo llamado `index.md`. En este archivo se escribirá el contenido de tu artículo.

Lo primero que debes escribir en el archivo `index.md` es lo siguiente:

```markdown
 ---
 title: My first post
 date: 2015-10-08 12:10
 author: Román Riquelme
 template: article.jade
 ---
```

*title* es el título de tu artículo, en este caso *My first post*. *title* es la fecha de publicación de tu artículo, en este caso *2015-10-08 12:10*, *author* es el autor del artículo, en este caso *Román Riquelme* y *template* es la plantilla que se ve a utilizar, en este caso *article.jade*.

A partir de aquí deberás crear el contenido de tu artículo, podrás insertar imágenes, links, crear tablas, listas, utilizar jerarquías de títulos, etc. Para esto Wintersmith utiliza Markdown que es una forma simple de escribir código HTML para web. Para obtener una guía básica de como escribir Markdown tenés que dirigirte a este [link](https://help.github.com/articles/markdown-basics/).

# Publicar el website en GitHub Pages

En primer lugar deberás abrir tu consola o terminal y dirigirte al directorio `build/` de tu proyecto:

```bash
$ cd <path-to-project>/build
```

Luego es necesario inicializar un repositorio git dentro del directorio, debes ejecutar:

```bash
$ git init
```

A continuación debes agregar el repositorio remoto que fue creado en GitHub, debes ejecutar:

```bash
$ git remote add origin git@github.com:username/username.github.io.git
```

*username* es el nombre de usuario de la cuenta de github.

En este momento ya tenemos conectados el repositorio local con el repositorio alojado en GitHub. Por lo tanto, los dos comandos anteriores solo son necesarios de ejecutar la primera vez.

El siguiente paso es agregar nuestros archivos al staging area de Git. Ejecutar:

```bash
$ git add --all
```

A continuación se deberán agregar los archivos que están en staging area al project history. Ejecutar:

```bash
$ git commit -m "Comment about changes"
```

Debes incluir un comentario que indique que cambios vas a introducir al historial de git. El comentario es personal y es importante que sea preciso, de esta amanera nos ayuda a saber que es lo que hicimos.

Por último debes publicar los cambios en el repositorio remoto en GitHub. Debes ejecutar:

```bash
$ git push
```

Ahora tus cambios están en el repositorio remoto y el website ya está disponible para ser accedido en la web mediante la url de tu website, por ejemplo [http://username.github.io/](http://username.github.io/).

# Lista de pasos del tutorial

A continuación se encuentra la lista de tareas y procedimientos que debes seguir para tener disponible tu website en internet.

<ul class="checklist custom-ul">
	<li>
		<input type="checkbox"> 
		Crear una cuenta en GitHub
	</li>
	<li>
		<input type="checkbox"> 
		Crear un repositorio en GitHub llamado *username*.github.io
	</li>
	<li>
		<input type="checkbox"> 
		Instalar Git en tu PC
	</li>
	<li>
		<input type="checkbox"> 
		Instalar Node.js y npm en tu PC
	</li>
	<li>
		<input type="checkbox"> 
		Instalar Wintersmith en tu PC
	</li>
	<li>
		<input type="checkbox"> 
		Crear tu proyecto utilizando Wintersmith
	</li>
	<li>
		<input type="checkbox"> 
		Crear un artículo dentro del proyecto
	</li>
	<li>
		<input type="checkbox"> 
		Crear un repositorio Git dentro del directorio `build/`
	</li>
	<li>
		<input type="checkbox"> 
		Agregar el repositorio creado en GitHub al repositorio Git creado en tu PC
	</li>
	<li>
		<input type="checkbox"> 
		Hacer un commit de los cambios
	</li>
	<li>
		<input type="checkbox"> 
		Publicar los cambios en el repositorio de GitHub
	</li>
	<li>
		<input type="checkbox"> 
		Acceder al website mediante la URL del proyecto
	</li>
</ul>