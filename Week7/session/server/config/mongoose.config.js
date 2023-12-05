const mongoose=require('mongoose')

const db='movies'
mongoose.connect(`mongodb://127.0.0.1:27017/${db}`,{
    useNewUrlParser:true,
    useUnifiedTopology: true
    })
    .then(()=>console.log('established cnx'))
    .catch(err=>console.log(err))

