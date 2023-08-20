// import mongoose
const mongoose = require("mongoose");


// define route
const likeSchema = new mongoose.Schema(
    {
        post:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
        user: {
            type:{
                type: String,
                required: true,
            }
        }
    }
)


// export route
module.exports = mongoose.model("Like", likeSchema);