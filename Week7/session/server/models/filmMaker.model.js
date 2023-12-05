const mongoose=require('mongoose')

const filmMakerSchema=new mongoose.Schema(
    {
        name:{
        type:String,
        required:[true,'This field is required'],
        minlength:[2,'The title must at least be 2 characters']
    },
    age:{
        type:Number,
        required:[true,'This field is required']
    },
    nationality:{
        type:String,
        required:[true,'This field is required'],
    },
    movies:{
        type:Array
    }
},{timestamps:true})

module.exports=mongoose.model('filmMaker',filmMakerSchema)