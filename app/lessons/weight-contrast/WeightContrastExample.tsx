import { MdDashboard } from "react-icons/md";
import { PiFileMagnifyingGlassFill } from "react-icons/pi";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaFolder } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";
import { useState } from "react";


export default function WeightContrastExample() {
    const [deEmphasized, setDeEmphasized] = useState(false);

    const iconColor =
    deEmphasized
    ? "text-gray-400"
    : "text-black"

    return (
        <div className="container mx-auto pt-8 h-[calc(100vh-10rem)] flex flex-row gap-8">
            <div className="w-1/2">
                <h1 className="text-gray-800 font-bold text-6xl pb-8">Using contrast to fight weight</h1>
                <p className="max-w-prose text-gray-700">One area where understanding this is important are when working with icons. Just like bold text, icons
                    are often pretty heavy and cover alot of surface area. As a result, when placing icons beside text, the
                    icon is the thing that becomes emphasized. In most cases we cant really change the weight of an icon, so 
                    to de-emphasize it we need another solution. A simple and effective way is to lower the contrast of the
                    icon by giving it a softer color.
                </p>
            </div>
            <div className="w-1/2 flex flex-col items-center gap-4">
                <div className="w-[200px] h-[350px] bg-white border-gray-300 shadow-sm p-5">
                    <p className="font-semibold text-gray-800 py-4">Main Menu</p>
                    <ul className="flex flex-col gap-3">
                        <li className="flex flex-row items-center gap-3 text-700"><MdDashboard size={26}  className={`${iconColor}`}/>Dashboard</li>
                        <li className="flex flex-row items-center gap-3 text-700"><PiFileMagnifyingGlassFill size={26}  className={`${iconColor}`}/> Overview</li>
                        <li className="flex flex-row items-center gap-3 text-700"><DiGoogleAnalytics size={26}  className={`${iconColor}`}/>Analytic</li>
                    </ul>
                    <p className="font-semibold text-gray-800 py-4">General</p>
                    <ul className="flex flex-col gap-3">
                        <li className="flex flex-row items-center gap-3 text-700"><FaFolder size={24}  className={`${iconColor}`}/>Projects</li>
                        <li className="flex flex-row items-center gap-3 text-700"><FaUserGroup size={24}  className={`${iconColor}`}/>Groups</li>
                        <li className="flex flex-row items-center gap-3 text-700"><FaFlag size={24}  className={`${iconColor}`}/>Reports</li>
                    </ul>
                </div> 
                <button onClick={() => setDeEmphasized(!deEmphasized)} className="p-4 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-600 cursor-pointer">{deEmphasized ? "Emphasize" : "De-emphasize"}</button>
            </div>
        </div>
    );
}