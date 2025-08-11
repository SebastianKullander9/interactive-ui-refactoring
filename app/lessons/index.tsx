import Welcome from "../components/Welcome";
import GrayscaleTextPre from "./grayscale/GrayscaleTextPre";
import GrayscaleLesson from "./grayscale/GrayscaleLesson";
import GrayscaleExample from "./grayscale/GrayscaleExample";
import SystematicalDesign from "./systematical-design/SystematicalDesign";
import SystematicalDesignExamples from "./systematical-design/SystematicalDesignExamples";
import SystematicalDesignEnd from "./systematical-design/SystematicalDesignEnd";
import VisualHierarchyIntro from "./visual-hierarchy/VisualHierarchyIntro";
import HierarchySize from "./visual-hierarchy/HierarchySize";
import IllustrateChanges from "./text-on-background/IllustrateChanges";
import LabelsQuestion from "./labels/LabelsQuestion";
import LabelsAnswer from "./labels/LabelsAnswer";
import MoreExamples from "./labels/MoreExamples";
import weightContrastPreText from "./weight-contrast/WeightContrastPreText";
import WeightContrastExample from "./weight-contrast/WeightContrastExample";
import WeightContrastCompensate from "./weight-contrast/WeightContrastCompensate";
import SemanticsButtons from "./semantics/SemanticsButtons";

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
    { id: 9, name: "colorOnBackground", component: IllustrateChanges, phase: "ongoing" },
    { id: 10, name: "labelsQuestion", component: LabelsQuestion, phase: "ongoing" },
    { id: 11, name: "labelsAnswer", component: LabelsAnswer, phase: "ongoing" },
    { id: 12, name: "moreExamples", component: MoreExamples, phase: "ongoing"},
    { id: 13, name: "weightContrastPreText", component: weightContrastPreText, phase: "ongoing"},
    { id: 14, name: "weightContrastExample", component: WeightContrastExample, phase: "ongoing"},
    { id: 15, name: "weightContrastCompensate", component: WeightContrastCompensate, phase: "ongoing"},
    { id: 16, name: "semanticsButtons", component: SemanticsButtons, phase: "ongoing"},
]