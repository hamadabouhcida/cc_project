# hito6:  
---  
### Composición cluster:  
Creé un archivo [Docker-Compose.yml](https://github.com/hamadabouhcida/cc_project/blob/main/docker-compose.yml) como se muestra a continuación:  
~~~  
version: '3'
services:
  db:
    image: mongo:latest
    volumes:
      - /data/db
    ports:
     - 27017:27017

  backend:
    image: node:latest
    # build: 
    #   context: ./app
    ports:
      - 3000:3000
    volumes:
      - ./app:/app
    entrypoint: ["node", "app/server.js"]
    environment:
      - NODE_ENV=container
    depends_on:
      - db  
  ~~~  
Hasta ahora, hemos definido dos servicios, uno de los cuales contiene la lógica comercial utilizada en /app y el otro contiene una base de datos con tecnología MongoDB.
