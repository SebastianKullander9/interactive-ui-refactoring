"use client";
import { IoIosStar } from "react-icons/io";

export default function ApartmentCard({ phase }: { phase: number } ) {
    const headingStyle =
        phase === 1
        ? "text-[30px]"
        : phase === 2
        ? "text-[24px] font-bold text-gray-800"
        : "text-[24px] font-bold text-gray-800";

    const priceStyle = 
        phase === 1
        ? "text-[24px]"
        : phase === 2
        ? "text-[18px] font-bold"
        : "text-[18px] font-bold";

    const primaryTextStyle = 
        phase === 1
        ? "text-[16px]"
        : phase === 2
        ? "text-[16px]"
        : "text-[18px] text-gray-500"

    const secondaryTextStyle =
        phase === 1
        ? "text-[14px]"
        : phase === 2
        ? "text-[14px]"
        : "text-[16px] text-gray-500"


    return (
        <div className="w-full h-[280px] rounded-xl bg-gray-100 shadow-md border-1 border-gray-300">
            <div className="w-full h-full flex">
                <div className="h-full w-4/10 overflow-hidden">
                    <img src="/apartment1.jpg" alt="Lines illustrated as a skyscraper" className="w-full h-full object-cover rounded-tl-xl rounded-bl-xl"/>
                </div>
                <div className="h-full w-7/10">
                    <div className="h-1/2 p-4 bg-white">
                        <p className={`${headingStyle}`}>Beautiful apartments</p>
                        <p className={`${primaryTextStyle}`}>Book one of our beautiful apartments next time you visit greece.</p>
                    </div>
                    <div className="h-1/2 p-4 flex items-center justify-between">
                        <div className="flex flex-col gap-4">
                            <p className={`${primaryTextStyle}`}><span className={`${priceStyle} text-gray-800`}>$54</span> per night*</p>
                            <div className="flex flex-row items-center gap-2">
                                <div className="flex flex-row text-indigo-500">
                                    <IoIosStar size={24}/><IoIosStar size={24}/><IoIosStar size={24}/><IoIosStar size={24}/><IoIosStar size={24}/>
                                </div>
                                <p className={`${secondaryTextStyle}`}>35 reviews</p>
                            </div>
                            <p className={`${secondaryTextStyle}`}>*Prices will vary depending on date</p>
                        </div>
                        <div>
                            <button className="p-4 font-bold text-white rounded-md bg-indigo-500 hover:bg-indigo-600 cursor-pointer shadow-lg">Book now</button>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
}
