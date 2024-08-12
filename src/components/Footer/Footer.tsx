import { BsTwitter, BsYoutube } from "react-icons/bs"
import { CgFacebook, CgInstagram } from "react-icons/cg"
import appleIcon from "../../assets/store-apple.svg"
import playStore from "../../assets/store-googleplay.svg"

const Footer = () => {
    return (
        <div className="flex flex-col bg-[#021214] p-5 gap-5 mt-10 text-white pl-10">
            <div className="flex gap-5">
                <h1>Help Center</h1>
                <h1>|</h1>
                <h1>Contact us</h1>
                <h1>|</h1>
                <h1>Terms & Conditions</h1>
                <h1>|</h1>
                <h1>Privacy Policy</h1>
                <h1>|</h1>
                <h1>Account Deletion</h1>
                <h1>|</h1>
                <h1>Content Grievances </h1>
            </div>
            <div>
                <h1 className="text-gray-500">Copyright © 2024 LIONSGATEPLAY. All rights reserved.</h1>
            </div>
            <div className="flex gap-5">
                <CgFacebook size={35} className="text-white" />
                <CgInstagram size={35}/>
                <BsTwitter size={35}/>
                <BsYoutube size={35}/>
                <img className="w-[130px] border rounded-md" src={appleIcon} alt="" />
                <img className="w-[130px] border rounded-md" src={playStore} alt="" />
            </div>
        </div>
    )
}

export default Footer