"use client";

import { buildHtmlWithTailwind } from "../build-lesson/build-html-with-tailwind";
import { buildHtmlWithCss } from "../build-lesson/build-html-with-css";
import IFrameArea from "@/app/components/IFrameArea";
import CodeArea from "@/app/components/CodeArea";
import { profileCardWithLabelsHtmlTailwind } from "./profile-card-html-tailwind";
import { profileCardHtml } from "./profile-card-html";
import { profileCardCss } from "./profile-card-css";
import { useState } from "react";

export default function LabelsQuestion({ tailwind }: { tailwind: boolean }) {
    const [bodyForTailwind, setBodyForTailwind] = useState(profileCardWithLabelsHtmlTailwind);
    const [bodyForCss, setBodyForCss] = useState(profileCardHtml);
    const [css, setCss] = useState(profileCardCss);
    const [showHtml, setShowHtml] = useState(true);

    const toggleHtml = (bool: boolean) => {
        setShowHtml(bool);
    }

    return (
        <div className="h-[calc(100vh-10rem)] flex gap-8 mt-4 container mx-auto overflow-auto">
            {tailwind ? <>
                <div className="w-1/2 flex items-center flex-row">
                    <div className="w-full">
                        <CodeArea state={bodyForTailwind} setState={setBodyForTailwind} adjustHeight={false} />
                    </div>
                </div>
                <div className="w-1/2">
                    <h1 className="text-gray-800 font-bold text-6xl pb-8">Labels</h1>
                    <p className="text-gray-700 max-w-prose pb-8">Using what you&apos;ve learned so far, take a moment to think about how you could improve 
                        the hierarchy of this card by emphasizing or de-emphasizing certain elements. Consider 
                        what should stand out and what can be made more subtle.<br /><br />If you&apos;d like, you 
                        can edit the code to the left and experiment with changes directly. Go to the <b>next page</b> when you are
                        ready to see how we did.
                    </p>
                    <div className="h-[200px]">
                        <IFrameArea html={buildHtmlWithTailwind(bodyForTailwind)} />
                    </div>
                </div>
            </> : <>
                <div className="w-1/2">
                    <div>
                        <div className="flex justify-center bg-gray-100">
                            <button onClick={() => toggleHtml(true)} className={`bg-gray-100 py-2 px-4 cursor-pointer text-gray-800 font-semibold ${showHtml ? "bg-gray-300" : "hover:bg-gray-200"}`}>HTML</button>
                            <button onClick={() => toggleHtml(false)} className={`bg-gray-100 py-2 px-4 cursor-pointer text-gray-800 font-semibold ${showHtml ? "hover:bg-gray-200" : "bg-gray-300"}`}>CSS</button>
                        </div>
                    </div>
                    {showHtml ? <CodeArea key="html" state={bodyForCss} setState={setBodyForCss} adjustHeight={true} /> 
                        : <CodeArea key="css" state={css} setState={setCss} adjustHeight={true} />
                    }
                </div>
                <div className="w-1/2 h-[200px]">
                    <h1 className="text-gray-800 font-bold text-6xl pb-8">Labels</h1>
                    <p className="text-gray-700 max-w-prose pb-4">Using what you&apos;ve learned so far, take a moment to think about how you could improve 
                        the hierarchy of this card by emphasizing or de-emphasizing certain elements. Consider 
                        what should stand out and what can be made more subtle.<br /><br />If you&apos;d like, you 
                        can edit the code to the left and experiment with changes directly. Go to <b>the next</b> page when you are
                        ready to see how we did.
                    </p>
                    <IFrameArea html={buildHtmlWithCss(bodyForCss, css)} />
                </div>
            </>}
        </div>
    );
}