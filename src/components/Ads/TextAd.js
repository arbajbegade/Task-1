import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function TextAd() {
    const navigate = useNavigate();
    const [showThankYou, setShowThankYou] = useState(false);

    const handleBack = () => {
        navigate('/createad');
    };

    const handleSubmitClick = () => {
        setShowThankYou(true);

        setTimeout(() => {
            navigate('/dashboard');
        }, 700);
    };
    return (
        <div className='flex flex-col px-4 mt-6'>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-8 w-full">
                    <div className="space-y-4">
                        <div>
                            <h2 className="text-lg font-semibold mb-2">Heading One</h2>
                            <input type="text" className="border border-gray-300 rounded p-2 w-full" placeholder="Enter text for heading one" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-2">Heading Two</h2>
                            <input type="text" className="border border-gray-300 rounded p-2 w-full" placeholder="Enter text for heading two" />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-2">Description</h2>
                        <textarea className="border border-gray-300 rounded p-2 w-full h-36" placeholder="Add primary text to help user understand more about your products service or offers" />
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div className="flex flex-col sm:flex-row sm:space-x-3 ">
                    <div className="flex-grow">
                        <h2 className="text-lg font-semibold mb-2">Business Name</h2>
                        <input type="text" className="border border-gray-300 rounded p-2 w-full" placeholder="Enter business name" />
                    </div>

                    <div className="flex-grow">
                        <h2 className="text-lg font-semibold mb-2">Button Label</h2>
                        <select className="border border-gray-300 rounded p-2  w-full">
                            <option value="1">Select a label </option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-lg font-semibold mb-2">Website URL</h2>
                <input type="text" className="border border-gray-300 rounded p-2 w-full" placeholder="Enter business name" />
            </div>
            <div className="flex justify-between mt-8">
                <button onClick={handleBack} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring focus:border-blue-300">
                    Back
                </button>
                <button onClick={handleSubmitClick} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
                    Submit
                </button>
            </div>
            {showThankYou && (
                <div className="fixed -top-20 left-0 w-full h-full flex items-center justify-center">
                    <div className="bg-white  p-14 rounded shadow-2xl text-center">
                        <div> <CheckCircleIcon color="primary"/> </div>
                        <div>Submitted</div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TextAd;
