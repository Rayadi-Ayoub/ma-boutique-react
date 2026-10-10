export default function ProductCard({ product, onAdd }) {
  return (
    <article className="product-card">
      <div className="product-image" aria-hidden="true">
        {product.emoji}
      </div>

      <h2>
        {product.name} · {product.price} DT
      </h2>

      <button onClick={() => onAdd(product)}>Ajouter</button>
    </article>
  );
}
