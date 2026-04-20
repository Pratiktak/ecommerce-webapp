const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    price: { 
        type: Number,
        required: true
    }
});

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [orderItemSchema],
    totalPrice: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        enum: ["pending", "shipped", "delivered"],
        default: "pending"
    },
    // razorpayOrderId: { 
    //     type: String, 
    //     required: true 
    // },
    // razorpayPaymentId: { 
    //     type: String, 
    //     required: true 
    // },
    // paymentMethod: {
    //     type: String,
    //     enum: ["COD", "ONLINE"],
    //     required: true
    // },
    // paymentstatus: {
    //     type: String,
    //     required: true,
    //     enum: ["pending", "completed", "failed"],
    //     default: "pending"
    // },
    // address: {
    //     type: String,
    //     required: true
    // },
}, {
    timestamps: true
});

const orderModel = mongoose.model("Order", orderSchema);

module.exports = orderModel;