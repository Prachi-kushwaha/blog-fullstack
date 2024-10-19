import Image from "next/image"
import Sidebar from "../../components/admin-components/sidebar"
import { assets } from "../../Assets/assets"

export default function Layout({ children }) {
    return (
        <>
            <div className="flex">
                <Sidebar />
            <div className="flex flex-col w-full">
             <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
                <h3 className="font-medium">Admin panel</h3>
                 <Image src={assets.profile_icon} alt="logo" width={40}/>
             </div>
             {children}
            </div>
            </div>
            
        </>
    )
}