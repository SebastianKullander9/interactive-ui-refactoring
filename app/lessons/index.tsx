import Welcome from "../components/Welcome";
import GrayscaleTextPre from "./grayscale/GrayscaleTextPre";
import GrayscaleLesson from "./grayscale/GrayscaleLesson";
import GrayscaleExample from "./grayscale/GrayscaleExample";
import SystematicalDesign from "./systematical-design/SystematicalDesign";
import SystematicalDesignExamples from "./systematical-design/SystematicalDesignExamples";
import SystematicalDesignEnd from "./systematical-design/SystematicalDesignEnd";
import VisualHierarchyIntro from "./visual-hierarchy/VisualHierarchyIntro";
import HierarchySize from "./visual-hierarchy/HierarchySize";

export const lessons = [
    { id: 0, name: "start", component: Welcome, phase: "start" },
    { id: 1, name: "grayscaleText", component: GrayscaleTextPre, phase: "ongoing" },
    { id: 2, name: "grayscaleLesson", component: GrayscaleLesson , phase: "ongoing" },
    { id: 3, name: "grayscaleExample", component: GrayscaleExample, phase: "ongoing" },
    { id: 4, name: "systematicalDesign", component: SystematicalDesign, phase: "ongoing"},
    { id: 5, name: "systematicalDesignExamples", component: SystematicalDesignExamples, phase: "ongoing" },
    { id: 6, name: "systematicalDesignEnd", component: SystematicalDesignEnd, phase: "ongoing" },
    { id: 7, name: "visualHierarchyIntro", component: VisualHierarchyIntro, phase: "ongoing" },
    { id: 8, name: "hierarchySize", component: HierarchySize, phase: "ongoing" },
]