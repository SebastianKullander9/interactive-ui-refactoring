import { FiDownload } from "react-icons/fi";

export default function SystematicalDesignExamples() {
    return (
        <div>
            <h1>Design by exclusion</h1>
            <p>When you have systems like this in place you only need to pick the initial value once instead
                of all the time each time you build a new piece of UI. When you have these systems in place we can
                introduce designing by exclusion, elimination, or what you want to call it.
            </p>
            <p>To help you understand what this process of elimination looks like lets say you want to add a logo to a
                button. you have the constraints of the logo having the sizes 12px, 16px, 24px and 32px. You start by picking
                the size you imagine will look the best and then you try the values which are besides.
            </p>
            <div className="flex flex-row gap-4">
                <div>
                    <p className="flex justify-center">12px</p>
                    <button className="flex flex-row gap-2  items-center p-4 bg-custompurple text-white font-semibold rounded-md"><FiDownload size={12} />Download</button>
                </div>
                <div>
                    <p className="flex justify-center">14px</p>
                    <button className="flex flex-row gap-2  items-center p-4 bg-custompurple text-white font-semibold rounded-md"><FiDownload size={16} />Download</button>
                </div>
                <div>
                    <p className="flex justify-center">24px</p>
                    <button className="flex flex-row gap-2  items-center p-4 bg-custompurple text-white font-semibold rounded-md"><FiDownload size={24} />Download</button>
                </div>
            </div>
            <p>Here it is very easy to spot the best option and make a decision moving forward. If the middle option is the
                best, thats the correct choice, if any of the outer choices are the better choice, we do another comparison using
                that as the middle option and check if there is no better option.
            </p>
            <div className="flex flex-row gap-4">
                <div>
                    <p className="flex justify-center">16px</p>
                    <button className="flex flex-row gap-2  items-center p-4 bg-custompurple text-white font-semibold rounded-md"><FiDownload size={16} />Download</button>
                </div>
                <div>
                    <p className="flex justify-center">24px</p>
                    <button className="flex flex-row gap-2  items-center p-4 bg-custompurple text-white font-semibold rounded-md"><FiDownload size={24} />Download</button>
                </div>
                <div>
                    <p className="flex justify-center">32px</p>
                    <button className="flex flex-row gap-2  items-center px-4 py-3 bg-custompurple text-white font-semibold rounded-md"><FiDownload size={32} />Download</button>
                </div>
            </div>
        </div>
    );
}