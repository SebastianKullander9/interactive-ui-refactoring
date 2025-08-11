import ProfileCardWithLabels from "./ProfileCardWithLabels";

export default function LabelsAnswer() {
    return (
        <div className="container mx-auto p-8 flex gap-8 h-[calc(100vh-10rem)] items-center">
            <div className="w-1/2">
                <h1 className="text-gray-800 font-bold text-6xl pb-8">Labels?</h1>
                <p className="text-gray-700 max-w-prose">If you followed the principles shown earlier, there&apos;s a good chance you emphasized the labels and 
                    perhaps de-emphasized the text next to them. But here&apos; s the catch: <b>you might not need labels at
                     all</b>.<br /><br />In many cases, the format of the information makes its meaning obvious. In this 
                     example, each piece of data is self-explanatory just by looking at it. When you can remove 
                     labels without losing clarity, it becomes much easier to <b>highlight the most important content</b>. 
                     This not only improves usability but also gives the interface a cleaner, more intentional feel.
                </p>
            </div>
            <div className="w-1/2">
                <ProfileCardWithLabels />
            </div>
        </div>
    );
}