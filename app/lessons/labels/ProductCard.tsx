export default function ProductCard({ haveLabel }: { haveLabel: boolean }) {
    const inStockText =
        haveLabel 
        ? <p className="text-indigo-500"><span className="font-bold">12</span> left in stock</p>
        : <p>In stock: 12</p>

    return (
        <div className="">
            <div className="h-[151px] w-[400px] border-1 border-gray-300 shadow-md rounded-lg flex">
                <div>
                    <img className="h-[150px] rounded-tl-lg rounded-bl-lg" src="purpleperfume.jpg" alt="image of a perfume" />
                </div>
                <div className="flex flex-col justify-between p-5">
                    <div className="flex flex-col gap-1">
                        <p className="font-semibold text-gray-800 text-xl">Purple Perfume</p>
                        <p className="text-gray-500">USD $79</p>
                    </div>
                    <div>
                        {inStockText}
                    </div>
                </div>
            </div>
        </div>
    );
}