import https from 'https';
import { Router } from 'express';

const MOCKAPI_BASE_URL = 'https://5f3e43c013a9640016a6886d.mockapi.io/api';

export default Router().get('/products/all', (req, res) => {
  https
    .request(`${MOCKAPI_BASE_URL}/products`, (response) => {
      response
        .setEncoding('utf8')
        .on('data', (chunk) => res.send(chunk))
        .on('end', (chunk: any) => res.send(chunk));
    })
    .end();
});
