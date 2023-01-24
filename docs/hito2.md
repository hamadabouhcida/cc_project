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
En la programación de JavaScript, hay muchas bibliotecas con diferentes características, como: Jest, jsUnit, Express, Cypress, AVA, Puppeteer, Jasmine...
Entre las muchas bibliotecas, elegí **Express** porque es un marco de prueba de JavaScript encantador con un enfoque en la simplicidad. Muchos marcos populares se basan en Express. es una aplicación del lado del servidor creada con el marco Express.js, que se ejecuta sobre Node.js. En una aplicación de pila MERN (MongoDB, Express.js, React.js, Node.js), la aplicación Express.js es responsable del manejo de la lógica del lado del servidor, como el manejo de solicitudes HTTP, la conexión a una base de datos MongoDB y el servidor de procesamiento. -vistas laterales.

Para instalar Jest usando mi administrador de Package (npm):  
```
$ npm install express --save  
```

### Test realizados:    

Comprobamos la presencia de un usuario, así como el proceso de guardar o escanear un libro, el inicio de sesión del usuario… donde obtenemos los resultados en la imagen de abajo, lo que demuestra que vamos por el camino correcto.
![](https://github.com/hamadabouhcida/cc_project/blob/main/docs/imgs/test.png)    

### Avance en El código:  
Avancé un poco en escribir el código, programando la parte dedicada a  [crear una cuenta](https://github.com/hamadabouhcida/cc_project/milestone/1). Y también a nivel de [gestión](https://github.com/hamadabouhcida/cc_project/milestone/4).  
[Aquí](https://github.com/hamadabouhcida/cc_project/tree/main/src/api/routes) tengo avance en el código que hace las operaciones Crud en las clases.

![](https://github.com/hamadabouhcida/cc_project/blob/main/docs/imgs/creat_user.PNG)   





