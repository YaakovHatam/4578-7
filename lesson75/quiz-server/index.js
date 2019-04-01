var app = require('express')(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    port = 3000,
    Quiz = require('./models/quiz.model');

var db = 'mongodb://127.0.0.1/north';
mongoose.connect(db, { useMongoClient: true });
var con = mongoose.connection;

con.on('error', console.error.bind(console, 'connection error:'));

con.once('open', function () {
    console.log("connection created");
});

app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({extended:false})); 

//Routes
app.get('/', function (req, res) {
    res.send('Happy to see u');
});

app.get('/quiz', function (req, res) {
    console.log('getting all quiz');
    Quiz.find({})
        .exec(function (err, Quizzes) {
            if (err) {
                res.send(404, 'Error has occurred!')
            } else {
                console.log(Quizzes);
                res.json(Quizzes);
            }
        });
});

// get one Member
app.get('/quiz/:id', function (req, res) {
    console.log('getting on Member');
    Quiz.findOne({
        _id: req.params.id // body-parser did it !!!!
    }).exec(function (err, Quiz) {
        if (err) {
            console.log(err);
            res.send(404, 'Error Occurred!')
        } else {
            console.log(Quiz);
            res.json(Quiz);
        }
    });
});

// Create document I 
app.post('/quiz' , function(req,res) {
    var newQuiz = new Quiz();
    newQuiz.qTitle =    'javascript'; //req.body.name;
    newQuiz.questions =   [];

    newQuiz.save(function(err,quiz) {
        if (err) {
            console.log(err);
            res.send('Error saving quiz!')
        } else {
            console.log(quiz);
            res.json(quiz);
        }
    })
});

// Update document
app.put('/quiz/:id', function(req,res) {
   Quiz.findOneAndUpdate(
       {
           _id: req.params.id // [query]
       },
       {
           $set: {
               title: req.body.name // [doc]
           }
        },
        {
            upsert: true      // [options] if this document has no title create one
        },
        function(err,newQuiz) {
            if (err) { console.log('error occured');
            } else {
                console.log(newQuiz);
                res.status(204).send(newQuiz);
            } 
        });
});

// Delte document
app.delete('/quiz/:id' , function(req,res) {
    Quiz.findOneAndRemove(
         {
            _id: req.params.id
        }, function(err, quiz) {
            if (err) {
                res.send('error deleting')
            }else {
                console.log(quiz);
                res.status(204).send(quiz);
            }
        });
});

app.listen(port, function () {
    console.log(`App listening on port ${port}`);
})