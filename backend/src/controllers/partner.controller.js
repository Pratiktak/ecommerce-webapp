const partnerModel = require("../models/partner.model.js");
const userModel = require("../models/user.model.js");

// approve partner
const approvePartner = async (req, res) => {
    try {
        const partner = await partnerModel.findById(req.params.id);

        if (!partner) {
            return res.status(404).json({ message: "Partner not found" });
        }

        partner.isApproved = true;
        await partner.save();

        // Updateing user role to "partner"
        const user = await userModel.findById(partner.user);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.role = "partner";
        await user.save();

        res.status(200).json({
            message: "Partner approved successfully",
            partner
        });
    } catch (error) {
        console.log("Error in approvePartner controller ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

// apply for partner
const applyForPartner = async (req, res) => {
    try {
        const { businessName, phone, address } = req.body;

        // check if user already applied
        const existingPartner = await partnerModel.findOne({
            user: req.user._id
        });

        if(existingPartner) {
            return res.status(400).json({
                message: "you have already applied for partner"
            });
        }

        // if not applied then create partner
        const partner = await partnerModel.create({
            user: req.user._id,
            businessName,
            phone,
            address
        });

        res.status(201).json({
            message: "Partner application sumbitted sucessfully",
            partner
        });
    } catch (error) {
        console.log("Error in applyForPartner controller ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    approvePartner,
    applyForPartner
};