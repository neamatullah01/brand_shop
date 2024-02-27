import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const id = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-10-server-myux27iuc-neamatullah01.vercel.app/details/${id.id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [id])

    const handleCartAdd = () => {
        fetch('https://assignment-10-server-myux27iuc-neamatullah01.vercel.app/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('added')
            })
    }
    return (
        <div className="py-2 flex justify-center">
            <div className="card card-compact w-3/5 bg-[#ACA6A680] shadow-xl">
                <figure className="h-4/5"><img className="w-full h-full" src={product.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.description}</p>
                    <p className="text-sm font-medium">Price: {product.price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleCartAdd} className="btn btn-primary">Add Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;