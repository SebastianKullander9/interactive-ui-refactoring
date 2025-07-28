import GrayscaleTextPre from "./grayscale/GrayscaleTextPre";
import GrayscaleLesson from "./grayscale/GrayscaleLesson";

export const lessons = [
    { id: 0, name: "start", component: "", phase: "start", buttons: ["next"]},
    { id: 1, name: "grayscaleText", component: GrayscaleTextPre, phase: "ongoing", buttons: ["prev", "next"]},
    { id: 2, name: "grayscaleExample", component: GrayscaleLesson , phase: "ongoing", buttons: ["prev", "next"]},
    { id: 3, name: "end", component: "end", phase: "end", buttons: ["prev"]}
]