import fs from 'fs';
import path from 'path';

export default (req, res) => {

  // const dirRelativeToPublicFolder = 'img';
  // const dir = path.resolve('./public', dirRelativeToPublicFolder);
  // const filenames = fs.readdirSync(dir);
  // const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name));

  let apiObj = [];

  const dirWebdesign = 'img/webdesign';
  const dirLogodesign = 'img/logodesign';
  const dirProduktfotos = 'img/produktfotos';
  const dirMediendesign = 'img/mediendesign';

  const webdesignDir = path.resolve('./public', dirWebdesign);
  const logodesignDir = path.resolve('./public', dirLogodesign);
  const produktfotosDir = path.resolve('./public', dirProduktfotos);
  const mediendesignDir = path.resolve('./public', dirMediendesign);
  
  const webdesignFilenames = fs.readdirSync(webdesignDir);
  const logodesignFilenames = fs.readdirSync(logodesignDir);
  const produktfotosFilenames = fs.readdirSync(produktfotosDir);
  const mediendesignFilenames = fs.readdirSync(mediendesignDir);

  const imagesWebdesign = webdesignFilenames.map(name => path.join('/', dirWebdesign, name));
  const imagesLogodesign = logodesignFilenames.map(name => path.join('/', dirLogodesign, name));
  const imagesProduktfotos = produktfotosFilenames.map(name => path.join('/', dirProduktfotos, name));
  const imagesMediendesign = mediendesignFilenames.map(name => path.join('/', dirMediendesign, name));

  apiObj.push(imagesWebdesign, imagesLogodesign, imagesProduktfotos, imagesMediendesign)

  res.statusCode = 200;
  res.json(apiObj);
}