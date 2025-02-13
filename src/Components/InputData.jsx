

const InputData = () => {
    return (
        <div className="bg-sec border-head  h-[100%]">
            <div className="border-full-container mx-5" >
                <div className=" mt-5 ">
                    <h4 className="subhead">Input Text</h4>
                    <textarea
                        rows="5"
                        className="textarea  border-[rgb(103, 99, 99)]"
                        placeholder="Enter the text ....."
                    ></textarea>
                </div>

                <div className="  my-1 p-2 flex gap-3">
                    <button className="border-head border-white rounded-lg w-full p-2 cursor-pointer">Clear</button>
                    <button className="rounded-lg w-full p-2 bg-button cursor-pointer">Submit</button>
                </div>

                <div className=" mb-5  ">
                    <label htmlFor="handwriting" className="subhead mt-1">Choose a Handwriting Style</label>
                    <div className="my-5">
                        <select id="handwriting" className="custom-select">
                            <option value="Style-1">Style-1</option>
                            <option value="Style-2">Style-2</option>
                            <option value="Style-3">Style-3</option>
                            <option value="Style-4">Style-4</option>
                        </select>
                    </div>
                </div>
            </div>



            <h2 className="text-3xl text-center m-4">OR</h2>

            <div id="input" className="m-5 border-tri">
                <div className="mx-5 mb-5">
                    <input
                        htmlFor="input"
                        type="file"
                    />
                    <h4 className="subhead text-center mt-1">Click to Upload</h4>
                </div>
            </div>
            <div className=" mx-2 my-1 p-2 flex gap-3">
                <button className="border border-white rounded-lg w-full p-2 cursor-pointer">Clear</button>
                <button className="rounded-lg w-full p-2 bg-button cursor-pointer">Submit</button>
            </div>
        </div>
    )
}

export default InputData