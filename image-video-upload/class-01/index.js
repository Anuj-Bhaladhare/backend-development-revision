const express = require("express");
const app = express();


require("dotenv").config();
const PORT = process.env.PORT || 3000


app.use(express.json());
const fileUpload = require("express-fileupload");
app.use(fileUpload(
    {
        useTempFiles : true,
        tempFileDir : '/tmp/'
    }
));


const dbConnect = require("./config/database");
dbConnect.connect();


const cloudanerry = require("./config/cloudnarry");
cloudanerry.cloudinaryConnect();


const upload = require("./routers/FileUpload");
app.use("/api/v1/upload", upload);


app.listen(PORT, (req, res) => {
    console.log("server started at port number " + PORT);
})