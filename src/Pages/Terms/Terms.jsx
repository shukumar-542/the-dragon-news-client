import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1>Terms and condition</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum
                facilis odit animi corporis quis corrupti, modi accusamus a numquam! 
                Minima fugiat nisi neque esse dolore laudantium rem voluptatibus et magnam
                 eligendi dolores vitae laborum reprehenderit aspernatur sunt quia autem
                  ipsam, 
                ratione magni provident sit maxime. Perferendis harum a cumque.</p>
                <Link to='/register'>Go Back Register</Link>
        </div>
    );
};

export default Terms;