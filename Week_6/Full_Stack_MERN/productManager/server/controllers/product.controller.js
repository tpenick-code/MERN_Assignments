const Product = require("../models/product.model");

module.exports = {

    getAllProducts: (req, res) => {
        Product.find({})
            .then((allProducts)=>res.json(allProducts))
            .catch((err)=>res.status(400).json(err))
    },

    getOneProduct: (req, res) => {
        Product.findById({_id: req.params._id})
            .then((oneProduct)=>res.json(oneProduct))
            .catch((err)=>res.status(400).json(err))
    },

    createProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct)=>res.json({product: newProduct}))
            .catch((err)=>res.status(400).json(err))
    },


    



}