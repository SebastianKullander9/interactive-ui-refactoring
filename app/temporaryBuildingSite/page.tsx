"use client";

export default function TemporaryBuildingPage() {    
    return (
        <div className="flex flex-col gap-8 w-full h-full bg-gray-50 p-16">

            <div className="flex justify-between items-center pb-6 border-b-2 border-y-gray-200">
                <p className="text-xl w-1/2 text-gray-900">Setup your storage and choose the size that is appropriate for you.</p>

                <div className="flex flex-row text-sm text-gray-900 items-center">
                    <p>Bill monthly</p>
                    <div className="w-10 h-6 rounded-full bg-gray-500 p-1 mx-2">
                        <div className="h-full w-1/2 rounded-full bg-white"></div>
                    </div>
                    <p>Bill yearly</p>
                </div>
            </div>
            
            <div className="flex w-full justify-between gap-4">
                <form className="flex flex-col gap-4 w-full">
                    <input
                        className="bg-white p-4 rounded-md"
                        placeholder="Full name"
                    ></input>
                    <input
                        className="bg-white p-4 rounded-md"
                        placeholder="Email"
                    ></input>
                    <input
                        className="bg-white p-4 rounded-md"
                        placeholder="Password"
                    ></input>
                    <input
                        className="bg-white p-4 rounded-md"
                        placeholder="Card number"
                    ></input>
                    <button className="bg-gray-700 text-gray-50 p-4 rounded-md font-semibold">
                        CREATE ACCOUNT
                    </button>
                </form>

                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col bg-white p-4 rounded-xl gap-4 border-2 border-gray-200">
                        <div className="flex justify-between">
                            <p className="text-lg font-semibold text-gray-500">Small</p>
                            <div className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center text-2xl font-bold text-white">&#10003;</div>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-900"><span className="text-xl font-bold text-gray-900">4-7 m<sup>2</sup></span> of storage</p>
                            <p className="font-medium">&#36;40 / mo</p>
                        </div>
                    </div>

                    <div className="flex flex-col bg-white p-4 rounded-xl gap-4">
                        <div className="flex justify-between">
                            <p className="text-lg font-semibold text-gray-500">Medium</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-900"><span className="text-xl font-bold text-gray-900">7-12 m<sup>2</sup></span> of storage</p>
                            <p className="font-medium">&#36;40 / mo</p>
                        </div>
                    </div>

                    <div className="flex flex-col bg-white p-4 rounded-xl gap-4">
                        <div className="flex justify-between">
                            <p className="text-lg font-semibold text-gray-500">Large</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-900"><span className="text-xl font-bold text-gray-900">12-20 m<sup>2</sup></span> of storage</p>
                            <p className="font-medium">&#36;40 / mo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
