const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../model/userModel')

const protect = require('../middleware/authMiddleware')

router.post('/staff', async(req,res) => {
    const { name, email, password, role, specialisation} = req.body

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400).json({ message: 'invalid' })   
    }else{

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role,
        specialisation
    })

    if(user){
        res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        specialisation: user.specialisation,
        token: generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error("Invalid user data")
    }
}
})

router.post('/student', async(req,res) => {
    const { name, email, password, role, itnumber} = req.body

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400).json({ message: 'invalid' }) 
    }else{

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role,
        itnumber
    })

    if(user){
        res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        itnumber: user.itnumber,
        token: generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error("Invalid user data")
    }
}
})

router.post('/login', async(req,res) => {
    const {email,password} = req.body
    
    const user = await User.findOne({email})
    
    if(user && (await bcrypt.compare(password,user.password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
            role: user.role
        })
    }else{
        res.status(400).json({ message: 'invalid' }) 
    }
    
        res.json({message: 'Login User'})
    })

router.get('/me',protect,async(req,res) => {
    const {_id, name, email} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email,
        role
    })

})

const generateToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: '30d'
    })
}

router.post('/admin', async(req,res) => {
    const { name, email, password, role} = req.body

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400).json({ message: 'invalid' }) 
    }else{

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role
    })

    if(user){
        res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error("Invalid user data")
    }
}
})

module.exports = router