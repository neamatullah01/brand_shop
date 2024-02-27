
const TeamMember = () => {
    return (
        <div className="py-4 md:pt-8 space-y-1">
            <h2 className="text-center text-lg font-semibold text-[#F45E0C]">TEAM MEMBER</h2>
            <h1 className="text-center text-4xl font-bold text-black">Meet our professional and expert team<br /> members</h1>
            <div className="md:flex md:justify-around items-center pt-6">
                <div className="flex md:flex-none justify-center mb-4 md:mb-0">
                    <div>
                        <div>
                            <img className=" w-72 h-80 rounded-xl" src={`https://imageio.forbes.com/specials-images/imageserve/61b9144f65931aadf0fc3b9c/Apple-s--CEO-Tim-Cook/960x0.jpg?format=jpg&width=960`} alt="Shoes" />
                        </div>
                        <div className="flex justify-center -mt-7">
                            <div className="w-4/5 bg-slate-200 rounded-lg text-center items-center space-y-1 py-2 shadow-md">
                                <h2 className="text-lg font-semibold">Tim Cook</h2>
                                <p className="text-sm">CEO & Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-none justify-center mb-4 md:mb-0">
                    <div>
                        <div>
                            <img className="w-72 h-80 rounded-xl" src={`https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQYAx0cYWWX1Wo7U7vu2vSTI3mgcDCEavEr0Z5ZFqTVVR4pM50sSJzJ4Et9fnsGQ1sk`} alt="Shoes" />
                        </div>
                        <div className="flex justify-center -mt-7">
                            <div className="w-4/5 bg-slate-200 rounded-lg text-center items-center space-y-1 py-2 shadow-md">
                                <h2 className="text-lg font-semibold">Jony Ive</h2>
                                <p className="text-sm">Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-none justify-center mb-4 md:mb-0">
                    <div>
                        <div>
                            <img className=" w-72 h-80 rounded-xl" src={`https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRzl0C7Cu9qNu9abrFjId9Kn2xJSRheKxuXpcjTsG5jqKyByIeO`} alt="Shoes" />
                        </div>
                        <div className="flex justify-center -mt-7">
                            <div className="w-4/5 bg-slate-200 rounded-lg text-center items-center space-y-1 py-2 shadow-md">
                                <h2 className="text-lg font-semibold">Steve Jobs</h2>
                                <p className="text-sm">Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-none justify-center mb-4 md:mb-0">
                    <div>
                        <div>
                            <img className=" w-72 h-80 rounded-xl" src={`https://cdn.britannica.com/42/193142-050-F69B1A23/Sundar-Pichai-Google.jpg`} alt="Shoes" />
                        </div>
                        <div className="flex justify-center -mt-7">
                            <div className="w-4/5 bg-slate-200 rounded-lg text-center items-center space-y-1 py-2 shadow-md">
                                <h2 className="text-lg font-semibold">Sundar Pichai</h2>
                                <p className="text-sm">CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;