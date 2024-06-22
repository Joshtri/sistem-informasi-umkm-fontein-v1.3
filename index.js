import express from 'express';
import path from 'path';
import flash from 'connect-flash';

import { config } from 'dotenv';
import session from 'express-session';
import methodOverride from 'method-override';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import connectDB from './config/dbConfig.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


import indexRoute from './routes/index.route.js';
// import dashboardRoute from './routes/dashboard.route.js';
import kbliRoute  from './routes/kbli.route.js';


const app = express();
const port = process.env.PORT || "3001";

// Connect to MongoDB
connectDB();

// Tentukan lokasi folder views
const viewsDirectories = [
    path.join(__dirname, 'views'),
    path.join(__dirname, 'views', 'keluarga'),
    path.join(__dirname, 'views', 'penduduk'),
    path.join(__dirname, 'views', 'umkm'),
    path.join(__dirname, 'views', 'kbli'),
    path.join(__dirname, 'views', 'statistik'),

];



// view engine setup
app.set('views', viewsDirectories);
app.set('view engine', 'ejs');
app.use(flash({ sessionKeyName: 'flashMessage' }));


app.use(
    session({
      proxy: true,
      secret: 'secret',
      resave: false,
      saveUninitialized: true,
    
      
    })
);


// Method override middleware
app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoute);  // most top level sitemap. 
app.use('/adm/data', kbliRoute);
  


app.listen(port, () => console.log(`listening on ${port}`));