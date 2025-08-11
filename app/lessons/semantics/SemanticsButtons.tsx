"use client";

import { useState } from "react";

export default function SemanticsButtons() {
    const [semanticsFixed, setSemanticsFixed] = useState(false);

    return (
        <div className="container mx-auto pt-8 h-[calc(100vh-10rem)] flex flex-row gap-8">
            <div className="w-1/2">
                <h1 className="text-gray-800 font-bold text-6xl pb-8">Semantics are secondary</h1>
                <p className="max-w-prose text-gray-700">When there is multiple options in a user interface its easy to fall into the trap of designing these
                    options purely based on semantics. Dont get it wrong, semantics are an important part of designing
                    buttons, however hierarchy can&apos;t be forgotton. 

                    Primary actions should be obvious. Solid, high contrast background colors work great for this.

                    Secondary actions should be clear but not prominent. Outline styles or lower contrast backgrounds 
                    do the work here.

                    Tertiary actions should be discoverable but unobtrusive. Styling these as links often do the job.
                    Outline styles could also be an option here.

                    By introducing a hierarchy first approach, the result is often a less busy UI that communicates more clearly
                </p>
            </div>
            <div className="w-1/2 flex flex-col justify-center gap-4">
                <div className="w-[600px] h-[250px] flex flex-row border-1 border-gray-300 shadow-md rounded-md">
                    <div className="w-3/10 h-full bg-custompurple rounded-tl-md rounded-bl-md">

                    </div>
                    <div className="w-7/10 h-full p-5 flex flex-col justify-between">
                        <div>
                            <div className="flex flow-row justify-between">
                                <h1 className="font-semibold text-700">Ceramic Coffee Mug</h1>
                                <p className="font-bold text-900">$14.99</p>
                            </div>
                            <p className="text-sm text-gray-500">Greater Stockholm Metropolitan area</p>
                            <p className="text-gray-500 pt-6">A sleek, matte-finish mug perfect for your morning coffee. Designed for comfort and style.</p>
                        </div>
                        <div>
                            <div className="flex flex-row justify-between">
                                <button className={`p-3 ${semanticsFixed ? "bg-white text-gray-700" : "bg-red-500 text-white"} rounded-lg font-semibold`}>Delete listing</button>
                                <div className="flex gap-2">
                                    <button className={`p-3 ${semanticsFixed ? "bg-indigo-100 text-gray-700" : "bg-blue-500 text-white"} rounded-lg font-semibold`}>Edit</button>
                                    <button className={`p-3 text-white ${semanticsFixed ? "bg-custompurple" : "bg-green-500"} rounded-lg font-semibold`}>Publish</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => setSemanticsFixed(!semanticsFixed)} className="max-w-[150px] p-4 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-600 cursor-pointer">Change style</button>
            </div>
        </div>
    );
}