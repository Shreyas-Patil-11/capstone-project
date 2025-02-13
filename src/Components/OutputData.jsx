import { MdFileDownload } from "react-icons/md";

const OutputData = () => {
    return (
        <div className="bg-sec border-head h-[100%] flex flex-col">
            {/* First 50% Section */}
            <div className="flex-1 mx-5 mt-5 border rounded-lg p-4 flex flex-col justify-between border-full-container">
                <div className="flex justify-between items-center">
                    <button className="border border-head rounded-lg w-[40%] p-2 cursor-pointer">Style Image</button>
                    <MdFileDownload className="cursor-pointer" size={30} />
                </div>
                <p className="subhead text-center">No image available</p>
            </div>

            {/* Second 50% Section */}
            <div className="flex-1 mx-5 my-5 border rounded-lg p-4 flex flex-col justify-between border-full-container">
                <div className="flex justify-between items-center">
                    <button className="border border-head rounded-lg w-[40%] p-2 cursor-pointer">Generate Image</button>
                    <MdFileDownload className="cursor-pointer" size={30} />
                </div>
                <p className="subhead text-center">No image available</p>
            </div>
        </div>
    );
};

export default OutputData;
