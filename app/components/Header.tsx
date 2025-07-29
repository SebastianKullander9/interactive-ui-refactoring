interface HeaderProps {
    tailwind: boolean;
    toggleCode: () => void;
}

export default function Header({ tailwind, toggleCode }: HeaderProps) {
    return (
        <div className="h-16 border-b-1 border-gray-300 px-4 flex items-center">
            <div className="container mx-auto flex justify-between">
                <p className="text-xl font-bold text-gray-800">LearnUI</p>
                <div className="flex flex-row gap-2">
                    <p>Tailwind</p>
                    <div onClick={toggleCode} className="h-7 w-12 bg-gray-500 rounded-full p-1 cursor-pointer">
                        <div className={`h-full w-1/2 bg-white rounded-full ${tailwind ? "float-left" : "float-right"}`}></div>
                    </div>
                    <p>CSS</p>
                </div>
            </div>
        </div>
    );
}