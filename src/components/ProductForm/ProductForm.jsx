import react from "react";

const ProductForm =()=>{
  return <>
    <form>
      <label htmlFor="nombre">Nombre</label>
      <input type="text" name="nombre" />
      <label htmlFor="descripcion">Descripcion</label>
      <input type="text" name="descripcion"/>
      <label htmlFor="stock">Stock</label>
      <input type="number" name="stock"/>
      <input type="Submit" value="Agregar"/>
      <input type="reset" value="Eliminar"/>
    </form>
  </>
}
export default ProductForm










































// import React, { useState } from 'react';

// const ProductForm = ({ onSubmit, productToEdit }) => {
//   const [productName, setProductName] = useState(productToEdit ? productToEdit.name : '');
//   const [productDescription, setProductDescription] = useState(productToEdit ? productToEdit.description : '');
//   const [productStock, setProductStock] = useState(productToEdit ? productToEdit.stock : '');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ name: productName, description: productDescription, stock: productStock });
//     setProductName('');
//     setProductDescription('');
//     setProductStock('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Nombre</label>
//       <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
//       <label>Descripción</label>
//       <input type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
//       <label>Stock</label>
//       <input type="number" value={productStock} onChange={(e) => setProductStock(e.target.value)} />
//       <button type="submit">{productToEdit ? 'Actualizar Producto' : 'Agregar Producto'}</button>
//     </form>
//   );
// };

// export default ProductForm;
