import { key } from "localforage";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Products = () => {
    const brand = useParams();
    const [allProduct, setAllProduct] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-10-server-myux27iuc-neamatullah01.vercel.app/products/${brand.brand_name}`)
            .then(res => res.json())
            .then(data => {
                setAllProduct(data)
            })
    }, [brand])
    return (
        <div>
            <div>

            </div>
            <div className="py-3 grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    allProduct.map(product =>
                        <div key={product._id} className="card lg:card-side bg-[#ACA6A680] shadow-zinc-900">
                            <figure className="w-3/5"><img className="w-full h-full" src={product.image} alt="Album" /></figure>
                            <div className="p-4 space-y-2">
                                <h2 className="card-title text-[#F45E0C]">{product.name}</h2>
                                <p className="font-medium">{product.brand}</p>
                                <h3 className="text-lg font-medium">{product.type}</h3>
                                <h2 className="text-lg font-medium text-[#F45E0C]">Price: {product.price}tk</h2>
                                <h2 className="text-sm font-medium">Rating: {product.rating}/5</h2>
                                <div className="flex gap-4">
                                    <Link to={`/details/${product._id}`}>
                                        <button className="btn btn-secondary bg-[#F45E0C] border-0">Details</button>
                                    </Link>
                                    <Link to="/update">
                                        <button className="btn btn-secondary bg-[#F45E0C] border-0">Update</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Products;