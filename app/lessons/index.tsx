import Welcome from "../components/Welcome";
import GrayscaleTextPre from "./grayscale/GrayscaleTextPre";
import GrayscaleLesson from "./grayscale/GrayscaleLesson";

export const lessons = [
    { id: 0, name: "start", component: Welcome, phase: "start" },
    { id: 1, name: "grayscaleText", component: GrayscaleTextPre, phase: "ongoing" },
    { id: 2, name: "grayscaleExample", component: GrayscaleLesson , phase: "ongoing" },
    { id: 3, name: "end", component: Welcome, phase: "end" }
]