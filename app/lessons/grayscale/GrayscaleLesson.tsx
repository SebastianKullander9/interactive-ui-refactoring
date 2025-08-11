"use client";
import CodeArea from "../../components/CodeArea";
import IFrameArea from "../../components/IFrameArea";
import { useState } from "react";
import { buildHtmlWithCss } from "../build-lesson/build-html-with-css";
import { buildHtmlWithTailwind } from "../build-lesson/build-html-with-tailwind";
import { formGrayscaleHtmlTailwind } from "./form-grayscale-html-tailwind";
import { formGrayscaleHtml } from "./form-grayscale-html";
import { formGrayscaleCss } from "./form-grayscale-css";

interface RenderLessonProps {
    tailwind: boolean;
}

export default function GrayscaleLesson({ tailwind }: RenderLessonProps) {
    const [css, setCss] = useState(formGrayscaleCss);
    const [BodyForCss, setBodyForCss] = useState(formGrayscaleHtml);
    const [BodyForTailwind, setBodyForTailwind] = useState(formGrayscaleHtmlTailwind);

    const [showHtml, setShowHtml] = useState(true);

    const toggleHtml = (bool: boolean) => {
        setShowHtml(bool);
    }

    return (
        <div className="container mx-auto h-[calc(100vh-10rem)] pt-4 flex gap-8">
            {tailwind ? 
                <>
                    <div className="h-full w-1/2 ">
                        <CodeArea state={BodyForTailwind} setState={setBodyForTailwind} adjustHeight={true} />
                    </div>
                    <div className="h-full w-full ">
                        <IFrameArea html={buildHtmlWithTailwind(BodyForTailwind)} />
                    </div>
                </>
            :
                <>
                    <div className="h-full w-1/2 ">
                        <div>
                            <div className="flex justify-center bg-gray-100">
                                <button onClick={() => toggleHtml(true)} className={`bg-gray-100 py-2 px-4 cursor-pointer text-gray-800 font-semibold ${showHtml ? "bg-gray-300" : "hover:bg-gray-200"}`}>HTML</button>
                                <button onClick={() => toggleHtml(false)} className={`bg-gray-100 py-2 px-4 cursor-pointer text-gray-800 font-semibold ${showHtml ? "hover:bg-gray-200" : "bg-gray-300"}`}>CSS</button>
                            </div>
                        </div>
                        {showHtml ? <CodeArea key="html" state={BodyForCss} setState={setBodyForCss} adjustHeight={true} /> 
                            : <CodeArea key="css" state={css} setState={setCss} adjustHeight={true} />
                        }
                    </div>
                    <div className="h-full w-1/2 ">
                        <IFrameArea html={buildHtmlWithCss(BodyForCss, css)} />
                    </div>
                </>
            }
        </div>
    );
}
