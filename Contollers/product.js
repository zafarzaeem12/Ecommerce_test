const productModel = require('../Models/product');


const createProduct = async (req, res, next) => {

    try {
        const newProduct = new productModel({
            name: req.body.name,
            status: req.body.status,
            color: req.body.color,
            size: req.body.size,
            weight: req.body.weight
        })
        const data = await newProduct.save()
        res.send({
            message: "new product is created",
            status: 201,
            data: data
        })

    }
    catch (err) {
        res.send({
            message: "new product is not created",
            status: 404,

        })
    }

}

const getProduct = async (req, res, next) => {

    const _id = req.params._id

    try {

        const data = await productModel.findById(_id);
        console.log(data)
        res.send({
            message: 'get data successfully ...',
            status: 200,
            data: data
        })

    }
    catch (err) {
        console.log(err);
        res.send({
            message: 'not get data successfully',
            status: 404,

        })
    }
}

const updateProduct = async (req, res, next) => {
    const _id = req.params._id
    try {

        const data = await productModel.findByIdAndUpdate(_id, req.body, { new: true })
        data ?
            (res.send({
                message: 'Product updated successfully',
                status: 201,
                data: data,
            }))
            :
            (res.send({
                message: 'Product not found',
                status: 404,
            }))





    }
    catch (err) {
        res.send({
            message: 'server error',
            status: 503
        })
    }
}

const deleteProduct = async (req, res, next) => {
    const _id = req.params._id
    try {



        const data = await productModel.findByIdAndDelete(_id)
        res.send({
            message: 'delete product successfully',
            status: 201,
            data: data
        })
    }
    catch (err) {
        res.send({
            message: 'not delete product successfully',
            status: 404,

        })
    }


}

module.exports = {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
}

