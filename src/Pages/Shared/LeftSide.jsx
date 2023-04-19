import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setCategory ] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data=> setCategory(data))
    },[])
    return (
        <div>
            <h4>All Category</h4>
            <div className='ms-2 '>
                {
                    categories.map(category => <p
                    key={category.id}
                    >
                        <Link to={`category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
                    </p> )
                }
            </div>
        </div>
    );
};

export default LeftSide;