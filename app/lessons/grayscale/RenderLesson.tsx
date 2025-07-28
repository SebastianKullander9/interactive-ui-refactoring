"use client";
import CodeArea from "../../components/CodeArea";
import IFrameArea from "../../components/IFrameArea";
import { useState } from "react";
import { buildHtmlWithCss } from "../build-lesson/build-html-with-css";
import { formGrayscaleHtmlTailwind } from "./form-grayscale-html-tailwind";
import { formGrayscaleHtml } from "./form-grayscale-html";
import { formGrayscaleCss } from "./form-grayscale-css";

export default function RenderLesson() {
    const [css, setCss] = useState(formGrayscaleCss);
    const [htmlBody, setHtmlBody] = useState(formGrayscaleHtml);

    return (
        <div className="w-full h-[100vh] bg-gray-50 flex">
            <CodeArea state={htmlBody} setState={setHtmlBody} />
            <CodeArea state={css} setState={setCss} />
            <IFrameArea html={buildHtmlWithCss(htmlBody, css)} />
        </div>
    );
}
