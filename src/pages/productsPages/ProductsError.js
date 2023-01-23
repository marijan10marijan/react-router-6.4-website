import { Link, useRouteError } from 'react-router-dom';

const ProductsError = () => {

    const error = useRouteError();

    return (
        <div className="error">
            <h1 className='error__title'>Error!</h1>
            <h3>{error.message}</h3>
            <Link to='/'><button className='error__button'>Back to Home</button></Link>
        </div>
    );
}

export default ProductsError;