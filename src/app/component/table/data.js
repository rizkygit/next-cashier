const dataSource = [
    {
        key: '1',
        product_name: 'kecap',
        product_price: 1500,
        stock: 10,
        category: 'sauce',
    },
    {
        key: '2',
        product_name: 'garam',
        product_price: 5000,
        stock: 40,
        category: 'condiment',
    },
];

const columns = [
    {
        title: 'Product Name',
        dataIndex: 'product_name',
        key: 'product_name',
    },
    {
        title: 'Price',
        dataIndex: 'product_price',
        key: 'product_price',
    },
    {
        title: 'Stock',
        dataIndex: 'stock',
        key: 'stock',
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
    },
];

export { dataSource, columns };