const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');


async function main(){
   
    const uri = process.env.DATABASE;
 

    const client = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log('connection successful');
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
};
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
 

main().catch(console.error);