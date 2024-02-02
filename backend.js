// server.js

const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/Users/abhiramsree.iruvanti/Desktop/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, 'recordedVideo.mp4');
    },
});

const upload = multer({ storage: storage });

// Serve HTML file
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.get('/',(req,res)=>{
    res.json({
        msg:"Everything's working fine"
    })
})

// Handle video uploads

app.post('/upload',upload.single('video'), (req, res) => {
    console.log('Video uploaded successfully');
    console.log(req.body);
    res.json({ message: 'Video uploaded successfully' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
