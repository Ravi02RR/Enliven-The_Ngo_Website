const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

mongoose.connect("mongodb+srv://Ravi02rr:slrbkMeyLMxjBfs3@cluster0.pa8zqtm.mongodb.net/?retryWrites=true&w=majority", {
    dbName: "backend",
})
    .then(() => console.log("data base connected"))
    .catch((e) => console.log(e));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const replySchema = new mongoose.Schema({
    reply: String,
});

const Reply = mongoose.model('Reply', replySchema);

const questionSchema = new mongoose.Schema({
    title: String,
    replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reply' }],
});

const Question = mongoose.model('Question', questionSchema);

// Contact Schema
const contactSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phone: Number,
    message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

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

// Contact Endpoint
app.post('/contact', async (req, res) => {
    const { fullName, email, phone, message } = req.body;
    try {
        const contact = new Contact({ fullName, email, phone, message });
        await contact.save();
        res.json(contact);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
