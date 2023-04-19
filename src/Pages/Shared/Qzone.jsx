import React from 'react';
import Qzone1 from '../../assets/qZone1.png'
import Qzone2 from '../../assets/qZone2.png'
import Qzone3 from '../../assets/qZone3.png'


const Qzone = () => {
    return (
        <div className='my-4 bg-secondary py-4 text-center'>
            <h4>Q-zone</h4>
            <div className=' '>
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
            </div>
           
        </div>
    );
};

export default Qzone;