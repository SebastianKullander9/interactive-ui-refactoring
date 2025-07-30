export default function SystematicalDesign() {
    return (
        <div className="h-[calc(100vh-10rem)] overflow-auto">
            <h1>Design systematically</h1>
            <p>When alot of people think about design, they imagine the work being done creatively and intuitively
                , which is true to an extent. What most fail to realise is that design is also done very systematically.
                Especially when designing for the web or building User interfaces and i want to help you realise how to design
                systematically.
            </p>
            <p>Let&apos;s say you are set that you want your UI to include the color blue, instead of picking a new shade of blue
                every time you you need it, start with a set of options to choose from. A good start is defining 10 shades.
                It&apos;s not too much neither too little.
            </p>
            <div className="grid gap-4 grid-cols-4 lg:grid-cols-10 md:grid-cols-5">
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
            <p>Similarly you should not tweak the font size pixel by pixel until it looks good. This will most likely
                make you end up with big differences in typography in your site which will contribute to a worse looking UI.
                Instead have a set of defined font sizes and use those to make font size decisions.
            </p>
            <div className="flex items-baseline">
                <p className="underline decoration-gray-300 font-semibold">12px</p>
                <p className="text-white underline decoration-gray-300">-----</p>
                <p className="underline decoration-gray-300 text-[12px] decoration-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac vulputate magna.</p>
            </div>
            <div className="flex items-baseline">
                <p className="underline decoration-gray-300 font-semibold">14px</p>
                <p className="text-white underline decoration-gray-300">-----</p>
                <p className="underline decoration-gray-300 text-[14px] decoration-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac vulputate magna.</p>
            </div>
            <div className="flex items-baseline">
                <p className="underline decoration-gray-300 font-semibold">16px</p>
                <p className="text-white underline decoration-gray-300">-----</p>
                <p className="underline decoration-gray-300 text-[16px] decoration-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac vulputate magna.</p>
            </div>
            <div className="flex items-baseline">
                <p className="underline decoration-gray-300 font-semibold">18px</p>
                <p className="text-white underline decoration-gray-300">-----</p>
                <p className="underline decoration-gray-300 text-18px] decoration-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac vulputate magna.</p>
            </div>
            <div className="flex items-baseline">
                <p className="underline decoration-gray-300 font-semibold">20px</p>
                <p className="text-white underline decoration-gray-300">-----</p>
                <p className="underline decoration-gray-300 text-[20px] decoration-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac vulputate magna.</p>
            </div>
            <div className="flex items-baseline">
                <p className="underline decoration-gray-300 font-semibold">24px</p>
                <p className="text-white underline decoration-gray-300">-----</p>
                <p className="underline decoration-gray-300 text-[24px] decoration-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac vulputate magna.</p>
            </div>
            <div className="flex items-baseline">
                <p className="underline decoration-gray-300 font-semibold">32px</p>
                <p className="text-white underline decoration-gray-300">-----</p>
                <p className="underline decoration-gray-300 text-[32px] decoration-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac vulputate magna.</p>
            </div>
        </div>
    );
}