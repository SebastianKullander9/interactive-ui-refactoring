"use client";
import { useState } from "react";
import RenderLesson from "./lessons/grayscale/GrayscaleLesson";

export default function Home() {
    const [tailwind, setTailwind] = useState(false);

    return (
        <div>
            <RenderLesson tailwind={tailwind}/>
        </div>
    );
}
