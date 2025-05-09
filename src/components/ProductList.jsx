import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 25,
    image: "/images/1.jpg",
  },
  {
    id: 2,
    name: "Jeans",
    price: 50,
    image: "/images/2.jpg",
  },
  {
    id: 3,
    name: "Coffee",
    price: 75,
    image: "/images/3.jpg",
  },
  {
    id: 4,
    name: "T-Shirt",
    price: 20,
    image: "/images/4.jpg",
  },
  {
    id: 5,
    name: "Jeans",
    price: 55,
    image: "/images/5.jpg",
  },
  {
    id: 6,
    name: "Shows",
    price: 40,
    image: "/images/6.jpg",
  },
  {
    id: 7,
    name: "Sneakers",
    price: 15,
    image: "/images/7.jpg",
  },
  {
    id: 8,
    name: "Shows",
    price: 10,
    image: "/images/8.jpg",
  },
  {
    id: 9,
    name: "Sneakers",
    price: 30,
    image: "/images/9.jpg",
  },
  {
    id: 10,
    name: "T-Shirt",
    price: 35,
    image: "/images/10.jpg",
  },
  {
    id: 11,
    name: "Milk",
    price: 45,
    image: "/images/11.jpg",
  },
  {
    id: 12,
    name: "Sneakers",
    price: 40,
    image: "/images/12.jpg",
  }
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}