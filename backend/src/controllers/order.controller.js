const orderModel = require('../models/order.model.js');
const cartModel = require('../models/cart.model.js');

// order controllers
async function createOrder(req, res) {
    try {
        // getting the cart data
        const cart = await cartModel
            .findOne({ user: req.user._id })
            .populate("items.product");

        // if cart is empty
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        const orderItems = cart.items.map(item => ({
            product: item.product._id,
            quantity: item.quantity,
            price: item.product.price
        }));

        // calculating total price
        let totalPrice = 0;
        cart.items.forEach(item => {
            totalPrice += item.product.price * item.quantity;
        });

        // craete order
        const order = await orderModel.create({
            user: req.user._id,
            items: orderItems,
            totalPrice
        });

        // clear cart 
        cart.items = [];
        await cart.save();

        res.status(201).json({
            message: "Order placed successfully",
            order
        });
    } catch (error) {
        console.log("Error in createOrder controller: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function getMyOrder(req, res) {
    try {
        const orders = await orderModel
            .find({ user: req.user._id })
            .populate("items.product");

        res.status(200).json({ orders });
    } catch (error) {
        console.log("Error in getMyOrder controller:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function getAllOrders(req, res) {
    try {
        const orders = await orderModel
            .find({})
            .populate("user")
            .populate("items.product");

        res.status(200).json({ orders });
    } catch (error) {
        console.log("Error in getAllOrders controller:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function updateOrderStatus(req, res) {
    const { status } = req.body;

    const order = await orderModel.findById(req.params.id);

    order.orderStatus = status;
    await order.save();

    res.status(200).json({
        message: "Status updated",
        order
    });
}

module.exports = {
    createOrder,
    getMyOrder,
    getAllOrders,
    updateOrderStatus
}