const {Router} = require('express') //This is an enrouter from express
const router = Router()

router.route('/')
    .get()
    .post()

router.route('/:id') //This is a route for one in specific by (id)
    .get() //Get one document
    .delete() //Delete one document
    .put() //Update one document

module.exports = router; //We export the router