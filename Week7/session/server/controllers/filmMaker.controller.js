const filmMaker=require('../models/filmMaker.model')

// create new movie
// update 
// read all
//readone
// delete 

//read All
module.exports.findAll=(req,res)=>{
    // read All=> find 
    filmMaker.find({})
        .then((allFilmMaker)=>res.json(allFilmMaker))
        .catch(err=>console.log(err))
}
module.exports.readOne=(req,res)=>{
    // read one=> find by id
    // /:id_movie
    filmMaker.findById({_id:req.params.id})
        .then((result)=>res.json(result))
        .catch(err=>console.log(err))
        
}
module.exports.create=(req,res)=>{
    console.log(req.body)
    // read All=> find 
    filmMaker.create(req.body)
        .then((newFilmMaker)=>res.json(newFilmMaker))
        .catch(err=>console.log(err))
        
}

// module.exports.delete=(req,res)=>{
//     // read All=> find 
//     Movie.findByIdAndDelete({_id:req.params.id})
//         .then(()=>console.log('Successfully Deleted'))
//         .catch(err=>console.log(err))
        
// }

