import { useState } from "react";
import "./components/global.css";
import ProductForm from "./components/ProductForm/ProductForm";
import ProductList from "./components/ProductForm/ProductList";

const ProductApp = () => {
  const [products, setProducts] = useState([]);
  const [deletedProducts, setDeletedProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product);
  };

  const handleUpdateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setProductToEdit(null);
  };

  const handleDeleteProduct = (productId) => {
    const deletedProduct = products.find((product) => product.id === productId);
    if (deletedProduct) {
      setDeletedProducts([...deletedProducts, deletedProduct]);
      const updatedProducts = products.filter(
        (product) => product.id !== productId
      );
      setProducts(updatedProducts);
    }
  };

  const handleRestoreProduct = (productId) => {
    const restoredProduct = deletedProducts.find(
      (product) => product.id === productId
    );
    if (restoredProduct) {
      setProducts([...products, restoredProduct]);
      const updatedDeletedProducts = deletedProducts.filter(
        (product) => product.id !== productId
      );
      setDeletedProducts(updatedDeletedProducts);
    }
  };

  return (
    <div className="container">
      <h1 className="title">CRUD de Productos</h1>
      <ProductForm
        onSubmit={productToEdit ? handleUpdateProduct : handleAddProduct}
        productToEdit={productToEdit}
      />
      <ProductList
        products={products}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />
      <h2 className="sub-title">Productos Eliminados</h2>
      <ProductList
        products={deletedProducts}

        onDelete={handleRestoreProduct}
        restoreMode={true} 
      />
    </div>
  );
};

export default ProductApp;
