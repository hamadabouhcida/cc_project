# Hito 4  
---  
Empleamos ambas acciones de github (*Github Actions*) para automatizar las pruebas con el fin de hacer la transición a una integración continua (CI).
Puede automatizar su flujo de trabajo de compilación, prueba e implementación mediante la tecnología de integración continua y entrega continua (CI/CD) conocida como *GitHub Actions*. Puede diseñar flujos de trabajo que implementen solicitudes de extracción combinadas en producción o crear y probar cada solicitud de extracción antes de agregarla a su repositorio.  
### Integración continua:  
Como herramienta de integración continua, he creado un archivo [CI.yml](https://github.com/hamadabouhcida/cc_project/blob/main/.github/workflows/CI.yml)  
Para crear un archivo ci.yml, deberá usar una sintaxis YAML. Este archivo se usa para definir una canalización de tareas que ejecutará una herramienta de integración continua (CI), como GitHub Actions o Travis CI.  
Este es un ejemplo de un archivo ci.yml simple que ejecuta pruebas en un proyecto:  

```
name: CI

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Run tests
      run: |
        set -e
        make test
```  
Este archivo define una tubería con un solo trabajo llamado "compilación" que se ejecuta en la última versión de Ubuntu. El trabajo tiene dos pasos: uno para verificar el código del repositorio y otro para ejecutar pruebas usando el comando make test.  
###  Integración continua adicional:  
Como herramienta de integración continua, he creado un archivo CI.yml y añdir un archivo yml en la carpeta .circleci que es generado automáticamente por la plataforma.   

![](https://github.com/hamadabouhcida/cc_project/blob/main/docs/imgs/CI.PNG)  
### uso correcto del gestor de tareas:  
Para utilizar correctamente un gestor de tareas en un proyecto de JavaScript, es importante seguir algunas buenas prácticas:
Utilice una metodología de desarrollo ágil, como Scrum, para planificar y gestionar tareas y proyectos.
Utilicé una herramienta de automatización de pruebas *Jest* para asegurar que su código funcione correctamente antes de lanzarlo.
El campo de nombre es el nombre de la canalización, el campo on son los activadores que inician esta canalización, el campo de trabajos es la lista de trabajos que se ejecutarán en la canalización, cada trabajo tiene un campo de pasos que es una lista de pasos que se ejecutarán en ese trabajo.  
```
Yarn:
yarn add --dev jest
-----------------------
NPM:
npm install --save-dev jest
```


