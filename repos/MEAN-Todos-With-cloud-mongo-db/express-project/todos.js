var express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
var mongodb = require('mongodb');
connectionString = 'mongodb+srv://crud:crud@cluster0.mxx6v.mongodb.net/crud?retryWrites=true&w=majority'
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        const db = client.db('crud')
        const todosCollection = db.collection('todos')
        console.log('Connected to Database')
        app.post('/todos', (req, res) => {
            todosCollection.insertOne(req.body)
                .then(result => {
                    // console.log(result)
                  return res.json('Added todo Successfully !')
                })
                .catch(error => console.error(error))
        });
        app.get('/todos', (req, res) => {
            todosCollection.find().toArray()
                .then(results => {
                    res.json(results)
                })
                .catch(error => console.error(error))
        })
        app.delete('/todos', (req, res) => {
            todosCollection.findOneAndDelete(req.body)
              .then(result => {
                if (result.deletedCount === 0) {
                  return res.json('No todo to delete')
                }
                res.json(`Deleted Todo`)
              })
              .catch(error => console.error(error))
          })
          
          app.delete('/todos/:task', (req, res) => {
            todosCollection.deleteOne( { 'task': req.params.task })
              .then(result => {
                if (result.deletedCount === 0) {
                  return res.json('No todo to delete')
                }
                res.json(`Deleted Todo`)
              })
              .catch(error => console.error(error))
          })
          app.delete('/removeTodo/:id', (req, res) => {
            todosCollection.deleteOne( {_id: new mongodb.ObjectID(req.params.id)})
              .then(result => {
                if (result.deletedCount === 0) {
                  return res.json('No todo to delete')
                }
                res.json(`Deleted Todo`)
              })
              .catch(error => console.error(error))
          })

          app.put('/todos', (req, res) => {
            // var myquery = { task: req.body.task };
            var myquery = { _id: new mongodb.ObjectID(req.body._id) };
            var newvalues = { $set: {task: req.body.task, completed: req.body.completed } };
            todosCollection.updateOne(myquery, newvalues)
              .then(result => {
                res.json(`Updated Todo`)
              })
              .catch(error => console.error(error))
          })
    }).catch(error => console.error(error))
    

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/todos.html')
})

app.listen(3000);
