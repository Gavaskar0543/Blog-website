const  User = require('../../../../Models/userData');

module.exports.createAccount = async function(req,res){
    try{
    if(req.body.password != req.body.confirmpassword){
        return res.status(401).json({
            success:false,
            message:"ERROR:password confirmpassword mismatch"
        });
    }
    const user = await User.findOne({email:req.body.email});
    if(user){
        return res.status(200).json({
            success:false,
            message:'WARNING:user already exists'
        });
    }
    else{
        const newUser = await User.create(req.body);
        console.log("user created successfully!",newUser);
        return res.status(200).json({
            success:true,
            message:"user account created successfully"
        })
    }
}
catch(error){
    return res.status(500).json({
        success:false,
        message:'ERROR:Internal error'
    })
}
}