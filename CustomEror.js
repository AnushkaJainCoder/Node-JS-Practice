class CustomError extends Error{
    constructor(mssg){
        super(mssg);
    }
}

module.exports = {CustomError};