import React from 'react';
import { Bars} from 'react-loader-spinner';


const Loading = () => {
    // const [loading, setLoading] = useState(true);
    return (
        <div className='container mx-auto w-full h-screen  flex justify-center items-center'>
            <div className="preloader flex justify-center items-center">
            <Bars heigth="100" width="100" color="#5617F8" ariaLabel="loading-indicator" />
            </div>
        </div>
    );
};

export default Loading;