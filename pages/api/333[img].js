import express from 'express';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import nc from 'next-connect'
import getConfig from 'next/config'

const app = express();
const __DIR__ = path.resolve();

function onError(err, req, res, next) {
  console.log(err);

  res.status(500).end(err.toString());
  // OR: you may want to continue
  next();
}


export default (req, res) => {
  const { serverRuntimeConfig } = getConfig()

  const dirRelativeToPublicFolder = 'img'

  const dir = path.join(serverRuntimeConfig.PROJECT_ROOT, './upload', dirRelativeToPublicFolder);

  const filenames = fs.readdirSync(dir);

  const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))

  res.statusCode = 200
  res.json(images);
}
// app.use(cors(corsOpts));
// app.use(express.json());

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'upload');
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname)
//   }
// });

// Die Route um Bilder zu laden
// app.get('/api/:pic', (req, res) =>{
//   console.log(req.params.pic)
//   fs.readFile(`/api/upload/${req.params.pic}`,  (err, data) => {
//     res.writeHead(200, {'Content-Type': 'image/jpg'});
//     res.end(data)
//   });
// });


// export default function handler(req, res) {
//   console.log(req.query.img)
//   fs.readFile(`upload/${req.query.img}`,  (err, data) => {
//     res.writeHead(200, {'Content-Type': 'image/jpg'});
//     res.end(data)
//   });
// }

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

// const handler = nc({ onError });

// handler
//   .use((req, res, next) => {
//     if(!req.user){
//       throw new Error("oh no!");
//       // or use next
//       next(Error("oh no"));
//     }
//   })
//   .get((req, res) => {
//     console.log(req.params.img)
//     fs.readFile(`upload/${req.params.img}`,  (err, data) => {
//       res.writeHead(200, {'Content-Type': 'image/jpg'});
//       res.end(data)
//     });
//   });

//   export default handler