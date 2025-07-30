import ApartmentCard from "./ApartmentCard";
import { useState } from "react";

export default function HierarchySize() {
    const [phase, setPhase] = useState(1);

    const nextPhase = () => {
        setPhase((prev) => (prev === 3 ? 1 : prev + 1))
    }

    const text = 
        phase === 1 
        ? `Dont rely too much on font sizes when trying to control your hierarchy. More often than not
                it will lead to primary content that is too large, and secondary content that is too small`
        : phase === 2
        ?  `Here we reduce the font size of the heading/price and give it some font weight`
        : `Lastly to improve the hierarchy we slightly increase the "normal" texts font size but at the same
            time gives it a lighter color without giving up too much contrast. From these small changes we can see a
            big improvement in the cards UI.`


    return (
        <div className="flex flex-row container mx-auto mt-4 h-[calc(100vh-10rem)]">
            <div className="w-1/2">
                <h1>Size isn&apos;t everything</h1>
                {text}
            </div>
            <div className="w-1/2">
                <ApartmentCard phase={phase}/>
                <div className="flex flex-row items-center mt-4 gap-4">
                    <button onClick={nextPhase} className="p-4 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-600 cursor-pointer">Next phase</button>
                    <p>Phase {phase} of 3</p>
                </div>
            </div>
        </div>
    );
}