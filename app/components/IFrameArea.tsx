import { formGrayscaleHtmlTailwind } from "../lessons/grayscale/form-grayscale-html-tailwind";

interface IFrameAreaProps {
    html: string;
}

export default function IFrameArea({html}: IFrameAreaProps) {
    const iframeContent = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
            </head>
            <body>
                ${formGrayscaleHtmlTailwind}
            </body>
        </html>
    `;

    return (
        <div className="w-full">
            <iframe
                className="w-full h-1/2 border-1 border-y-gray-950"
                srcDoc={iframeContent}
            ></iframe>
        </div>
    );
}