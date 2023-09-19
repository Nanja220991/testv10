// src/database.ts
import { createConnection } from 'typeorm';

createConnection()
  .then(() => console.log('Connected to the database'))
  .catch(error => console.error('Error connecting to the database: ', error));
