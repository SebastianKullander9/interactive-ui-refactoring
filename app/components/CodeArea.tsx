"use client";

interface CodeAreaProps {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
}

export default function CodeArea({state, setState}: CodeAreaProps) {
    return (
        <div className="w-full">
            <textarea
                className="bg-gray-100 w-full"
                value={state}
                onChange={(e) => setState(e.target.value)}
            ></textarea>
        </div>
    );
}