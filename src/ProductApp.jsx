import React from 'react'
import ProductForm from './components/ProductForm/ProductForm'
import ProductList from './components/ProductForm/ProductList'


const Bd =[
  {id:1, producto :'televisor', stock:'4'},
  {id:2, producto :'lavadora', stock:'2'},
  {id:3, producto :'licuadora', stock:'9'},
  {id:4, producto :'cama', stock:'6'},
]

const ProductApp=()=>{
  const[productos,SetProductos]=useState(Bd);
  return <>
    <h2>CRUD de productos</h2>
    <ProductForm/>
    <ProductList productos={productos} />
  </>
}

export default ProductApp






























// import React, { useState } from 'react';
// import './components/global.css';
// import ProductForm from './components/ProductForm/ProductForm';
// import ProductList from './components/ProductForm/ProductList';

// const ProductApp = () => {
//   const [products, setProducts] = useState([]);
//   const [productToEdit, setProductToEdit] = useState(null);

//   const handleAddProduct = (newProduct) => {
//     setProducts([...products, { ...newProduct, id: Date.now() }]);
//   };

//   const handleEditProduct = (product) => {
//     setProductToEdit(product);
//   };

//   const handleUpdateProduct = (updatedProduct) => {
//     const updatedProducts = products.map((product) =>
//       product.id === updatedProduct.id ? updatedProduct : product
//     );
//     setProducts(updatedProducts);
//     setProductToEdit(null);
//   };

//   const handleDeleteProduct = (productId) => {
//     const updatedProducts = products.filter((product) => product.id !== productId);
//     setProducts(updatedProducts);
//   };

//   return (
//     <div className="container">
//       <h1>CRUD de Productos</h1>
//       <ProductForm onSubmit={productToEdit ? handleUpdateProduct : handleAddProduct} productToEdit={productToEdit} />
//       <ProductList products={products} onEdit={handleEditProduct} onDelete={handleDeleteProduct} />
//     </div>
//   );
// };

// export default ProductApp;
