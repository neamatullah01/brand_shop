
const Banner = () => {
    return (
        <div className="h-[80vh] w-full bg-[url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover">
            <div className="w-full h-full flex  justify-center items-center 
             bg-black-400/70">
                <div className="text-center">
                    <h2 className="text-white text-2xl md:text-5xl font-bold py-8">Building a WorldClass Brand<br /> with Techies</h2>
                    <div>
                        <input type="text" placeholder="Search your brand here..." className="py-3 px-4 md:rounded-l-lg w-full max-w-sm" />
                        <button className="mt-3 md:mt-0 btn btn-secondary bg-[#F45E0C] border-[#F45E0C] md:rounded-l-none">Search</button>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default Banner;