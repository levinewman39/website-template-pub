import React, { useState } from 'react';

function Community_Links (){
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', color: 'black', backgroundColor: 'white' }}>
      <h1 style={{textAlign: 'Center'}}>Community Links</h1>
        <p style={{ textAlign: 'center', width: '40%', margin: '0 auto' }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt 
            ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit 
            lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
    </div>
  );
};

export default Community_Links;