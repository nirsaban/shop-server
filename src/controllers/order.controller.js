

const Order = require("../models/order.model");
const User = require("../models/User.model");
const sanitize = require("../validations/validation");
const validationTypes = require("../validations/validation.types");
var smtpTransport = require('nodemailer-smtp-transport');
var EmailTemplate = require('email-templates').EmailTemplate;
const EmailService = require("../services/email.services");
const Package = require("../models/package.model");

exports.create_order = async (req, res) => {
    try {
        const fields = sanitize(validationTypes.CREATE_ORDER, req.body)
        let result = await Order.createOrder(fields)
        if (result.affectedRows > 0) {
            const cartItems = await orderCartItems(fields.cartItems)
            fields.cartItems = cartItems
            let emailProcess = (await EmailService.init({fields,userId:fields.userId})).sendBid()
            
            // let userToSend = await (new User(fields.userId).getUser())
            // let userSender = await (new User(fields.userId).getUserAdmin())
            // if (userToSend.email) {
            //      sendBid(fields, userSender, userToSend)
            // }
        }
        let msg = "הזמנתך נרשמה בהצלחה , בדקות הקרובות ישלח אליך מייל עם כל פרטי ההזמנה."
        res.send({msg})
    } catch (error) {
        res.status(422).send(error.message)
    }
}

const orderCartItems  = async cartItems => {
    let arr = JSON.parse(cartItems);
    if(arr.packages.length > 0){
        arr["packages"][0] = (await Package.getOne(arr.packages[0].id))
    }
    return arr
}

const sendBid = (fields, userSender, userToSend) => {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'nirsa11@gmail.com',
            pass: 'parnasa2021'
        }
    });
    //create the path of email template folder 
    var templateDir = path.join(__dirname, "../../", 'templates', 'testMailTemplate')

    var testMailTemplate = new EmailTemplate(templateDir)

    var locals = {
        userName: "XYZ" //dynamic data for bind into the template
    };


    testMailTemplate.render(locals, function (err, temp) {
        if (err) {
            console.log("error", err);
        } else {
            transporter.sendMail({
                from: userSender.email,
                to: userToSend.email,
                subject: "test mail",
                text: temp.text,
                html: temp.html
            }, function (error, info) {
                if (error) {
                    console.log(error);
                }
                console.log('Message sent: ' + info.response);
            })
        }
    })

    // var mailOptions = {
    //     from: userSender.email,
    //     to: userToSend.email,
    //     subject: ' להלן הצעת מחיר  ',
    //     html: htmlBuilder(fields, userSender, userToSend)
    // };

    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //     }
    // });
}
exports.get = async (req, res) => {

    // try {
    //     let result = await Package.getAll()
    //     res.status(200).send(result)
    // } catch (error) {
    //     res.status(422).send(error.message)
    // }
}

