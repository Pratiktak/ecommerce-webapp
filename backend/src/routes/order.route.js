const express = require("express");
const router = express.Router();

const orderController = require("../controllers/order.controller");
const authMiddleware = require("../middleware/auth.middleware");

// order api
router.post('/',
    authMiddleware.protectRoute,
    orderController.createOrder
);

// get all orders [protected] admin only
router.get("/",
    authMiddleware.protectRoute,
    authMiddleware.isAdmin,
    orderController.getAllOrders
);

// get user order history
router.get("/my",
    authMiddleware.protectRoute,
    orderController.getMyOrder
);

// update order status [protected] admin only
router.put('/:id',
    authMiddleware.protectRoute,
    authMiddleware.isAdmin,
    orderController.updateOrderStatus
)

module.exports = router;