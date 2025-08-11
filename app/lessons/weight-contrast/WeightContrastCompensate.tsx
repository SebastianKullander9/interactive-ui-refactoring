"use client";

import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineUpload } from "react-icons/ai";
import { useState } from "react";

export default function WeightContrastCompensate() {
    const [phase, setPhase] = useState(1);

    const border =
    phase === 1
        ? "border-b-1 border-gray-700"
        : phase === 2 
        ? "border-b-1 border-gray-200"
        : "border-b-2 border-gray-200"

    const handleNext = () => {
        setPhase((prev) => (prev % 3) + 1);
    }

    return (
        <div className="container mx-auto pt-8 h-[calc(100vh-10rem)] flex flex-row gap-8 overflow-auto">
            <div className="w-1/2">
                <h1 className="text-gray-800 font-bold text-6xl pb-8">Using weight to compensate for contrast</h1>
                <p className="max-w-prose text-gray-700 pb-4">Just how we decreased the contrast to de-emphasized before, we can also use weight to emphasize
                    low contrast elements. Here we can see an example where a 1 px border where a dark color makes it 
                    feel too harsh and noisy vs too subtle using a lighter color. We can then make the border heavier by
                    increasing its width. Doing this we dont lose the softer look.
                </p>
                <div className="flex flex-row items-center gap-4">
                    <button  onClick={handleNext} className="p-4 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-600 cursor-pointer">Change style</button><p>Phase {phase} of 3</p>
                </div>
            </div>
            <div className="w-1/2 flex justify-center">
                <div className="h-[600px] w-[400px] border-1 border-gray-200 shadow-sm">
                    <div className={`h-1/3 w-full flex flex-row ${border}`}>
                        <div className="w-2/10 h-full p-4 pt-6">
                            <img className="" src="profile1.svg" />
                        </div>
                        <div className="w-8/10 h-full p-5">
                            <p className="font-bold text-gray-800">John Doe</p>
                            <p className="font-semibold text-sm text-gray-600 pb-2">Human Resources Specialist</p>
                            <p className="text-gray-500 pb-4">We&apos;re excited to roll out new initiatives to support employee well-being and growth.</p>
                            <div className="flex flex-row justify-between text-gray-600">
                                <div className="flex flex-row items-center gap-2">
                                    <AiOutlineLike size={20} />
                                    <p>19</p>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <FaRegCommentAlt size={16} />
                                    <p>5</p>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <AiOutlineUpload size={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`h-1/3 w-full flex flex-row ${border}`}>
                        <div className="w-2/10 h-full p-4 pt-6">
                            <img className="" src="profile1.svg" />
                        </div>
                        <div className="w-8/10 h-full p-5">
                            <p className="font-bold text-gray-800">Jane Doe</p>
                            <p className="font-semibold text-sm text-gray-600 pb-2">Sr. Frontend Developer</p>
                            <p className="text-gray-500 pb-4">We&apos;re refining the UI to make everything faster, smoother, and more intuitive.</p>
                            <div className="flex flex-row justify-between text-gray-600">
                                <div className="flex flex-row items-center gap-2">
                                    <AiOutlineLike size={20} />
                                    <p>5</p>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <FaRegCommentAlt size={16} />
                                    <p>0</p>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <AiOutlineUpload size={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-1/3 w-full flex flex-row">
                        <div className="w-2/10 h-full p-4 pt-6">
                            <img className="" src="profile1.svg" />
                        </div>
                        <div className="w-8/10 h-full p-5">
                            <p className="font-bold text-gray-800">John Doe</p>
                            <p className="font-semibold text-sm text-gray-600 pb-2">Graphic Designer</p>
                            <p className="text-gray-500 pb-4">Visual storytelling matters. I&apos;m working on designs that not only look great but also communicate clearly.</p>
                            <div className="flex flex-row justify-between text-gray-600">
                                <div className="flex flex-row items-center gap-2">
                                    <AiOutlineLike size={20} />
                                    <p>110</p>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <FaRegCommentAlt size={16} />
                                    <p>29</p>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <AiOutlineUpload size={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}