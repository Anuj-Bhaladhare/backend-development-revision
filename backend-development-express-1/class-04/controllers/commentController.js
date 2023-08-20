// import modal
const Post = require("../modals/postModal");
const Comment = require("../modals/commentModal");


// define business logic
exports.createComment = async(req, res) => {
    try{
        //  fetch data from req ki body
        const { user, post, body } = req.body;

        // create a commment object
        const comment = new Comment({
            post, user, body
        });

        // save new comment into database
        const saveComment = await comment.save();

        //find the post by ID, add the new commnet to its comments array
        const updatePost = await Post.findByIdAndUpdate(post, {$push: {comments: saveComment._id} }, {new: true} )
                           .populate("comments") //populate the comments array with comment documents
                           .exec();

        res.json({
            post: updatedpost,
        })
 
    }
    catch(error){
        return res.status(500).json({
            error: "Error While Creating comment" ,
        });
    }
}