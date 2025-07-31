import ProfileCard from "./ProfileCard";
import { useState } from "react";

export default function IllustrateChanges() {
    const [phase, setPhase ] = useState(1);

    const nextPhase = () => {
        setPhase((prev) => (prev === 3 ? 1 : prev + 1))
    }

    const text =
        phase === 1
        ? <>As we covered earlier, using gray text is an effective way to de-emphasize content on a white background. 
        However, this technique doesn&apos;t translate as well to <b>colored backgrounds</b>.<br /><br />Why? Because gray 
        text typically has <b>reduced contrast</b> against colored surfaces, which can make it harder to read—even when 
        you&apos;re intentionally trying to downplay it.
        </>
        : phase === 2
        ? <>If we switch the background to <b>white or light gray</b>, gray text works much better. The contrast is restored,
         making the text easy to read while still appearing subtle.
        </>
        : <>When placing text on a colored background, many designers default to using <b>white text with reduced opacity</b>. 
        While this does lower contrast and can help de-emphasize the text, it often results in something that looks 
        <b>dull or washed out</b>.<br /><br />Worse, if the background includes an <b>image or pattern</b>, the transparent text 
        allows too much of the background to bleed through, making it harder to read.<br /><br />A better approach 
        is to <b>manually choose a text color</b> that complements the background. Start with a version of the background 
        color itself, then reduce its <b>saturation and lightness</b> until it provides just enough contrast while still 
        blending naturally with the background. This gives you a more polished, deliberate look.
        </>

    return (
        <div className="container mx-auto flex flex-row pt-8 h-[calc(100vh-10rem)] overflow-auto">
            <div className="w-1/2">
                <h1 className="text-gray-800 font-bold text-6xl pb-8">Text on color</h1>
                <p className="text-gray-700 max-w-prose">{text}</p>
            </div>
            <div className="w-1/2 flex flex-col items-center">
                <div>
                    <ProfileCard phase={phase} />
                    <div className="flex flex-row items-center mt-4 gap-4">
                        <button onClick={nextPhase} className="p-4 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-600 cursor-pointer">Next phase</button>
                        <p>Phase {phase} of 3</p>
                    </div>
                </div>
            </div>
        </div>
    );
}