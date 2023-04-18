const {Router} = require('express') //This is an enrouter from express
const router = Router()
const {createUser,getUser,getUsers,deleteUser,updateUser} = require('../controller/user.controller')
router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id') //This is a route for one in specific by (id)
    .get(getUser) //Get one document
    .delete(deleteUser) //Delete one document
    .put(updateUser) //Update one document

module.exports = router; //We export the router