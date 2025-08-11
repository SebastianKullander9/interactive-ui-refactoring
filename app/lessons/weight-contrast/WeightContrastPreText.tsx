export default function weightContrastPreText() {
    return (
        <div className="container mx-auto flex flex-col pt-8 h-[calc(100vh-10rem)]">
            <div className="flex flex-row">
                <div className="max-w-prose w-1/2">
                    <h1 className="text-gray-800 font-bold text-6xl pb-8">Balancing weight and contrast</h1>
                    <p className="text-gray-700">Bold text feels more emphasized compared to a regular font weight. The reason for this is that
                        bold text covers more surface area. We can explain it by saying, in the same amount of space, more 
                        pixels are used for the the text rather than the background.
                    </p>
                    <div className="flex flex-row gap-4">
                        <p className="text-[80px] font-bold">A</p>
                        <p className="text-[80px] font-thin">A</p>
                    </div>
                    <p className="text-gray-700">So why do we want to know this? In fact, the relationship between surface area and hierarchy have implications
                        on other elements in a user interface aswell, not just text.
                    </p>
                </div>
                <div className="w-1/2">
                    <img className="w-8/10 mx-auto" src="balance.svg" alt="illustration of a person doing yoga/in this case balancing"/>
                </div>
            </div>
        </div>
    );
}