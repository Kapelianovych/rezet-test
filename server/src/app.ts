import path from 'path';
import morgan from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import productsRouter from './routes/resources';

export default express()
  .use(morgan('dev'))
  .use(cookieParser())
  .use(express.urlencoded({ extended: false }))
  .use(express.static(path.join(__dirname)))

  .use('/api', productsRouter)

  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
