# Pokepedia

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Definición del Producto](#2-definición-del-producto)
* [3. Proceso de Diseño](#3-proceso-de-diseño)
* [4. Uso de la Aplicación Web](#4-uso-de-la-aplicación-web)


***

## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin
precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

## 2. Definición del producto

**Pokepedia** es una _página web en desarrollo_ que permite visualizar un
**_conjunto de datos_** de acuerdo al nivel de conocimiento y/o experiencia que la usuaria tiene de **Pokemon Go**.

Consta de cinco vistas (_en construcción_):
1. Menú de cuatro niveles de experiencia
2. Datos del nivel [Conocer]
3. Datos del nivel [Capturar]
4. Datos del nivel [Entrenar]
5. Datos del nivel [Evolucionar]

Cabe mencionar que los datos proporcionados en cada nivel son producto de una investigación minuciosa no sólo del juego PokemonGo, sino también de la información que la usuaria necesita en cada etapa del juego.

En esta primera etapa del producto, podemos ver los 251 pokemones, mostrados según su _número de creación_ (de forma ascendente). En la parte superior, encontramos dos botones que nos permite **ordenar por _tipo de pokemon_ y por _número de creación_**, ademas de poder **filtrar por _tipo de pokemon_**. Al filtrar, nos muestra el número de pokemones filtrado respecto del total de pokemones.

* [Pokémon](src/data/pokemon/pokemon.json):
  En este set encontrarás una lista con los 251 Pokémon de la región de Kanto
  y Johto, junto con sus respectivas estadísticas usadas en el juego
  [Pokémon GO](http://pokemongolive.com).
  - [Investigación con jugadores de Pokémon Go](src/data/pokemon/README.md)

## 3. Proceso de Diseño

### **Investigación:**
Era necesario primero conocer el origen de Pokemon, su historia, su evolución hasta PokemonGo, pero sobre todo, el **qué** produce esa fascinación en cada unx de lxs usuarixs. Luego, entender **cuál** es el/los objetivo/s de cada usuarix en cada etapa del juego. Esto nos dio las referencias necesarias para construir el prototipo con los datos relevantes que se adecúe a cada usuarix y su necesidad en cada etapa.

**_Páginas referenciales:_**

- 
  <details><summary>Conocer Pokemon</summary><p>

  * [Historia Pokemon](https://es.wikipedia.org/wiki/Pok%C3%A9mon)
  * [Pokedex](https://www.pokemon.com/el/pokedex/)
  * [Guía 1 Pokemon](https://pokemaster.es/guias/guia-pokemon-go/elementos-de-la-interfaz/menu-pokeball/)
  * [Guía 2 Pokemon](https://pokemongolive.com/es/seasons/heritage/)
  * [Juego PokemonGo 2021](https://www.youtube.com/watch?v=VFgOGHPNawE)
  * [Juego PokemonGo 2022](https://www.youtube.com/watch?v=YSoR9IftXIs)
  * [Maestro Pokemon](https://www.youtube.com/watch?v=_gyjsvxpVEg)
  * [Evolución de Pokemons 1](https://www.youtube.com/watch?v=-Rtdj_-UzMY&t=160s)
  * [Evolución de Pokemons 2](https://www.youtube.com/watch?v=avq_0vLm6YE)

</p></details>

- 
  <details><summary>Conocer Usuarixs Pokemon</summary><p>

  * [Scrum](https://www.youtube.com/watch?v=1oMt5LuXID8)
  * [Historia de Usuarix](https://www.youtube.com/watch?v=dFJJyqzQGoo)
  * [Historias de Usuarix](https://www.youtube.com/watch?v=oJgfn460aWg)
  * [Ejemplos de Historia de Usuarix](https://www.atlassian.com/es/agile/project-management/user-stories)
  
</p></details>

### **Creación de Historias de Usuarix:**
_HU1: Nuevx usuarix necesita identificar a lxs pokemons antes de iniciar el juego PokemonGo_

  _**Yo como** Nuevo usuarix del juego PokemonGo
  **quiero** conocer a los pokemons y sus principales caracteristicas
  **para** identificarlos rapidamente_
  
  **Criterios de Aceptación:**
  - Ver 1 imagen Pokemon en vista movil, 2 imagenes en vista tablet y 3 en vista desktop
  - Ver, al pie de la imagen, el nombre y número de creación del pokemon
  - Ver, debajo del nombre, el/los tipo/s del pokemon
  - Al hacer click en la flecha ubicada en la parte central del lateral derecho de la imagen, se muestra al siguiente pokemon, y así sucesivamente.

_HU2: Nuevx usuarix necesita una descripción del pokemon para tener una idea general de las habilidades de dicho pokemon_

  _**Yo como** Nuevo usuarix del juego PokemonGo
  **quiero** ver una descripcion de cada pokemon
  **para** tener una idea general de sus caracteristicas y habilidades_
  
  **Criterios de Aceptación:**
  - Al hacer click en la imagen Pokemon esta mostrará la descripción del pokemon en la cara posterior, tras el efecto de "voltear tarjeta"
  - Al hacer click en la descripción, esta mostrará nuevamente la imagen del pokemon, tras el efecto de "voltear tarjeta"

_HU3: Nuevx usuarix necesita ordenar a lxs pokemons por número de creación para ver rápidamente a las últimas creaciones_

  _**Yo como** Nuevo usuarix del juego PokemonGo
  **quiero** poder ordenar a lxs pokemons por su número de creación
  **para** ver fácilmente las nuevas/últimas creaciones_
  
  **Criterios de Aceptación:**
  - Al hacer click en el botón "Número de creación" aparecerá un indicativo del ordenamiento actual (ascendente y descendente)
  - Al hacer click por primera vez en el botón "Número de creación" se mostrará el último pokemon creado y se ordenarán lxs pokemons de forma descendente (de mayor a menor)
  - Al hacer click por segunda vez se mostrará el primer pokemon creado (orden por defecto) y se ordenarán lxs pokemons de forma ascendente (de menor a mayor)

_HU4: Nuevx usuarix necesita filtrar a lxs pokemons por su tipo de habilidad para identificarlxs/agruparlxs mejor_

  _**Yo como** Nuevo usuarix del juego PokemonGo
  **quiero** poder filtrar a lxs pokemons por su tipo de habilidad
  **para** identificarlxs mejor y saber qué pokemons gozan de cierta habilidad_
  
  **Criterios de Aceptación:**
  - Al hacer click en el botón/icono "tipo" ubicado en el lateral izquierdo de la imagen Pokemon, se mostrará un listado con todos los tipos de habilidad
  - Al hacer click en una de las opciones del listado de tipos de habilidad, se mostrará solo lxs pokemons que gocen de esa habilidad
  - Lxs pokemons se mostrarán en el orden por defecto


_HU5: Nuevx usuarix necesita saber cuántos pokemons gozan de cierto tipo de habilidad_

  _**Yo como** Nuevo usuarix del juego PokemonGo
  **quiero** saber cuántos pokemons tienen cierto tipo de habilidad
  **para** tener una idea clara del número de pokemons por tipo_
  
  **Criterios de Aceptación:**
  - Al hacer click en una de las opciones del listado de tipos de habilidad, se mostrará el número de pokemons sobre el total

### **Prototipado:**

  **Bocetos Iniciales:**

  Las primeras ideas de la aplicación web estaban enfocadas en tener una interfaz y uso sencillos, donde se presentase una pagina con el contenido de inmediato sin exigir, a las personas visitantes del sitio, algún acto para mostrar la información más obvia, relevante, general y básica; como lo son en si los Pokémons y los datos más sobresalientes de estos. Como su nombre, número en el listado general, tipo y generación.
  Esta información expuesta, se presentarían en compañía de una serie de accionables y barras de de estructura traducidos en:
    "Header", donde estaría el título de la aplicación con una fuente similar a la original de "Pokémon" y un fondo con una imagen referenciando a los entornos del mundo de "Pokémon Go".
    "Nav", que contendria una serie de botones desplegables para acceder a mayor manipulación del sitio, como el filtrado, ordenado y calculo de los datos de la información expuesta inicialmente; al igual que una barra de busqueda.
    "Main", espacio en el que se encontraría la información base, o bien, los "Pokémons" presentados en contenedores individuales.
    "Footer", un sencillo contenedor para almacenar y exivir la información de las que hemos realizado dicha aplicación.
  
  En las imágenes acontinuación se muestra una referencia grafica aproximada:


  ![Alt text](src/img/Bocetos%20Baja%20Fidelidad%20-%20001.jpeg)



  ![Alt text](src/img/Bocetos%20Baja%20Fidelidad%20-%20002.jpeg)

  Despues de reflexionar un poco sobre las posibilidades y alcances del proyecto, al igual que, al compartir e intercambiar los puntos de vista adquiridos de las platicas e investigaciones en conjuto, decidimos realizar unas mejoras en la interfaz y ruta de exposición de la información proporcionada a las personas visitantes del sitio, tendría la misma lógica de la propuesta inicial, permitir manipular la forma en que se expone la información proporcionada de los "Pokémons", filtrar, ordenar, calcular; sólo que a medida que fuese avanzando la persona, a través de enlaces y páginas en el recorrido del sitio, se le brindaría una mayor cantidad y tipo de datos sobre los "Pokémons" asemejando un crecimiento de una persona entrenadora de estos. Cuya ruta abarcaría la logica de crecimiento de interes y profundidad al jugar "Pokémon Go" siendo esta "Ruta":

    1 Curiosx, presentando los datos básicos mencionados inicialmente, datos que permiten el irse familiarizando con los conceptos y lógica del mundo "Pokémon".
    2 Amateur - Capturadorxs, se agregarían los datos de las ubicaciones y rareza de los "Pokémons" pudiendo definir su orden de aparición, para poder capturarles con mayor facilidad.
    3 Entrenadorxs, los datos agregados serían los stats, ataques, resistencias y debilidades de los "Pokémons", donde se podrían filtrar. Y...
    4 Expertxs, incluyendo los datos de su o sus evoluciones, el periodo y necesidades de y para su eclosión y/o evolución, donde se podría hacer calculos que permitiecen agilizar y definir cual sería la ruta de evolución más óptima, o la inversión de dulces más redituable en progreso y evoluciones.

  En las imágenes acontinuación se muestra una referencia grafica aproximada:

  ![Alt text](src/img/Bocetos%20Planning%20-%20001%20Ruta%20Backlog.jpg)



  ![Alt text](src/img/Bocetos%20Planning%20-%20002%20Mostrar.jpg)



  ![Alt text](src/img/Bocetos%20Planning%20-%20003%20Ordenar.jpg)



  ![Alt text](src/img/Bocetos%20Planning%20-%20004%20Filtrar.jpg)

  Finalmente ideamos una combinación de los metodos y estéticas de las opciones iniciaales. Tendría la estructura de una sola página con un botón que permitiría a la persona visitante evolucionar el formato e información que proporcionaba la aplicación, al igual que sus funciones...

  En la imágene acontinuación se muestra una referencia grafica aproximada:

  ![Alt text](src/img/Prototipo%20Baja.jpg)

Por una falta de conocimiento-experiencia, al igual que conflictos en el entorno individual de ambas desarrolladoras, nos vimos forzadas a realizar una aplicación sencilla y practica de la propuesta inicial, regresando a una funcinalidad, información y manipulación del sitio, sencillos... Resultando en una aplicación reconfortante y complaciente, que incentiva a, y en ambas, el intimo deseo y hambre de mejorar las habilidades técnicas y de gestión para generar en un futuro cercano una evolución y actualización de la aplicación, siendo una acojedora representación del crecimiento como desarrolladoras y programadoras...

En las imágenes acontinuación se muestra una referencia grafica aproximada:

  ![Alt text](src/img/Muestra%20Final%20-%20Inicio.jpg)

  ![Alt text](src/img/Muestra%20Final%20-%20Ordenado%20Tipo.jpg)

  ![Alt text](src/img/Muestra%20Final%20-%20Ordenado%20N%C3%BAmero.jpg)

  ![Alt text](src/img/Muestra%20Final%20-%20Filtrado.jpg)



### **Interfaz de Usuaria:**

Al entrar a la página lo primero que observamos es el título de esta, seguido de una serie de botones debajo de este título.

Seguido de estos botones hacia abajo, nos encontramos con un espacio más amplio en el cual se encuentra un contador vacío en la parte superior izquierda, seguido, en la parte central de este espacio por una serie de tarjetas acomodadas hacia abajo subsecuentemente en las que se encuentran expuestos los Pokemons con su imagen y los datos de estos como son el nombre, su número, su tipo y su generación; tanto el nombre de la generación como el número de esta.
En la parte inferior observamos la leyenda de créditos con los nombres de las cuentas de GitHub de las desarrolladoras del sitio.

El entorno sencillo de características prácticas contiene unos colores fríos y suaves qué se combinan con un degradado dónde son utilizados en tonos grisáceos blancos y azules con los cuales se genera un entorno amigable y sencillo

La aplicación tiene una serie de botones que, al igual que otros espacios contenedores tanto de texto como de imágenes, están redondeados con ciertas acentuaciones al redondear con un mayor o menor radio en algunas secciones de los bordes para dar una intención aproximada de realidad junto con los colores y su contraste.

Cómo división visual a través de los colores, se encuentran tanto la parte superior y la parte inferior, dónde está la información menos alusiva a los "Pokémons", cómo lo es el título de la página en la parte superior y en la inferior el contacto de cada una de las desarrolladoras a manera de créditos.


## 4. Uso de la Aplicación Web

Al entrar a la página lo primero que se nos muestra es un título, una barra con botones, una serie de tarjetas dónde están expuestos los Pokemones. Y al final en un pie de página dónde se expresan los créditos

En la barra que contiene los botones, se encuentran tres, el primero con la leyenda tipo, al accionarlo nos permite ordenar esta serie de tarjetas dónde están expuestos los Pokemons, ordenarlos por el tipo de Pokémon que son, en orden alfabético ya sea de la A - Z o de la Z - A.

 El botón siguiente al lado derecho del botón tipo, tiene la leyenda número, el cual al accionarlo nos permite ordenar esta serie de tarjetas donde se exponen los Pokemons de manera numérica ya sea ascendente o descendente.

Al lado de este botón se encuentra el botón para el filtrado el cual nos aparece en un inicio con la leyenda filtrar y una flecha desplegable, la cual, al accionarla, nos permite ver una lista con los tipos de Pokémons que existen y al seleccionar uno de estos se nos muestra la serie de tarjetas que almacenan los Pokemons que tienen el tipo de Pokémon que hemos seleccionado en ese botón con despliegue.

A su vez, al generar ese filtrado en el contador nos aparece el número de Pokémons del tipo que hemos seleccionado y cuántos son en comparación con el número de Pokemons en total que existen actualmente almacenados en esa página.



