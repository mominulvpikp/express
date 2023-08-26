const User = require("../models/users");
const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcrypt');
const createUser = (req, res)=>{
   const name = req.body.name;
   const email = req.body.email;
   const password = req.body.password;
   
   try{

        bcrypt.hash(password, 10, (err, hash)=>{
            const addUser = new User(
                {
                   id: uuidv4(),
                   name: name,       
                   email: email,       
                   password: hash,       
                }
            );
            addUser.save().
            then(()=>{res.send('Data Successfully inserteed')}).
            catch((err)=>{res.send(err)});
        });
        
   }catch(err){
        res.send(err);
   }



}

const getAllUser = (req, res)=>{
    res.send('Get All User');
}

const getOneUser = (req, res)=>{
    res.send('Get one User');
}

const updateUser = (req, res)=>{
    res.send('Update User');
}

const deleteUser = (req, res)=>{
    res.send('Delete User');
}

module.exports = {createUser, getAllUser, getOneUser, updateUser, deleteUser}