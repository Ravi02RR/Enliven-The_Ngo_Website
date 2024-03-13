const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const BadWordsFilter = require('bad-words');
const filter = new BadWordsFilter();
const app = express();
const port = process.env.PORT || 8080;

mongoose.connect("mongodb+srv://ravi:ravi@cluster0.rxahatw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    dbName: "enliven",
})
    .then(() => console.log("database connected"))
    .catch((e) => console.log(e));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Profanity Filter Middleware
const profanityFilterMiddleware = (req, res, next) => {
    const { title, reply, fullName, message } = req.body;

    
    if (filter.isProfane(title) || filter.isProfane(reply) || filter.isProfane(fullName) || filter.isProfane(message)) {
        
        const warningMessage = "Your message contains abusive language. Please refrain from using offensive words.";

        
        console.log(`Attempted use of bad language: ${req.ip} - ${req.method} - ${req.originalUrl}`);

      
        return res.status(400).send(warningMessage);
    }

   
    next();
};

app.use(profanityFilterMiddleware);

// Schemas and Models definitions...
const replySchema = new mongoose.Schema({
    reply: String,
});
const Reply = mongoose.model('Reply', replySchema);

const questionSchema = new mongoose.Schema({
    title: String,
    replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reply' }],
});
const Question = mongoose.model('Question', questionSchema);

const contactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 15
    },
    message: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 5000
    }
});
const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.get('/', async (req, res) => {
    try {
        const questions = await Question.find({});
        res.json(questions);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/', async (req, res) => {
    const title = req.body.title;
    try {
        const ask = new Question({ title });
        await ask.save();
        res.json(ask);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/view/:id', async (req, res) => {
    try {
        const question = await Question.findById(req.params.id).populate('replies');
        res.json(question);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/view/:id/replies', async (req, res) => {
    const replyText = req.body.reply;
    try {
        const reply = new Reply({ reply: replyText });
        await reply.save();
        const question = await Question.findById(req.params.id);
        question.replies.push(reply);
        await question.save();
        res.json(reply);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/contact', async (req, res) => {
    const { fullName, email, phone, message } = req.body;
    if (!fullName || !email || !phone || !message) {
        return res.status(400).send('All fields are required.');
    }
    try {
        const contact = new Contact({ fullName, email, phone, message });
        await contact.save();
        res.status(201).json(contact);
    } catch (err) {
        console.log(err);
        if (err.name === 'ValidationError') {
            return res.status(400).send(err.message);
        }
        res.status(500).send('Internal Server Error');
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
