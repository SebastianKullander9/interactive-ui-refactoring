export default function ProfileCardWithLabels() {
    return (
        <div className="">
            <div className="w-[550px] h-[200px] bg-gray-white flex flex-row border-1 border-gray-300 shadow-md rounded-xl">
                <div className="bg-indigo-500 h-full w-1/3 p-7 rounded-tl-xl rounded-bl-xl">
                    <div className="bg-white rounded-full p-2">
                        <img className=" rounded-full" src="profile1.svg" alt="Placeholder for a profile picture" /> 
                    </div>
                </div>
                <div className="h-full w-2/3 p-7 flex flex-col gap-4">
                    <div className="flex flex-row gap-2">
                        <p className="text-xl text-gray-900">John Doe</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <p className="text-indigo-500 text-lg">Product Designer</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <p className="text-sm text-gray-600">john.doe@example.com</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                    </div>
                </div>
            </div>
        </div>
    );
}