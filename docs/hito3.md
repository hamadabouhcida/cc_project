# Hito 3  🐋  
---  
### Elección correcta y justificada del contenedor base:  
En el proceso de elegir el contenedor a utilizar, nos encontramos con que tenemos muchas opciones como *Node*, *Node-slim*, *Node-alpine*.  
Y depende del uso que queramos hacer, así como del tamaño, tiempo de ejecución, módulos a incluir y utilizar, etc. Así que seleccioné diferentes tipos de imágenes para ver cuál encajaría con nuestro propósito.
Después de hacer los experimentos encontramos que el contenedor que menos espacio tiene es **Node-alpine** , he encontrado que es el más eficiente en tiempo ya que tiene menos dependencias para instalar.  
### Creación del dockerfile:  
La imagen node:latest de Docker Hub sirve como base para [Dockerfile](https://github.com/hamadabouhcida/cc_project/blob/main/Dockerfile). Todas las dependencias de nodos especificadas en el archivo package.json deben instalarse correctamente en la carpeta, ya que se espera que el contenedor ejecute todas las pruebas descritas en el directorio de prueba.
Un archivo dockerignore se usa para detener la copia de la carpeta de módulos de nodo para que no se transfiera una instalación incorrecta desde el sistema host.
El comando WORKDIR /app en Dockerfile designa el directorio de trabajo, que es donde se ejecutarán todos los comandos posteriores.  
Por lo tanto, COPY./app transfiere todas las carpetas de la carpeta /app del repositorio a la carpeta /app del contenedor.
Luego, los paquetes npm necesarios se instalan ejecutando RUN npm install. Teniendo en cuenta que ya copiamos todos los archivos de la carpeta /app al paquete. El contenedor también contiene json, que proporciona la base para la instalación de npm.
El comando que se ejecuta una vez que se inicia un contenedor basado en la imagen proporcionada por Dockerfile está definido por CMD ["npm", "test"].  
### Publicación de imagen en DockerHub:  
![](https://github.com/hamadabouhcida/cc_project/blob/main/docs/imgs/creatrepo.PNG)  
![](https://github.com/hamadabouhcida/cc_project/blob/main/docs/imgs/dockrhub.PNG) 

