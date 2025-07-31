import IFrameArea from "@/app/components/IFrameArea";
import { formGrayscaleHtmlTailwindExample } from "./form-grayscale-html-tailwind-example";
import { buildHtmlWithTailwind } from "../build-lesson/build-html-with-tailwind";
import WavesBottomLeft from "@/app/components/WavesBottomLeft";

export default function GrayscaleExample() {
    return (
        <div className="h-[calc(100vh-10rem)] pt-4 flex flex-row container mx-auto gap-8">
            <div className="h-full w-1/2 flex flex-col justify-center">
                <h1 className="text-gray-800 font-bold text-6xl pb-8">Applying Color with Purpose</h1>
                <p className="text-gray-700 max-w-prose">We&apos;ve added color to our UI to enhance visual clarity. Since the interface was originally designed in grayscale, 
                    it already had a strong visual hierarchy, making it easy to apply color strategically. 
                    We focused on highlighting key calls to action to effectively draw the user&apos;s attention.</p>
            </div>
            <div className="h-[100%-10rem] mt-[10vh] w-1/2">
                <IFrameArea html={buildHtmlWithTailwind(formGrayscaleHtmlTailwindExample)} />
            </div>
            <WavesBottomLeft />
        </div>
    );
}