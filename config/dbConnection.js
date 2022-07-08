import mongoose from "mongoose";
import 'dotenv/config'

const dbConnection = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connection established')
    }catch (e) {
        console.log('Connection error: ' + e.message)
    }
    const conn = mongoose.connection
    if(conn.readyState>=1){
        console.log('Connected to database')
    }
    mongoose.connection.on('error',() => console.log('Connection failled '))
}
export default dbConnection