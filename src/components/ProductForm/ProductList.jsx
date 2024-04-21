//mostrar los datos ingresados y exostentes
import React from "react";


const ProductList =({productos})=>{
  return <>
  <h3>Productos Actuales</h3>
    <table border='4'>
      <tr>
        <td>nombre</td>
        <td>descripcion</td>
        <td>Stock</td>
        <td></td>
      </tr>
      {
        productos.legth==0 ? <td>No hay datos</td>
        :productos.map((producto, index)=>{
          return<tr key={index}>
          <td>{producto.id}</td>
          <td>{producto.producto}</td>
          <td>{producto.stock}</td>
          <td>
            <button>Editar</button>
            <button>Eliminar</button>
          </td>

          </tr>
        })
      }

    </table>
  </>
}
export default ProductList






















// import React from 'react';

// const ProductList = ({ products, onEdit, onDelete }) => {
//   return (
//     <ul>
//       {products.map((product) => (
//         <li key={product.id}>
//           <span>{product.name}</span>
//           <span>{product.description}</span>
//           <span>{product.stock}</span>
//           <button onClick={() => onEdit(product)}>Editar</button>
//           <button onClick={() => onDelete(product.id)}>Eliminar</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ProductList;
