const Product = require("../models/product.model");
const sanitize = require("../validations/validation");
const validationTypes = require("../validations/validation.types");


exports.create = async (req, res) => {
    try {
        const reqFiles = [];
        const url = req.protocol + '://' + req.get('host')
        for (var i = 0; i < req.files.length; i++) {
            reqFiles.push(url + '/public/' + req.files[i].filename)
        }
        req.body.images = reqFiles
        const fields = sanitize(validationTypes.CREATE_PRODUCT, req.body)
        let result = await Product.create(fields)
        let msg = "THE PRODUCT CREATED SUCCESSFULLY"
        res.send({msg,result})
    } catch (error) {

        res.status(422).send(error.message)
    }
}

exports.get = async (req, res) => {
    try {
        let products = await Product.getAll()
        if (products.length > 0) {
            let productsParse = products.map(product => {
                let imagesArr = JSON.parse(product.images)
                let imageNew = imagesArr.map(img => {
                    return img.replace(
                      "localhost",
                      "ec2-54-90-79-222.compute-1.amazonaws.com"
                    );
                })
                product.images = imageNew;
                return product
            })
            res.status(200).send(productsParse)

        } else {
            res.status(422).send("no products exist")

        }
    } catch (error) {
        res.status(422).send("no products exist")
    }
}
exports.delete = async (req, res) => {
    try {
        let products = await Product.delete(req.body.id)
        if (products.length > 0) {
            let result = products.map(product => {
                let imagesArr = JSON.parse(product.images)
                product.images = imagesArr
                return product
            })
            res.status(200).send( {msg : "category has been delete" ,result})

        } else {
            res.status(422).send("no products exist")

        }
    } catch (error) {
        res.status(422).send("no products exist")
    }
}