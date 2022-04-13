const validationTypes = require("./validation.types");
const schemas = require("./validation.schemas");
const forms = require('./validation.forms.json');
var Validator = require('jsonschema').Validator;

class Validation {

    constructor(fields,data){
        this.fields = fields;
        this.data = data;
        this.newData = {}
        this.valiator  = new Validator();
    }
    schemaBuilder(name){
        this.schema = {
            "id": `/${name}`,
            "type": "object",
            "properties": {}
        };
        for(let i in this.fields){
            this.checkSturcture(name,i)
            this.schema["properties"][i] = {"$ref": `/${i}`},
            this.newData[i] = this.data[i]
            this.valiator.addSchema(schemas[`${i}Schema`], `/${i}`);
        }
        return this
    }
    _check(){
       if(this.valiator.validate(this.newData,this.schema).valid){
           return this.newData
       }else{
            let {property,message} = this.valiator.validate(this.newData,this.schema).errors[0]
            throw new Error(property + " " + message)
       }
    }
    checkSturcture(name,field){
        if(this.fields[field] && !this.data[field]){
            throw new Error(`${field} is required input`)
        }
        if(forms[name].hasOwnProperty(field) && !schemas[`${field}Schema`]){
            throw new Error(`there is'nt validation for ${field}  input`)
        }
    }
    

}
const sanitize = (name,data) => {
    return (new Validation(forms[name],data).schemaBuilder(name)._check())
}

module.exports = sanitize