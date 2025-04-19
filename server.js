import express from "express";
import cors from "cors";
import nodemailer from "nodemailer"

const app = express();
const PORT = 5000;

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))


app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "nadeemismail2580@gmail.com",
            pass: "xrky akeq eqsw fodt",
        },
    });

    console.log(transporter, "trasporter")
    const mailOptions = {
        from: email,
        to: "nadeemismail2580@gmail.com",
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        const mail = await transporter.sendMail(mailOptions);
        console.log(mail, "mail")
        res.json({
            "message": "Email Sent Successfully",
            status: true,
            data: mail
        })
    } catch (error) {
        res.json({
            "message": error.message || "Something went wrong",
            status: false,
            data: null
        })
    }
});


app.listen(PORT, () => console.log(`Server running on http//:localhost:${PORT}`))

