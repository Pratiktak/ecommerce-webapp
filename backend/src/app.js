// create server
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth.route.js');
const partnerRoutes = require('./routes/partner.route.js');
const productRoutes = require('./routes/product.route.js');
const cartRoutes = require('./routes/cart.route.js');
const orderRoutes = require('./routes/order.route.js');

const app = express();

// Middleware
app.use(express.json()); // bring data to req.body
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    // v-- allows the cookies or auth headers to be sent with the request
    credentials: true
}));

// Routes
app.get('/', (req, res) => {
    res.send("hello world");
});

app.use('/api/auth', authRoutes);
app.use('/api/partner', partnerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);

module.exports = app;