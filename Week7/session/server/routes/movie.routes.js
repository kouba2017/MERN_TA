// HTTP METHODS
// POST GET PUT DELETE
const movieController= require('../controllers/movies.controller')

//app

module.exports=app=>{
    app.get('/api/movies',movieController.findAll)
    app.post('/api/newMovie',movieController.create)
    app.get('/api/movie/:id',movieController.readOne)
    app.put('/api/movie/:id',movieController.update)
    app.delete('/api/movie/:id',movieController.delete)
}
//post => to enter the data 
//  body=> raw=> text to JSON

