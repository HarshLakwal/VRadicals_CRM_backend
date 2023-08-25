class CostumErrorHandler extends Error {
    constructor(status, msg) {
        super();
        this.status = status;
        this.message = msg
    }

    static alreadyExist(message) {
        return new CostumErrorHandler(409, message)
    }
    static alreadyExistEmail(message) {
        return new CostumErrorHandler(409, message)
    }
    static notExist(message = 'User not exist with this id'){
        return new CostumErrorHandler(404, message)
    }

    static wrongCredentails(message = 'Email and password is wrong!') {
        return new CostumErrorHandler(404, message)
    }
    static unAuthorized(message = 'unAuthorized') {
        return new CostumErrorHandler(401, message)
    }

    static notFound(message = 'user Not Found') {
        return new CostumErrorHandler(404, message)
    }
    static ServerError (message = 'Internal server Error') {
        return new CostumErrorHandler(500, message)
    }
    static Empty (message = "Opps there is no Data in DataBase"){
        return new CostumErrorHandler(404, message)
    }
    static InvalidExt (message = "Invalid extension. Accept png and jpeg files"){
        return new CostumErrorHandler(422, message)
    }
    static expired (message = 'Code Expired'){
        return new CostumErrorHandler(410, message)
    }
    static isSubscribed (message = 'Please subscribe to our plan'){
        return new CostumErrorHandler(402, message)
    }
}
export default CostumErrorHandler