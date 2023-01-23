import { useLoaderData, useParams } from "react-router-dom";

const SingleProduct = () => {

    const { id } = useParams();
    const singleProduct = useLoaderData();

    return (
        <div className="singleProduct">
            <h1>{singleProduct.name}</h1>
            <h3><b>Price: </b>{singleProduct.price} $</h3>
            <div className="details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deserunt, beatae ipsum alias necessitatibus facilis ullam vel minima quam repellat ratione? Aliquid fugit ratione distinctio ipsa dolor, sapiente officia molestiae?</p>
            </div>
        </div>
    );
}

export default SingleProduct;

export const singleProductLoader = async ({ params }) => {

    const res = await fetch('http://localhost:7000/products/' + params.id);

    if (!res.ok) {
        throw Error('Could not fetch Item you searching for.')
    }
    return res.json();
}