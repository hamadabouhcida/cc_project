# Hito 2
En este hito vamos a hacer los test unitarios o las pruebas unitarias de cada funcionalidad en el proyect y ver el resultados, asi puedemos saber la calidad de nuestro trabajo. El trabajo debe ser preciso y elaborado para obtener los resultados deseados, al tiempo que debemos corregir algunos errores y acotar las carencias que podamos necesitar en nuestro proyecto (como instalaciónes, cambios en el código, modificaciónes… etc).
En mi caso, trabajo en *JavaScript* para desarrollar el proyecto, lo que requiere muchas configuraciones e instalaciones. Y lo veo como un lenguaje adecuado para desarrollar páginas y aplicaciones web. Para la ejecución del código, es necesario tener instalado *node.js* y *JavaScript*. 
Como primer paso damos la elección y configuración del gestor de tareas.  
### elección y configuración del gestor de tareas:
Elegí **nmp** como administrador de tareas porque es el registro de software más grande que los desarrolladores de código abierto de todo el mundo usan para compartir y tomar prestados *packages*. Por ejemplo, puede configurar organizaciones para administrar el acceso a *packages* públicos o privados. Para implementar e instalar packages hacia y desde el registro público de *npm* o el registro privado de *npm*, debemos instalar *Node.js* y la interfaz de línea de comandos de *npm* mediante el administrador de versiones de *Node* o el *Node installer*.  
para descargar la última versión de npm, en la línea de comando, ejecute el siguiente comando:  

```
npm install -g npm
```
Para ver si ya tiene Node.js y npm instalados y verifique la versión instalada, ejecute los siguientes comandos:  

```
node -v
npm -v
```
Los administradores de versiones de nodos le permiten instalar y cambiar entre múltiples versiones de Node.js y npm en su sistema para que pueda probar sus aplicaciones en múltiples versiones de npm para asegurarse de que funcionen para los usuarios en diferentes versiones.  

### Elección y uso de la biblioteca de aserciones:  
En la programación de JavaScript, hay muchas bibliotecas con diferentes características, como: Jest, jsUnit, Cypress, AVA, Puppeteer, Jasmine...  
Entre las muchas bibliotecas, elegí Jest porque es un marco de prueba de JavaScript encantador con un enfoque en la simplicidad. ¡Funciona con proyectos que usan: Babel, TypeScript, Node, React, Angular, Vue y más!. Al garantizar que sus pruebas tengan un estado global único, Jest puede ejecutar pruebas en paralelo de manera confiable. Para agilizar las cosas, Jest ejecuta primero las pruebas fallidas anteriormente y reorganiza las ejecuciones en función de la duración de los archivos de prueba. Y también puede recopilar información de cobertura de código de proyectos completos, incluidos archivos no probados.  
Para instalar Jest usando mi administrador de Package (npm):  

```
npm install --save-dev jest
```
Después de la instalación, ejecutamos una prueba en una parte del código. 

**Test realizados:**  

Comprobamos la presencia de un usuario, así como el proceso de guardar o escanear un libro, el inicio de sesión del usuario… donde obtenemos los resultados en la imagen de abajo, lo que demuestra que vamos por el camino correcto.
![](https://github.com/hamadabouhcida/cc_project/blob/main/docs/imgs/test.png)  


### Elección y uso del marco de pruebas:  

### Avance en El código: 




