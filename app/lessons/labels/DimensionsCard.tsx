export default function DimensionsCard() {
    return (
        <div className="w-full h-[150px] border-1 border-gray-300 bg-white flex flex-row p-5 shadow-sm">
            <div className="w-1/2 h-full">
                <p className="text-lg font-bold text-gray-700">Dimensions</p>
            </div>
            <div className="w-1/2 h-full flex flex-col justify-around">
                <p className="flex gap-2 text-gray-500"><label className="text-gray-700 font-bold">Height:</label>6.3 cm (63mm)</p>
                <p className="flex gap-2 text-gray-500"><label className="text-gray-700 font-bold">Width:</label>12.5cm (125mm)</p>
                <p className="flex gap-2 text-gray-500"><label className="text-gray-700 font-bold">Depth:</label>2cm (20mm)</p>
            </div>
        </div>
    );
}