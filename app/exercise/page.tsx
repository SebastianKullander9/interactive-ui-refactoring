"use client";
import { useState } from "react";
import Header from "../components/Header";
import GrayscaleLesson from "../lessons/grayscale/GrayscaleLesson";

export default function Exercise() {
    const [tailwind, setTailwind] = useState(true);

    const toggleCode = () => {
        setTailwind(!tailwind);
    }

    return (
        <div>
            <Header tailwind={tailwind} toggleCode={toggleCode} />
            <GrayscaleLesson tailwind={tailwind}/>
        </div>
    );
}
