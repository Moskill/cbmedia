// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import express from 'express';
import cors from 'cors';

var corsOptions = {
  origin: "*",
  exposedHeaders: 'Content-Range'
};

export default function handler(req, res) {
  res.status(200).json({ name: 'Hans Dampf' })
}
