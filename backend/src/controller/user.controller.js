const userCtrl = {}
//WE ARE GETTING OUR USER MODEL
const User = require('../models/User')

userCtrl.getUser = async(req,res) =>{
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
    res.json({message: "El usuario ha sido creado"})
}

userCtrl.getUsu = async(req,res) =>{
    
}

userCtrl.getUsu = async(req,res) =>{
    
}

userCtrl.getUsu = async(req,res) =>{
    
}


