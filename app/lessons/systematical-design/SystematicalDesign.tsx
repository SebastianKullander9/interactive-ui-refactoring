export default function SystematicalDesign() {
    return (
        <div className="h-[calc(100vh-10rem)] overflow-auto container mx-auto flex flex-col justify-center">
            <h1 className="text-gray-800 font-bold text-6xl pb-8 flex items-start">Design systematically</h1>
            <div className="flex gap-16">
                <div className="w-1/2">
                    <p className="text-gray-700 max-w-prose">When most people think of design, 
                        they picture creativity and intuition at work. And while that&apos;s certainly part of the process, 
                        there’s another side that often goes unnoticed: <b>design is also deeply systematic</b>—especially 
                        when it comes to designing for the web and building user interfaces.
                        Understanding this structured approach is key to creating consistent, scalable designs.
                    </p><br></br>
                    <p className="text-gray-700 max-w-prose pb-8">Take color, for example. Say you&apos;ve decided that 
                        blue will be a part of your UI. Instead of choosing a different shade of blue every time you 
                        need it, create a predefined set of options. A great place to start is by defining 10 
                        consistent shades. This gives you enough variety to work with, without overwhelming your 
                        design system.
                    </p>
                    <div className="grid gap-4 grid-cols-4 lg:grid-cols-5 md:grid-cols-5">
                        <div className="p-5 bg-indigo-900 rounded-md"></div>
                        <div className="p-5 bg-indigo-800 rounded-md"></div>
                        <div className="p-5 bg-indigo-700 rounded-md"></div>
                        <div className="p-5 bg-indigo-600 rounded-md"></div>
                        <div className="p-5 bg-indigo-500 rounded-md"></div>
                        <div className="p-5 bg-indigo-400 rounded-md"></div>
                        <div className="p-5 bg-indigo-300 rounded-md"></div>
                        <div className="p-5 bg-indigo-200 rounded-md"></div>
                        <div className="p-5 bg-indigo-100 rounded-md"></div>
                        <div className="p-5 bg-indigo-50 rounded-md"></div>
                    </div>
                </div>
                <div className="w-1/2">
                    <p className="text-gray-700 max-w-prose pb-8">Just like with color, you shouldn&apos;t adjust font sizes 
                        pixel by pixel until they “feel right.” This approach often leads to inconsistent typography 
                        across your site, which can make your UI look unpolished or even chaotic.

                        Instead, define a <b>set of font sizes</b>, that you&apos;ll use consistently throughout 
                        your design. This not only helps maintain visual harmony but also makes your design decisions 
                        faster.
                    </p>
                    <div className="flex items-baseline text-gray-700 ">
                        <p className="underline decoration-gray-300 font-semibold">12px</p>
                        <p className="text-white underline decoration-gray-300">--</p>
                        <p className="underline decoration-gray-300 text-[12px] decoration-1">Typography sets the tone of your design.</p>
                    </div>
                    <div className="flex items-baseline text-gray-700 ">
                        <p className="underline decoration-gray-300 font-semibold">14px</p>
                        <p className="text-white underline decoration-gray-300">--</p>
                        <p className="underline decoration-gray-300 text-[14px] decoration-1">Typography sets the tone of your design.</p>
                    </div>
                    <div className="flex items-baseline text-gray-700 ">
                        <p className="underline decoration-gray-300 font-semibold">16px</p>
                        <p className="text-white underline decoration-gray-300">--</p>
                        <p className="underline decoration-gray-300 text-[16px] decoration-1">Typography sets the tone of your design.</p>
                    </div>
                    <div className="flex items-baseline text-gray-700 ">
                        <p className="underline decoration-gray-300 font-semibold">18px</p>
                        <p className="text-white underline decoration-gray-300">--</p>
                        <p className="underline decoration-gray-300 text-18px] decoration-1">Typography sets the tone of your design.</p>
                    </div>
                    <div className="flex items-baseline text-gray-700 ">
                        <p className="underline decoration-gray-300 font-semibold">20px</p>
                        <p className="text-white underline decoration-gray-300">--</p>
                        <p className="underline decoration-gray-300 text-[20px] decoration-1">Typography sets the tone of your design.</p>
                    </div>
                    <div className="flex items-baseline text-gray-700 ">
                        <p className="underline decoration-gray-300 font-semibold">24px</p>
                        <p className="text-white underline decoration-gray-300">--</p>
                        <p className="underline decoration-gray-300 text-[24px] decoration-1">Typography sets the tone of your design.</p>
                    </div>
                    <div className="flex items-baseline text-gray-700">
                        <p className="underline decoration-gray-300 font-semibold">32px</p>
                        <p className="text-white underline decoration-gray-300">--</p>
                        <p className="underline decoration-gray-300 text-[32px] decoration-1">Typography sets the tone of your design.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}