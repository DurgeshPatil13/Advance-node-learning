const User = require("../models/user");

async function postdata(req, res) {

    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    });

    res.status(201).json({
        success: true,
        message: "User created",
        data: user
    });
};

module.exports = postdata;