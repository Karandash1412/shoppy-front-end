import getMe from "./modules/home/api/get/get-me";
import CreateProductFab from "./modules/products/components/createProductFab";
import getProducts from "./modules/products/api/get/getProducts";
import ProductCard from "./modules/products/components/ProductCard";

export default async function Home() {
  const me = await getMe();
  const products = await getProducts();

  return (
    <div className="flex flex-col gap-4 p-4 mt-2">
      <CreateProductFab />
      <div className="flex flex-wrap gap-4 items-center justify-start">
        {products?.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}