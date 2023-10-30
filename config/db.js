const mongoose=require('mongoose')


const configureDB=async()=>{
    const dburl=process.env.DB_URL;
    try {
        await mongoose.connect(`${dburl}/${process.env.DB_NAME}`);
        console.log("Server connected to MongoDB");
    } catch (error) {
        console.log(error);
    }


}
module.exports=configureDB;