const userCtrl = {}
//WE ARE GETTING OUR USER MODEL
const User = require('../models/User')

userCtrl.getUsers = async(req,res) =>{
    const users = await User.find() //WE ARE LOOKING FOR ALL USERS
    res.json(users) //THIS IS THE ANSWER
}

userCtrl.createUser = async(req,res) =>{
    const {name,lastname,age,phone,email} = req.body; //WE GET THE INFORMATION FROM THE CLIENT
    const newUser = new User({ //WE CREATE A NEW USER
        name: name,
        lastname: lastname,
        age: age,
        phone: phone,
        email: email
    })
    await newUser.save(); //WE SAVE A NEW DOCUMENT WITH THE NEW INFORMATION FOR A USER HERE
    res.json({message: "The user has been created"})
}

userCtrl.getUser = async(req,res) =>{
    const user = await User.findById(req.params.id) //WE ONLY GET THE ID FROM req
    res.json(user) //WE HAVE AN ANSWER AND IT'S THE USER
}

userCtrl.deleteUser = async(req,res) =>{
    await User.findByIdAndDelete(req.params.id) //WE FIND THE USER AND THEN WE ELIMINATED THAT USER
    res.json({message: 'The user has been deleted'})
}

userCtrl.updateUser = async(req,res) =>{
    const {name,lastname,age,phone,email} = req.body; //THIS IS PROBABLY THE NEW INFORMATION FROM THE CLIENT
    await User.findByIdAndUpdate(req.params.id,{
        name,
        lastname,
        age,
        phone,
        email
})
    res.json({message: 'The user has been updated'})
}
module.exports = userCtrl;