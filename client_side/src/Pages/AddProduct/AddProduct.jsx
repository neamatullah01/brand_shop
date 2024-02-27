
const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newProduct = { name, image, brand, type, price, rating, description };
        console.log(newProduct);

        fetch('https://assignment-10-server-myux27iuc-neamatullah01.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    return (
        <div className="bg-[#ACA6A680] p-20 mt-6 rounded-xl">
            <h2 className="text-3xl font-extrabold text-[#F45E0C] pb-2">Add Product</h2>
            <form onSubmit={handleAddProduct}>
                <div className="md:flex md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" placeholder="Apple/Samsung/Sony/Google..." className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder="Phone/Laptop/Headphone..." className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Product Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="1/2/3.." className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <textarea type="text" name="description" placeholder="Short description" className="textarea textarea-accent w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-primary border-0 w-full bg-[#F45E0C] text-white" />

            </form>
        </div>
    );
};

export default AddProduct;