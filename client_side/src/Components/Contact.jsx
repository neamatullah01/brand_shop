import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className="md:h-[40vh] bg-slate-200 rounded-md space-y-2 pb-2 md:pb-0">
            <h2 className="text-center text-lg font-semibold text-[#F45E0C] pt-4">CONTACT US</h2>
            <h1 className="text-center text-4xl font-bold text-black">Connect with us anytime you need help!</h1>
            <div className="md:flex md:justify-around space-y-3 md:space-y-0 pt-3 md:pt-12">
                <div className="flex gap-3">
                    <div className="w-20 h-20 border-2 border-[#F45E0C] flex justify-center items-center"><FaLocationDot className="text-3xl"></FaLocationDot></div>
                    <div>
                        <h2 className="text-xl font-bold">Office Location</h2>
                        <p>Graaf Florisstraat 22A, 3021 CH<br /> Rotterdam Netherlands</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="w-20 h-20 border-2 border-[#F45E0C] flex justify-center items-center"><FaPhone className="text-3xl"></FaPhone></div>
                    <div>
                        <h2 className="text-xl font-bold">Phone</h2>
                        <p>+1 (456)-657-888</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="w-20 h-20 border-2 border-[#F45E0C] flex justify-center items-center"><FaEnvelope className="text-3xl"></FaEnvelope></div>
                    <div>
                        <h2 className="text-xl font-bold">Work inquiries</h2>
                        <p>techies.info@gmail.com<br /> techies.office@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;