import express from 'express';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import nc from 'next-connect'

const app = express();
const __DIR__ = path.resolve();

const corsOpts = {
  origin: '*',
  methods: [
    'GET',
    'POST',
    'PUT',
    'DELETE'
  ],
  allowedHeaders: [
    'Content-Type',
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  ],
};

app.use(cors(corsOpts));
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});

// Die Route um Bilder zu laden
app.get('/api/:pic', (req, res) =>{
  console.log(req.params.pic)
  fs.readFile(`/api/upload/${req.params.pic}`,  (err, data) => {
    res.writeHead(200, {'Content-Type': 'image/jpg'});
    res.end(data)
  });
});

const upload = multer({storage}).single('file');

// export default function handler(req, res) {
//   upload(req, res, (err) => {
//     if(err) {
//       return res.status(500).json(err)
//     }
//     fs.readFile(__DIR__ + req.file.originalname, (err, content) => {

//         res.writeHead(200, {'Content-Type': 'image/jpg'});
//         res.end(content)
//     })
//   })
// }

export default app;
