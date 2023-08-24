const File = require("../modals/File");
const cloudinary = require("cloudinary").v2;


//localfileupload -> handler function

exports.localFileUpload = async (req, res) => {
    try {

        //fetch filefrom request
        const file = req.files.file;
        console.log("FILE AAGYI JEE -> ",file);


        //create path where file need to be stored on server
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
        console.log("PATH-> ", path)

        //add path to the move fucntion
        file.mv(path , (err) => {
            console.log(err);
        });

        //create a successful response
        res.json({
            success:true,
            message:'Local File Uploaded Successfully',
        });

    }
    catch(error) {
        console.log("Not able to upload the file on server")
        console.log(error);
    }
}


// ------------------------------------------------------------------
// const supportedFileType = (type, supportedFile) => {
//     return supportedFile.includes(type);
// }

// const cloudinaryFileUpload = async (file, folder, quality) => {
//     const options = { folder }
//     console.log("temp file path", file.tempFilePath);
    
//     if(quality){
//         options.quality = quality;
//     }
    
//     options.resource_type = "auto";
//     return await cloudinary.uploader.upload(file.tempFilePath, options);
// }

const supportedFileType = ["jpg", "jpeg", "png"];

const cloudinaryFileUpload = async (file, folder) => {
    const options = { folder, resource_type: "auto" };
    return await cloudinary.uploader.upload(file.tempFilePath, options);
};


exports.imageUpload = async (req, res) => {
    try {
        // Fetch data from request body
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;
        console.log(file);

        const fileType = file.name.split(".")[1].toLowerCase();

        if (!supportedFileType.includes(fileType)) {
            return res.status(400).json({
                success: false,
                message: "File format is not supported",
            });
        }

        // If file is supported, upload the file to Cloudinary
        console.log("Uploading to Cloudinary");
        const response = await cloudinaryFileUpload(file, "sample-trying");
        console.log(response);

        // Save entry to Database (assuming you have a model named 'file')
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url,
        });

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: 'Image Successfully Uploaded',
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};


const videoFormat = ["mp4", "mkv", "mov"];
// ------------------------------------------------------------------------------
// Video Upload Handaler
exports.videoUpload = async(req, res) => {
    try{
        // fetch data
        const {name, tags, email} = req.body;

        const file = req.files.videoFile;
        const videoType = file.name.split(".")[1].toLowerCase();
        const videoFormatSupported = videoFormat.includes(videoType);

        if(!videoFormatSupported){
            return res.status(400).json({
                success: false,
                massage: "video format is not supported",
            })
        }

        // Uploading to cloudannerry
        console.log("Uploading to cloudannerry");
        const videoResponce = await cloudinaryFileUpload(file, "sample-trying");
        console.log(videoResponce);

        // entry create to database
        const videoFetch = await File.create({
            name,
            tags,
            videoUrl: videoResponce.secure_url,
            email,
        })
         res.json({
            success: true,
            videoUrl: videoResponce.secure_url,
            massage: "video uploaded successfully",
         })
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}

exports.fileQualityReduce = async(req, res) => {
    try{
         
    }
    catch(error){

    }
}