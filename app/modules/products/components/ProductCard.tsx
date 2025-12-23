interface ProductProps {
    name: string;
    description: string;
    price: number;
    userId: number;
}

interface ProductCardProps {
    product: ProductProps;
}

/**
 * Product card component to display product information
 */
export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-white/90 shadow-md rounded-lg p-6 max-w-sm w-full mx-auto flex flex-col items-center justify-start">
            <h1 className="text-xl font-semibold mb-2 text-gray-800">{product?.name}</h1>
            <p className="text-gray-600 mb-4">{product?.description}</p>
            <p className="text-lg font-bold text-blue-600/90">${product?.price}</p>
        </div>
    );
}