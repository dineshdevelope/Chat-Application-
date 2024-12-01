import jwt from "jsonwebtoken"

const generateTokenAndSetCookie=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECERT,{
        expiresIn:'15d'
    })
    res.cookie("jwt",token,{
        maxAge:15 * 24 * 60 * 60 * 1000, //MS
        httpOnly:true,//Prevent XSS attack cross-site scripting attackes
        sameSite:"strict", //CSRF attacks cross-site request forgery attackes
        secure:process.env.NODE_ENV !== "developement"
    })
}

export default generateTokenAndSetCookie