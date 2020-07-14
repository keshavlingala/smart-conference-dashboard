const express = require('express');
const {MongoClient} = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());

const url = `mongodb+srv://ritik:${encodeURIComponent('ritik@123')}@virtusa.kmdor.mongodb.net/virtusa?retryWrites=true&w=majority`;
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
var task_database;

client.connect(function(err,db){
	if(err){
		console.log(err);
	}

	else {
        task_database = client.db("virtusa");
        app.listen(4201, ()=>{
            console.log("server started");
        })
	}
});

app.get("/", (req,res)=>{
    task_database.collection('side_nav_items').find({}).toArray().then(d => res.json(d));
    // res.json({});
});