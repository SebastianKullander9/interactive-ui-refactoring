"use client";
import { useState, useEffect } from "react";
import { lessons } from "./lessons";
import Header from "./components/Header";
import NavigationButtons from "./components/NavigationButtons";

export default function Home() {
    const [pageIndex, setPageIndex] = useState(0);
    const [phase, setPhase] = useState("start");
    const [tailwind, setTailwind] = useState(false);

    const currentLesson = lessons.find(({ id }) => id === pageIndex);
    const LessonComponent = currentLesson?.component;

    const toggleCode = () => {
        setTailwind(!tailwind);
    }

    const handlePrev = () => {
        setPageIndex(pageIndex - 1);
    }

    const handleNext = () => {
        setPageIndex(pageIndex + 1);
    }

    useEffect(() => {
        if (!currentLesson) return;

        setPhase(currentLesson.phase);
    }, [pageIndex])

    return (
        <div>
            <Header tailwind={tailwind} toggleCode={toggleCode}/>

            {LessonComponent && typeof LessonComponent === "function" ? (
                <LessonComponent tailwind={tailwind}/>
            ) : (
                <div>No lesson found.</div>
            )}

            <NavigationButtons 
                lessons={lessons}
                handlePrev={handlePrev}
                handleNext={handleNext}
                pageIndex={pageIndex}
                setPageIndex={setPageIndex}
                phase={phase}
            />
        </div>
    );
}
