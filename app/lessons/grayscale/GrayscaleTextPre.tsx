import WavesTopRight from "@/app/components/WavesTopRight";

export default function GrayscaleTextPre() {
    return (
        <div>
            <WavesTopRight />
            <div className="container mx-auto flex h-[calc(100vh-4rem)] items-center">
                <div className="w-1/2">
                    <h1 className="text-gray-800 font-bold text-6xl pb-16">Designing with Grayscale</h1>
                    <p className="text-gray-700 max-w-prose">You&apos;ve finished building the functionality of your website — now it&apos;s time to design. 
                    A helpful approach at this stage is to hold off on using color right away. By designing in grayscale first, 
                    you&apos;re encouraged to rely on contrast, spacing, and size to create hierarchy and clarity.<br></br><br></br>

                    While this might feel more challenging at first, it often leads to a cleaner and more focused interface. 
                    On the next screen, you’ll see a simple UI built entirely in grayscale. Before moving on, take a moment 
                    to consider where you might introduce color to strengthen the visual hierarchy.

                    Feel free to experiment by editing the code. Once you&apos;re ready, proceed to the next page to see how we introduced color and why.</p>
                </div>
                <div className="w-1/2">
                    <img src="/design.svg" alt="Design" />
                </div>
            </div>        
        </div>
        
    );
}