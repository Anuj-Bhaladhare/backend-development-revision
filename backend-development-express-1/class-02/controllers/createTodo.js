const todoSchema = require("../modals/todoSchema");

exports.createTodo = async(req, res) => {
    try{
        // data fetch from request body
        const { title, discription } = req.body;
        
        // create new todo object and insert in mongo DB
        const responce = await todoSchema.create({ title, discription });

        // send successfull responce
        res.status(200).json({
            success: true,
            data: responce, 
            massage: "todo responce created successfully",
        })
    }
    catch(error){
        console.log(error);
        console.error(error);
        res.status(500).json({
            success: false,
            data: "internal servre error",
            massage: error.massage,
        })
    }
}

