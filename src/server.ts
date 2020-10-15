import express from 'express';
import './database/connection';

const app = express();

app.get('/users', (request, response) => {
    return response.json();
})

app.listen(3000);