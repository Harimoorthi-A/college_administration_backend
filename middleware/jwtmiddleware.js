const jwt=require('jsonwebtoken')

exports.jwtMiddleware=(req,res,next)=>{
    // console.log("inside middleware");

    // token access
    const token=req.headers['access_token'].split(" ")[1]

    // verify
    try{
        const JWTresponse=jwt.verify(token,'h9a8r0i9m8o7o3r5t6h4i')
        console.log(JWTresponse);
        req.payload=JWTresponse._id
        next()
    }
    catch(err){
        res.status(401).json("autherisation failed !!! please login")
        // console.log(res);
    }
}