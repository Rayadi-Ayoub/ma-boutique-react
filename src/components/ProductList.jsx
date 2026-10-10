import ProductCard from './ProductCard';

export default function ProductList({ products, onAdd }) {
  if (products.length === 0) {
    return <p>Aucun produit trouvé.</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
}
