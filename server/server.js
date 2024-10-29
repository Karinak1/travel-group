import express from 'express';
import cors from 'cors';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get('/', (request, response) => response.json('its working!'));

app.get('/travel', async function (request, response) {
  const result = await db.query('SELECT * FROM travel');
  const travel = result.rows;
  response.json(travel);
});

app.listen(8080, () => console.log('App is running on PORT 8080'));
