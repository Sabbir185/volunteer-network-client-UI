import React from 'react';

const Event = ({event}) => {
    // console.log(event)
    // console.log(event.pic)
    return (
        <div className='col-md-3'>
            <img style={{height:'300px'}} src={require(`../../images/${event.pic}`).default} alt=""/>
            <h3>{event.name}</h3>
        </div>
    );
};

export default Event;