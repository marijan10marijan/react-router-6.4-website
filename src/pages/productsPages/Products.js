import { useLoaderData, Link } from "react-router-dom";

const Products = () => {

    const products = useLoaderData();

    return (
        <main className="products">
            {products.map(product => (
                <div className="products__container" key={product.id}>
                    <Link to={product.id.toString()}>
                        <h1>{product.name}</h1>
                        <h3><b>Price: </b>{product.price} $</h3>
                    </Link>
                </div>
            ))}
        </main>
    );
}

export default Products;

export const productsLoader = async () => {
    const res = await fetch('http://localhost:7000/products');
    if (!res.ok) {
        throw Error('Could not fetch products data.')
    }
    return res.json();
}