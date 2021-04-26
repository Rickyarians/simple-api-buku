const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {
//     res.render('add-product', {
//     pageTitle : 'Add Product', path: '/admin/add-product'
// });
    res.send('Test berhasil')
};


exports.postAddProduct = (req, res, next) =>{
    console.log(req.body.title)
    const product = new Product(req.body.title); //new class Product model
    product.save(); //save method dari model
    // res.redirect('/')
    res.status(200).json({
        message: 'Data berhasil Ditambah',
        data : req.body.title
    })
};

exports.getProducts = (req, res, next) =>{
    const products = Product.fetchAll(); //method from model
    res.status(200).json({
        data: products
    })
    // res.render('shop', {
    // prods: products,
    // pageTitle: 'Shop',
    // path: '/',
    // hasProducts: products.length > 0,
    // });
};