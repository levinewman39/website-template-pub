import React, { useState } from 'react';

function GetInvolved (){
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', color: 'black', backgroundColor: 'white' }}>
      <h1 style={{textAlign: 'Center'}}>Get Involved in our Org!</h1>
        <p style={{ textAlign: 'center', width: '40%', margin: '0 auto' }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt 
            ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit 
            lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
    <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-around', marginTop: '20px' }}>
      <div>
            <h2>Join our Mailing List</h2>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    style={{
                        marginBottom: '10px',
                        padding: '10px',
                        width: '80%',
                        maxWidth: '300px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                    }}
                />
                <input
                    type="email"
                    placeholder="Enter your email"
                    style={{
                        marginBottom: '10px',
                        padding: '10px',
                        width: '80%',
                        maxWidth: '300px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Subscribe
                </button>
            </form>
        </div>
        <div>
            <h2>Join our Forum</h2>
            <p>
            <a 
                href="https://example.com/forum" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#007BFF', textDecoration: 'none' }}
            >
                Click here to stay updated with our latest news and events.
            </a>
            </p>
        </div>
    </div>

      <div style={{ margin: '20px 0' }}>
        <h2>Contact Us</h2>
        <p>If you have any questions or want to get in touch, feel free to email us!</p>
        <a
          href="mailto:info@example.com"
          style={{
            display: 'inline-block',
            marginTop: '10px',
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
          }}
        >
          Email Us
        </a>
      </div>
    </div>
  );
};

export default GetInvolved;