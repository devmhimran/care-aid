import React from 'react';
import careAid03 from '../../Assets/care-aid-03.jpg';

const InfoSection = () => {
    return (
        <div className="info__section py-16 mx-4 lg:py-20">
                <div className="container">
                    <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-1">
                        <div className="info__section__left  col-span-2">
                            <img className='w-full lg:w-4/5 rounded-2xl' src={careAid03} alt="" />
                        </div>
                        <div className="info__section__right col-span-2  flex items-center">
                            <div className="info__section__right_detail">
                                <div className="info__section__right__detail__main">
                                    <h1 className='font-bold text-4xl lg:text-5xl leading-tight'>Exceptional Dental Care,<br></br>on Your Terms</h1>
                                    <p className='lg:text-base my-8 leading-7'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default InfoSection;