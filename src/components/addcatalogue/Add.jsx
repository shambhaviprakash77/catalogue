import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Add = () => {
    const cataloguerrs = {
        title: "",
        author: "",
        publisher: "",
        number_of_copies: "",
        price: ""
    };
    
    const [catalogue, setcatalogue] = useState(cataloguerrs);
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setcatalogue({ ...catalogue, [name]: value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create", catalogue)
            .then((res) => {
                toast.success(res.data.msg,{ position: "top-right" });
                navigate("/");
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className="container mt-5">
            <Link to="/" className="btn btn-secondary mb-3">Back</Link>
            <h1 className="text-center mb-4">Catalogue Details</h1>
            <form onSubmit={submitForm}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title of the Catalogue:</label>
                    <input
                        type="text"
                        onChange={inputHandler}
                        className="form-control"
                        id="title"
                        name="title"
                        placeholder="Enter title"
                        
                        
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author of the Catalogue:</label>
                    <input
                        type="text"
                        onChange={inputHandler}
                        className="form-control"
                        id="author"
                        name="author"
                        placeholder="Enter author name"
                       
                        
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="publisher" className="form-label">Publisher Name:</label>
                    <input
                        type="text"
                        onChange={inputHandler}
                        className="form-control"
                        id="publisher"
                        name="publisher"
                        placeholder="Enter publisher name"
                       
                        
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="number_of_copies" className="form-label">Number of Copies:</label>
                    <input
                        type="number"
                        onChange={inputHandler}
                        className="form-control"
                        id="number_of_copies"
                        name="number_of_copies"
                        placeholder="Enter number of copies"
                        
                        
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price of the Catalogue:</label>
                    <input
                        type="number"
                        onChange={inputHandler}
                        className="form-control"
                        id="price"
                        name="price"
                        placeholder="Enter price"
                        


                        
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Add;
