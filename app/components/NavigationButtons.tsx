import { FC } from "react";

interface Lesson {
    id: number;
    name: string;
    phase: string;
}

interface NavigationButtonsProps {
    lessons: Lesson[],
    handlePrev: () => void;
    handleNext: () => void;
    pageIndex: number;
    setPageIndex: (index: number) => void;
    phase: string;
}

export default function NavigationButtons({ lessons, handlePrev, handleNext, pageIndex, setPageIndex, phase}: NavigationButtonsProps) {
    return (
        <div className="flex gap-2">
            <button disabled={phase === "start" ? true : false} onClick={handlePrev} className={`py-4 px-8 font-semibold border-1 border-gray-300 rounded-sm ${phase === "start" ? "bg-gray-50 hover:bg-gray-50 text-gray-300 border-gray-200 cursor-not-allowed" : "bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300 cursor-pointer"}`}>Prev</button>
            {lessons.map(({id}) => {
                return <button key={id} onClick={() => setPageIndex(id)} className={`bg-gray-100 py-4 px-6 font-semibold border-1 border-gray-300 rounded-sm cursor-pointer hover:bg-gray-200 ${id === pageIndex ? "bg-gray-800 text-gray-50 hover:bg-gray-800 border-gray-800" : "text-gray-800"}`}>{id + 1}</button>
            })}
            <button disabled={phase === "end" ? true : false} onClick={handleNext} className={`flex flex-row items-center gap-2 py-4 px-8 font-semibold border-1 rounded-sm  ${phase === "end" ? "bg-gray-50 hover:bg-gray-50 text-gray-300 border-gray-200 cursor-not-allowed" : "bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300 cursor-pointer"}`}>Next</button>
        </div>
    );
}