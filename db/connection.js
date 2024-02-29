const mongoose=require('mongoose')
const connectionString=process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("___?MongoDB Atlas connected___");  
}).catch((err)=>{
    console.log(`___Mongodb Atlas Connection failed__${err}`);
})