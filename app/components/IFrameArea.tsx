interface IFrameAreaProps {
    html: string;
}

export default function IFrameArea({html}: IFrameAreaProps) {
    return (
        <div className="h-full">
            <iframe
                className="w-full h-full"
                srcDoc={html}
            ></iframe>
        </div>
    );
}