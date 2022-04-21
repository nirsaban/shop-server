const User = require("../models/User.model");
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var EmailTemplate = require('email-templates').EmailTemplate;
var path = require("path");
const fs = require('fs');
const ejs = require('ejs');
const pdf = require('html-pdf');
const { v4: uuidv4 } = require('uuid');
class EmailService {
     static userToSend  =  {}
     static userSender;
    static async init({fields,userId}){
        this.userToSend = await (new User(userId).getUser())
        this.emailSender = process.env.email_sender
        this.passwordSender = process.env.password_sender
        this.data = fields
        this.unique = uuidv4()
        return this
    }  
    static  gethtmltopdf(){
       
        try {
            const filePathName = path.resolve(__dirname, '../../templates/testMailTemplate/html.ejs');
            const htmlString = fs.readFileSync(filePathName).toString();
            let options = {
                "height": "11.25in",
                "width": "8.5in",
                "header": {
                    "height": "20mm"
                },
                "footer": {
                    "height": "20mm",
                },
            };
            const data = this.data
            const ejsData = ejs.render(htmlString,{data});
            pdf.create(ejsData, options).toFile(path.join(__dirname,`../../bids/bid_${data.userId}_${this.unique}.pdf`),(err, response) => {
                if (err) return console.log(err);
                return response;
            });
        } catch (err) {
            console.log("Error processing request: " + err);
        }
        console.log("here")
    
    }
   static  sendBid(){
    this.gethtmltopdf();
     console.log(this.emailSender)
     console.log(this.passwordSender)
    var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: this.emailSender,
                pass: this.passwordSender
            }
        });
        //create the path of email template folder 
        var templateDir = path.join(__dirname, "../../", 'templates', 'testMailTemplate')
        var testMailTemplate = new EmailTemplate(templateDir)
        const {emailSender,data} = this
        const userToSend = this.userToSend.email
        var locals = {
            data : data//dynamic data for bind into the template
        };
        var unique = this.unique;
        console.log(unique)
        testMailTemplate.render(locals, function (err, temp) {
            if (err) {
                console.log("error", err);
                console.log(unique)
            } else {
                var pathFile = `../../bids/bid_${data.userId}_${unique}.pdf`;
                transporter.sendMail({
                    from: emailSender,
                    to: userToSend,
                    subject: `הצעת מחיר לחינה/השכרת ציוד לתאריך ${data.date}`,
                    text: temp.text,
                    attachments: [
                    {   // file on disk as an attachment
                        filename: `bid_${data.date}.pdf`,
                        path: path.join(__dirname,`${pathFile}`) // stream this file
                    },
                ]                    
            }, function (error, info) {
                if (error) {
                    console.log(error);
                }
                console.log(error,info)
            })
            }
    
        })
    }

    
}

module.exports = EmailService