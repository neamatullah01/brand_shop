import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
    const allProduct = useLoaderData();

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-10-server-myux27iuc-neamatullah01.vercel.app/carts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div>
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
                                <div className="w-1/2">
                                    <button onClick={()=>handleDelete(product._id)} className="btn btn-secondary w-full bg-[#F45E0C] border-0">Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyCart;