// npm test
const article = require('./article');
const book = require('./book');
const User = require('./User');

test ("/add", async (req, res) => {
    const username = req.body.username;
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;

    const articleVal = {
               
        title,
        description,
      
        
}

  
	try {
        const { error } = validateArticle(articleVal);
		if (error)
			return res.status(400).send({ message: error.details[0].message });
        if(!image)
             return res.status(400).send({ message: "Image is not allowed to be empty" });


        const newArticle = new Article({
               
                title,
                description,
                userid:"1",
                status:"Active",
                image:image.base64
        })

		newArticle.save()
		
		res
		.status(201)
		.send({ message: "Added Successfull" });
	} catch (error) {
		
		res.status(500).send({ message: "Server Error" });
	}
});

