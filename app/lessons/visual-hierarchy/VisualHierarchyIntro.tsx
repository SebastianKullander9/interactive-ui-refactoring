export default function VisualHierarchyIntro() {
    return (
        <div className="container mx-auto pt-8 h-[calc(100vh)-10rem]">
            <div className="flex gap-8">
                <div className="w-1/2 text-gray-700">
                    <h1 className="text-gray-800 font-bold text-6xl pb-8">Hierarchy is everything</h1>
                    <p className="pb-4 max-w-prose">Once you have a solid system in place, it&apos;s time to refine the details—the subtle things that can
                        make a major difference in how your UI looks and feels.
                        <br></br><br></br>
                        In this next section, we&apos;ll go over a few principles that help strengthen visual hierarchy and 
                        improve clarity, including:
                    </p>
                    <ul className="list-disc list-inside max-w-prose">
                        <li>Creating clear <b>hierarchy</b></li>
                        <li>Making text work on <b>background colors</b></li>
                        <li>Emphasizing by <b>de-emphasizing</b> other elements</li>
                        <li>Using <b>labels</b> effectively</li>
                    </ul>
                </div>
                <div className="w-1/2 flex justify-center">
                    <img src="hierarchy2.svg" alt="illustration of hierarchy" />
                </div>
            </div>
        </div>
    );
}