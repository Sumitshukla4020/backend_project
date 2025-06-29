const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandle(req, res, next)).
        catch((err)=>{
            next(err)
        })
    }
}



export {asynHandler}