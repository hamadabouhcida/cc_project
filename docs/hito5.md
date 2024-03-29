# Hito5 
---  
### Justificación técnica del framework elegido para el microservicio: 
Elegí Express por varias razones, menciono algunas de ellas:  
Express es un marco web popular para Node.js que se usa comúnmente en proyectos MERN (MongoDB, Express.js, React, Node.js) debido a su simplicidad y flexibilidad.
Express proporciona una forma simple y liviana de manejar solicitudes y respuestas HTTP. Ofrece una amplia gama de funciones de middleware que se pueden usar para realizar diversas tareas, como analizar cuerpos de solicitud, manejar cookies y entregar archivos estáticos.
Express le permite definir fácilmente el enrutamiento, que asigna direcciones URL a controladores específicos. Esto facilita el manejo de diferentes tipos de solicitudes y responde con los datos apropiados. Express proporciona una forma consistente de manejar errores y manejarlos de manera centralizada, lo que facilita el mantenimiento y la depuración de la aplicación.
Express es ampliamente compatible y tiene una gran comunidad, lo que significa que hay muchos recursos y tutoriales disponibles para aprender y solucionar problemas.
Express ofrece una amplia gama de middlewares y complementos que se pueden usar para ampliar la funcionalidad del marco, como la autenticación, la validación y el registro.
Express es muy extensible y personalizable, lo que permite a los desarrolladores estructurar su código de la manera que mejor se adapte a sus necesidades.
Express también es ampliamente adoptado por la industria, lo que significa que es fácil encontrar desarrolladores con experiencia trabajando con Express.
Express es adecuado para crear aplicaciones web simples y complejas, y tiene un enfoque minimalista que facilita su comprensión y el trabajo.
En general, Express es una opción popular para el desarrollo web en Node.js debido a su simplicidad, flexibilidad y amplia gama de funciones, lo que la convierte en una opción ideal para crear una aplicación MERN.  
# Diseño en general del API:  
Mi proyecto contiene muchas operaciones *Crud* que el usuario realiza en los libros dentro de la [biblioteca](https://github.com/hamadabouhcida/cc_project/tree/main/src/api/routes). Algunos de estos son idénticos a lo que se programó en este proyecto.  
[HU1: Como usuario quiero identificarme para acceder a los libros](https://github.com/hamadabouhcida/cc_project/issues/4)  
~~~
//REGISTER
router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  const newUser = new user({
      user_id : req.body.user_id,
      name : req.body.name,
      dob : req.body.dob,
      gender : req.body.gender,
      email_address : req.body.email_address,
      address : req.body.address,
      phone_number : req.body.phone_number,  
      username : req.body.username,
      password : hashedPass,
      profile_pic : req.body.profile_pic,
~~~  
  [HU2: Como usuario puedo buscar los libros](https://github.com/hamadabouhcida/cc_project/issues/5)  
  ~~~  
      //GET BOOK
router.get("/:id", async (req, res) => {
  try {
    const books = await book.findOne({ bookID: req.params.id });
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});  
~~~  
### Plataforma API de Postman:  
![](https://github.com/hamadabouhcida/cc_project/blob/main/docs/imgs/postman.PNG)  
![](https://github.com/hamadabouhcida/cc_project/blob/main/docs/imgs/mongoconected.PNG)  
![](https://github.com/hamadabouhcida/cc_project/blob/main/docs/imgs/result%20db.PNG)  

      
