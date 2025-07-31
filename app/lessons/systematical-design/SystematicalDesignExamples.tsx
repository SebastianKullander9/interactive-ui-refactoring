import { FiDownload } from "react-icons/fi";

export default function SystematicalDesignExamples() {
    return (
        <div className="container mx-auto">
            <h1 className="text-gray-800 font-bold text-6xl pb-8 pt-8">Design by exclusion</h1>
            <div className="grid grid-cols-2 gap-16">
                <div className="flex flex-col">
                    <p className="text-gray-700 max-w-prose pb-4">Once you have systems in place—like a consistent set of 
                        font sizes, colors, or spacing—you no longer have to make design decisions from scratch every 
                        time. You only need to make the <b>initial choices once</b>, and then you design by narrowing down 
                        options within that system.
                        <br></br><br></br>
                        This is what we call <b>design by exclusion</b> (or elimination). Rather than picking from an 
                        infinite number of possibilities, you&apos;re choosing from a small, intentional set of predefined 
                        options.
                        <br></br><br></br>
                        For example, imagine you&apos;re adding a logo to a button. Your design system provides 
                        four possible logo sizes: <b>12px, 16px, 24px, and 32px</b>. Instead of guessing randomly, 
                        start by selecting the size you think will work best—then test one size up and one size 
                        down. By eliminating options that clearly don&apos;t work, you quickly arrive at the most 
                        fitting choice.
                    </p>
                    <div className="flex flex-row gap-4 justify-center">
                        <div>
                            <p className="flex justify-center text-gray-700 font-semibold text-sm">12px</p>
                            <button className="flex flex-row gap-2  items-center p-4 bg-custompurple text-white font-semibold rounded-md"><FiDownload size={12} />Download</button>
                        </div>
                        <div>
                            <p className="flex justify-center text-gray-700 font-semibold text-sm">14px</p>
                            <button className="flex flex-row gap-2  items-center p-4 bg-custompurple text-white font-semibold rounded-md"><FiDownload size={16} />Download</button>
                        </div>
                        <div>
                            <p className="flex justify-center text-gray-700 font-semibold text-sm">24px</p>
                            <button className="flex flex-row gap-2  items-center p-4 bg-custompurple text-white font-semibold rounded-md"><FiDownload size={24} />Download</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-700 max-w-prose pb-4">In this setup, making a decision becomes much easier. 
                        If the middle option looks best, you&apos;ve found your answer. If one of the alternatives works 
                        better, you simply repeat the process—set that better option as the new “middle” and compare
                         it with the next available sizes.
                        <br></br><br></br>
                        This method helps you arrive at the optimal choice efficiently, without relying 
                        on guesswork or endless tweaking. It&apos;s a simple, structured way to make design 
                        decisions.
                    </p>
                    <div className="flex flex-row gap-4 justify-center">
                        <div>
                            <p className="flex justify-center">16px</p>
                            <button className="flex flex-row gap-2  items-center p-4 bg-custompurple text-white font-semibold rounded-md text-gray-700 font-semibold text-sm"><FiDownload size={16} />Download</button>
                        </div>
                        <div>
                            <p className="flex justify-center">24px</p>
                            <button className="flex flex-row gap-2  items-center p-4 bg-custompurple text-white font-semibold rounded-md text-gray-700 font-semibold text-sm"><FiDownload size={24} />Download</button>
                        </div>
                        <div>
                            <p className="flex justify-center">32px</p>
                            <button className="flex flex-row gap-2  items-center px-4 py-3 bg-custompurple text-white font-semibold rounded-md text-gray-700 font-semibold text-sm"><FiDownload size={32} />Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}