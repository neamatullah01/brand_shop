import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {

    const [allData, setAllData] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setAllData(data);;
            })
    }, [])
    return (
        <div>
            <h2 className="py-7 text-center text-3xl font-bold text-[#F45E0C]">Choose Your Brand</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-4">
                {
                    allData.map(data => <div key={data.id}>
                        <Link to={`/products/${data.brand_name}`}>
                            <div className="bg-white rounded-2xl shadow-lg">
                                <div className="flex justify-center items-center cursor-pointer"><img className="w-80 h-72 rounded-2xl" src={data.brand_logo} alt="" /></div>
                            </div>
                        </Link>
                        <h2 className="text-center text-2xl font-bold">{data.brand_name}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Brands;