exports.category_nameSchema = {
    "id": "/category_name",
    "type": "string",
    "minLength": 3
}
exports.full_nameSchema = {
    "id": "/full_name",
    "type": "string",
    "minLength": 3
}
exports.emailSchema = {
    "id": "/email",
    "type": "string",
    "format": "email"
}
exports.passwordSchema = {
    "id": "/password",
    "type": "string",
    "minLength": 6
}
exports.category_idSchema = {
    "id": "/category_id",
    "type": "string",
    "minLength": 1
}
exports.product_nameSchema = {
    "id": "/product_name",
    "type": "string",
    "minLength": 3
}
exports.imagesSchema = {
    "id": "/images",
    "type": "array",
    
}
exports.videosSchema = {
    "id": "/videos",
    "type": "array",
    "minLength": 1
}
exports.descriptionSchema = {
    "id": "/description",
    "type": "string",
}
exports.priceSchema = {
    "id": "/price",
    "type": "string",
}
exports.package_nameSchema = {
    "id": "/package_name",
    "type": "string",
    "minLength":3
}
exports.productsSchema = {
    "id": "/products",
    "type": "array",
    
}
exports.rateSchema = {
    "id": "/rate",
    "type": "string",
    "minLength":1
}
exports.userIdSchema = {
    "id": "/userId",
    "type": "number",
}
exports.cartItemsSchema = {
    "id": "/cartItems",
    "type": "object",
}
exports.totalSchema = {
    "id": "/total",
    "type": "number",
}
exports.dateSchema = {
    "id": "/date",
    "format": "date",
}
exports.more_dataSchema = {
    "id": "/more_data",
    "type": "string",
}
exports.addressSchema = {
    "id": "/address",
    "type": "string",
}
exports.phoneSchema = {
    "id": "/phone",
    "type": "string",
    "pattern": /^0\d([\d]{0,1})([-]{0,1})\d{7}$/
}
exports.subjectSchema = {
    "id": "/subject",
    "type": "string",
    "min": 2,
}
exports.nameSchema = {
    "id": "/name",
    "type": "string",
    "min": 2,
}
exports.messageSchema = {
    "id": "/message",
    "type": "string",
    "min": 2,
}
exports.contentSchema = {
    "id": "/content",
    "type": "string",
    "min": 8,
}
exports.linksSchema = {
  id: "/links",
  type: "object",
};