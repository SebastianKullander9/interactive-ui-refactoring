export default function SystematicalDesignEnd() {
    return (
        <div className="container mx-auto h-[calc(100vh-10rem)] overflow-auto">
            <div className="flex gap-8 items-center pt-8">
                <div className="w-1/2">
                    <h1 className="text-gray-800 font-bold text-6xl pb-8">Have a System for Everything</h1>
                    <p className="text-gray-700 max-w-prose pb-4">Ideally, you want to build a system for every aspect of your UI. The more systems you put in place, 
                        the faster you&apos;ll be able to work—and the less time you&apos;ll spend second-guessing your design choices.
                        <br></br>
                        <br></br>
                        Some key areas where systems make a big impact include:
                    </p>
                    <ul className="text-gray-700 max-w-prose list-disc list-inside grid grid-cols-2 pb-4">
                        <li>Font size</li>
                        <li>Font weight</li>
                        <li>Line height</li>
                        <li>Color</li>
                        <li>Padding</li>
                        <li>Margin</li>
                        <li>Width</li>
                        <li>Height</li>
                        <li>Box shadows</li>
                        <li>Border radius</li>
                        <li>Border width</li>
                        <li>Opacity</li>
                    </ul>
                    <p className="text-gray-700 max-w-prose">You don&apos;t need to define all of these from the start. What matters is adopting a <b>systematic mindset </b>  
                        as you design. Start small, and expand your design system as your project grows. It&apos;s not about 
                        rigid rules—it&apos;s about making thoughtful, repeatable decisions.
                    </p>
                </div>
                <div className="w-1/2">
                    <img src="systematicaldesign.svg" alt="Illustration of a person looking at a user interface"/>
                </div>
            </div>
        </div>
    );
}