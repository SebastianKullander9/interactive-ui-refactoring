interface IFrameAreaProps {
    html: string;
}

export default function IFrameArea({html}: IFrameAreaProps) {
    return (
        <div className="w-1/2">
            <iframe
                className="w-full h-full"
                srcDoc={html}
            ></iframe>
        </div>
    );
}