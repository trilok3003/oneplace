var express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
connectionString = 'mongodb+srv://crud:crud@cluster0.mxx6v.mongodb.net/crud?retryWrites=true&w=majority'
var app = express();
// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }));

// mongo
// MongoClient.connect(connectionString, (err, client) => {
//   if (err) return console.error(err)
//   console.log('Connected to Database')
// })
// MongoClient.connect(connectionString, {
//     useUnifiedTopology: true
//   }, (err, client) => {
//     if (err) return console.error(err)
//     console.log('Connected to Database')
//     const db = client.db('crud')
//   })
//.....using promise
//   MongoClient.connect(connectionString, { useUnifiedTopology: true })
//   .then(client => {
//     console.log('Connected to Database')
//   })
//   .catch(error => console.error(error))

MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        const db = client.db('crud')
        const quotesCollection = db.collection('quotes')
        console.log('Connected to Database')
        app.post('/quotes', (req, res) => {
            quotesCollection.insertOne(req.body)
                .then(result => {
                    console.log(result)
                })
                .catch(error => console.error(error))
        });
        //   app.get('/', (req, res) => {
        //     const cursor = db.collection('quotes').find()
        //     console.log(cursor)
        //   })
        app.get('/quotes', (req, res) => {
            quotesCollection.find().toArray()
                .then(results => {
                    res.json(results)
                })
                .catch(error => console.error(error))
        })
        app.delete('/quotes', (req, res) => {
            quotesCollection.deleteOne( { name: req.body.name })
              .then(result => {
                if (result.deletedCount === 0) {
                  return res.json('No quote to delete')
                }
                res.json(`Deleted Darth Vadar's quote`)
              })
              .catch(error => console.error(error))
          })

    }).catch(error => console.error(error))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000);
