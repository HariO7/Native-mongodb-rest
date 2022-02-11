const{ MongoClient }= require('mongodb')
const uri = "mongodb://0.0.0.0:27017/";
const new_db = "mongo_db";

module.exports.connection =  new Promise((resolve, reject) => {
    MongoClient.connect(uri,{ useNewUrlParser: true},(error , client) =>{
        if(error){
            reject("Could not connect to db")
        }
        const db = client.db(new_db);
        resolve(db)
    })
  });
  

