import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-4xl text-center">
            <h1>Oopps!!!</h1>
            <hr />
            <h1>sorry</h1>
            <Link to='/' className="btn" >Home</Link>
        </div>
    );
};

export default ErrorPage;