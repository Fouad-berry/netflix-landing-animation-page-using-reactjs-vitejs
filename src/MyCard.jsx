import React from 'react';


export const MyCard = ({ image, title , user }) => {
    return (
      <div>
          <img className='macarte' src={image} alt={title} />
          <p className="card-text">{user}</p>
      </div>
    );
};



