

class ApiExeption extends Error{

    constructor(errorMsg,statusCode){
        super()
        this.errorMsg = errorMsg;
        this.statusCode = statusCode
    }
    
}