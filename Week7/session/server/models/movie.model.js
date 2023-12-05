const mongoose=require('mongoose')

const MovieSchema = new mongoose.Schema(
    {
        title:{
        type:String,
        required:[true,'This field is required'],
        minlength:[2,'The title must at least be 2 characters']
    },
    releaseDate:{
        type:Date,
        required:[true,'This field is required']
    },
    type_movie:{
        type:Array,
        required:[true,'This field is required'],
    },
    filmMaker:{
        // type:mongoose.Model
        type: String,
        minlength:[2,'The film maker name must at least be 2 characters']
    }
},{timestamps:true})

module.exports=mongoose.model('Movie',MovieSchema)