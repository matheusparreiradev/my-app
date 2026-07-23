import { ListProducts, makeProductRepository } from "@/features/products";


async function CheckoutPage({searchParams}: { searchParams: Promise<{ productId: string }> }) {

    const { productId } = await searchParams;
    console.log("productId", productId);
    const repository = makeProductRepository();
    const listProducts = new ListProducts(repository);
    const products = await listProducts.execute();
    const product = products.find((product) => product.id === productId);
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h1>Checkout</h1>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>

        </div>
    )
}
export default CheckoutPage;