const Movie=require('../models/movie.model')

// create new movie
// update 
// read all
//readone
// delete 

//read All
module.exports.findAll=(req,res)=>{
    // read All=> find 
    Movie.find({})
        .then((allMovies)=>res.json(allMovies))
        .catch(err=>console.log(err))
}
module.exports.readOne=(req,res)=>{
    // read one=> find by id
    // /:id_movie
    Movie.findById({_id:req.params.id})
        .then((oneMovie)=>res.json(oneMovie))
        .catch(err=>console.log(err))
        
}
module.exports.create=(req,res)=>{
    console.log(req.body)
    // read All=> find 
    Movie.create(req.body)
        .then((newMovie)=>res.json(newMovie))
        .catch(err=>console.log(err))
        
}
// {new:true, runValidators:true}
module.exports.update=(req,res)=>{
    // read All=> find 
    Movie.findByIdAndUpdate({_id:req.params.id},req.body, {new:true, runValidators:true})
        .then((updatedMovie)=>res.json(updatedMovie))
        .catch(err=>console.log(err))
    Movie.findOne({})
}
module.exports.delete=(req,res)=>{
    // read All=> find 
    Movie.findByIdAndDelete({_id:req.params.id})
        .then(()=>console.log('Successfully Deleted'))
        .catch(err=>console.log(err))
        
}


// session :
//Model 
// list of previous filmmakers showed in the input as select
// format date yyyy-mm-dd

