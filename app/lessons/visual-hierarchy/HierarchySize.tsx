import ApartmentCard from "./ApartmentCard";
import { useState } from "react";

export default function HierarchySize() {
    const [phase, setPhase] = useState(1);

    const nextPhase = () => {
        setPhase((prev) => (prev === 3 ? 1 : prev + 1))
    }


    const title =
        phase === 1
        ? "Size isn't everything"
        : phase === 2
        ? "Emphasize by Reducing"
        : "Small Adjustments, Big Impact"

    const text = 
        phase === 1 
        ? <>When establishing hierarchy, don&apos;t rely solely on font size. It&apos;s a common mistake to make primary content 
            overly large while shrinking secondary elements too much—resulting in a layout that feels 
            unbalanced and hard to read. <br /><br />Hierarchy can (and should) also be created through <b>font weight, color, 
            spacing, and placement</b>. Use size as one of several tools, not the only one.</>
        : phase === 2
        ?  <>Sometimes, making something <b>smaller</b> and more refined is what actually gives it more presence.<br /><br />
        For example, instead of increasing the size of a heading or a price to make it stand out, try <b>reducing the font
         size slightly and increasing the font weight</b>. This creates a more intentional, polished look—drawing attention
          through clarity, not volume. <br /><br />This approach helps your UI feel more confident and less aggressive,
           while still maintaining a clear sense of hierarchy.</>
        : <>To improve hierarchy further, try <b>slightly increasing the font size of your “normal” 
        text</b> while giving it a <b>lighter</b> color—just enough to soften it, without sacrificing readability or 
        contrast.<br /><br />These subtle adjustments help separate supporting content from key elements 
        without making anything feel hidden or too loud. It&apos;s a small change, but it can lead to a noticeable 
        improvement in the overall clarity and polish of your UI</>


    return (
        <div className="flex flex-row container mx-auto mt-8 h-[calc(100vh-10rem)] gap-8">
            <div className="w-1/2">
                <h1 className="text-gray-800 font-bold text-6xl pb-8">{title}</h1>
                <p className="text-gray-700 max-w-prose">{text}</p>
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