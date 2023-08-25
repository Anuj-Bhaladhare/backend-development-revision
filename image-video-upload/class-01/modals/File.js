const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

const fileSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        imageUrl:{
            type: String,
        },
        tags:{
            type: String,
        },
        email:{
            type: String,
        },
    }
)

// nodemailer functionality
fileSchema.post("save", async function(doc) {
    try {
        console.log("DOC => ", doc);

        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        let info = await transporter.sendMail({ // Added "await" here
            from: 'Your Name <your.anujbhaladhare@gmail.com>', // Change sender's name and email
            to: doc.email,
            subject: 'Your File is Uploaded',
            html: `<h1>Hello Sir</h1><p>Your file data uploaded successfully</p><img src="${doc.imageUrl}" height="200px">`,
        });

        console.log("Message sent: %s", info.messageId); // Accessing messageId
    } catch (error) {
        console.error(error);
    }
});



module.exports = mongoose.model("File", fileSchema);