const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const {User} = require('./models/user')
// const db = require('./config/keys')

const app = express()
const port = process.env.PORT || 5000;

const cors = require("cors");
app.use(cors());
// app.use(
// 	cors({
// 		origin: [
// 		  "http://localhost:3000",
//       "http://skku-milab.ddns.net:3300",
//       "https://ngs-qr.herokuapp.com"
//     ],
// 		credentials: true,
// 	})
// );

mongoURI = 'mongodb+srv://ngsqr:ozbf5b8CdCU17xo5@cluster0.d75oo.mongodb.net/ngsqr?retryWrites=true&w=majority'

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error))

app.post('/api/create', (req, res) => {
  const user = new User(req.body)

  user.save((error, userInfo) => {
    if (error) return res.json({success: false, error})
    return res.status(200).json({
      success: true
    })
  })
})

app.get('/api/get', (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.status(500).send({err: 'database failure', err})
    res.json(users)
  })
})

app.listen(port, () => console.log(`Server is listening to port: ${port}`))
