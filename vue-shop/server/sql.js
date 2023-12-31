module.exports = {
    productList: {
        query: 'select p.*, c.* from product p left outer join category c on p.category_id = c.id'
    },
    sellerList: {
        query: 'select * from seller'
    },
    categoryList: {
        query: 'select * from category'
    },
    product: {
        query: 'select p.*, c.* from product p left outer join category c on p.category_id = c.id where p.id = ?'
    },
    productInsert: {
        query: 'insert into product('
            + 'product_name, product_price, delivery_price, add_delivery_price, outbound_days, tags, seller_id,category_id)'
            + 'values(?, ?, ?, ?, ?, ?, ?, ?)'
    },
    productDelete: {
        query: 'delete from product where id = ?' 
    },
    signUp: {
        query: 'insert into seller set ? on duplicate key update ?'
    }



}
