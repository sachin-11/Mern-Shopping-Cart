const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv')
const colors = require('colors')
const path = require('path');
const uploadRoute = require('./routes/uploadRoutes');
const userRoute = require('./routes/userRoutes');
const orderRoute = require('./routes/orderRoutes')
const morgan = require('morgan')
const products = require('./data/products')
const productRoutes = require('./routes/productRoutes');
const {errorHandler, notFound }  = require('./middleware/errorMiddleware');

const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json());

app.use(cors())


app.use('/api/products', productRoutes)
app.use('/api/users', userRoute)
app.use('/api/orders', orderRoute)
app.use('/api/upload', uploadRoute)

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

var  __dirname = path.resolve()

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
} else {
  app.get('/', (req, res) => {
    res.send('API is running')
  })
}

const PORT = process.env.PORT || 5000;
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));