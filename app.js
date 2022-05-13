// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Flightstatus");
//   dbo.collection("Flightsintwohours").find({estArrivalAirport:
//     "EDDF"}).toArray(function(err, result) {
//     if (err) throw err;
//    result.forEach((e)=>{
// console.log(e);
//    })
//     console.log(result);
//     db.close();
//   });
// });



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
mongodb://localhost:27017

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Flightstatus");
  dbo.collection("Flightsintwohours").find({estArrivalAirport:
    "EDDF"}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});