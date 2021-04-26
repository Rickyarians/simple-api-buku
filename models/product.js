let products = [
    {
        title: "Buku Baru banget 1"
    },
    {
        title: "Buku Baru banget 2"
    }
    
];

module.exports = class Product {
    constructor(title){
    this.title = title
    }

    save(){ //Untuk menyimpan data
        products.push(this);
    }
    
    static fetchAll(){ //untuk menampilkan semua data
        return products;
    }
}