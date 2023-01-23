import { Outlet } from "react-router-dom";

const ProductsLayout = () => {
    return (
        <div className="container productsLayout">
            <h1>Enjoy in Our Products</h1>
            <Outlet />
        </div>
    );
}

export default ProductsLayout;