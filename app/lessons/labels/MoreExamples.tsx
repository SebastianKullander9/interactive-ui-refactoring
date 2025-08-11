import ProductCard from "./ProductCard";
import DimensionsCard from "./DimensionsCard";
import { useState } from "react";

export default function MoreExamples() {
    const [haveLabel, setHaveLabel] = useState(false);

    return (
        <div className="container mx-auto p-8 flex gap-8 h-[calc(100vh-10rem)] flex-col">
            <h1 className="text-gray-800 font-bold text-6xl pb-8">More examples</h1>
            <div className="flex flex-row gap-4">
                <p className="max-w-prose text-gray-700">Here we have an example again where labels are not needed. When you are able to combine labels and value
                    into a single unit it gives you more room to give it a meaningful style while still retaining the same 
                    clarity
                </p>
                <div className="flex gap-4">
                    <ProductCard haveLabel={false}/>
                    <ProductCard haveLabel={true}/>
                </div>
            </div>
            <div className="flex flex-row gap-4">
                <p className="max-w-prose text-gray-700">Sometimes you want to use labels and have them emphasized, for example when you know the user
                    will be looking for specific labels to get information. Like we can see here in a technical 
                    specification for a product, here we know that the user will be looking for the label to aquire the
                    information as it would not make much sense to just typing out the units by themselve.
                </p>
                <div className="w-full">
                    <DimensionsCard />
                </div>
            </div>
        </div>
    );
}