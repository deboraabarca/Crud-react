import { useState, useEffect } from "react";
import "./ProductForm.css";

const ProductForm = ({ onSubmit, productToEdit }) => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productStock, setProductStock] = useState("");


  useEffect(() => {
    if (productToEdit) {
      setProductName(productToEdit.name);
      setProductDescription(productToEdit.description);
      setProductStock(productToEdit.stock);
    }
  }, [productToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: productToEdit ? productToEdit.id : Date.now(),
      name: productName,
      description: productDescription,
      stock: productStock,
    });
    setProductName("");
    setProductDescription("");  
    setProductStock("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Nombre</label>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <label>Descripción</label>
      <input
        type="text"
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
      />
      <label>Stock</label>
      <input
        type="number"
        value={productStock}
        onChange={(e) => setProductStock(e.target.value)}
      />
      <button type="submit" className="button-primary">
        {productToEdit ? "Actualizar Producto" : "Agregar Producto"}
      </button>
    </form>
  );
};

export default ProductForm;
