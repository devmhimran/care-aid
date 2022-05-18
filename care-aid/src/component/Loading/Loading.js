import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';


const Loading = () => {
    // const [loading, setLoading] = useState(true);
    return (
        <div className='container'>
            <InfinitySpin color="grey" />
        </div>
    );
};

export default Loading;