"use client";
import CodeArea from "./components/CodeArea";
import IFrameArea from "./components/IFrameArea";
import { useState } from "react";
import { formGrayscaleHtmlTailwind } from "./lessons/grayscale/form-grayscale-html-tailwind";

export default function Home() {
	const [html, setHtml] = useState(formGrayscaleHtmlTailwind);
	
    return (
        <div className="w-full h-[100vh] bg-gray-50 flex">
        	<CodeArea state={html} setState={setHtml} />
			<IFrameArea html={html} />
        </div>
    );
}
