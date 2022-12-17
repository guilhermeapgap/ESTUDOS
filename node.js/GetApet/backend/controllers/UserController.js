const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = class UserController{
    static async register(req, res){
        
        const {name, email, phone, password, confirmpassword} = req.body

    // Validations
        if(!name){
            res.status(422).json({message:'O nome é obrigaório'})
            return
        }
        if(!email){
            res.status(422).json({message:'O Email é obrigaório'})
            return
        }
        if(!phone){
            res.status(422).json({message:'O telefone é obrigaório'})
            return
        }
        if(!password){
            res.status(422).json({message:'A senha é obrigaória'})
            return
        }
        if(!confirmpassword){
            res.status(422).json({message:'A confirmação de senha é obrigaória'})
            return
        }
        if(password !== confirmpassword){
            res.status(422).json({message: 'A senha e a confirmação de senha precisam ser iguais'})
            return
        }

        //check if user exists
        const userExists = await User.findOne({email: email})

        if(userExists){
            res.status(422).json({
                message: 'Por favor, utilize outro e-mail',
            })
            return
        }

        // crate a password
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        // create a user
        const user = new User({
            name,
            email,
            phone,
            password: passwordHash,
        })

        try{

            const newUser = await user.save()
            res.status(201).json({
                message: 'Usuario criado',newUser,
            })

        }catch(error){
            res.status(500).json({message: error})
        }
    }
}