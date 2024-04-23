const ProductList = ({ products, onEdit, onDelete, restoreMode = false }) => {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <li key={product.id}>
          <span>{product.name}</span>
          <span>{product.description}</span>
          <span>{product.stock}</span>
          {!restoreMode && (
            <button onClick={() => onEdit(product)} className="edit-button">Editar</button>
          )}
          <button onClick={() => onDelete(product.id)} className={restoreMode ? "restore-button" : "delete-button"}>
            {restoreMode ? "Restaurar" : "Eliminar"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
