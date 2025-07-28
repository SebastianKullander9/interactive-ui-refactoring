interface IFrameAreaProps {
    html: string;
}

export default function IFrameArea({html}: IFrameAreaProps) {
    return (
        <div className="w-1/2">
            <iframe
                className="w-full h-full border-1 border-y-gray-950"
                srcDoc={html}
            ></iframe>
        </div>
    );
}