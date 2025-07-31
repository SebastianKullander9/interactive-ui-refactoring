export default function ProfileCard({ phase }: { phase: number }) {
    const cardBg =
        phase === 1
        ? "bg-indigo-500"
        : phase === 2
        ? "bg-gray-100"
        : phase === 3
        ? "bg-indigo-500"
        : "bg-indigo-500"

    const nameText = 
        phase === 1
        ? "text-white"
        : phase === 2
        ? "text-gray-800"
        : phase === 3
        ? "text-white"
        : "text-white"

    const companyText = 
        phase === 1
        ? "text-gray-400"
        : phase === 2
        ? "text-gray-400"
        : phase === 3
        ? "text-white opacity-60"
        : "text-[#e0deff]"

    return (
        <div className="w-75 h-85 rounded-xl shadow-sm border-1 border-gray-200">
            <div className="w-full h-6/10 flex items-center text-center flex-row">
                <p className="text-gray-700"><i>&quot;If you think good design is expensive, you should look at the cost of bad design.&quot;</i></p>
            </div>
            <div className={`w-full h-4/10 ${cardBg} flex justify-center relative rounded-br-xl rounded-bl-xl`}>
                <div className="w-17 h-17 bg-white rounded-full absolute top-[-34px]">
                    <img src="/profile1.svg" alt="svg for a profile placeholder image"  className="p-1" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className={`font-bold ${nameText} uppercase`}>John Doe</p>
                    <p className={`font-bold ${companyText} text-[14px] uppercase`}>Horizon Works</p>
                </div>
            </div>
        </div>
    );
}