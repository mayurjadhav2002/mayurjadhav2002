import React, { useEffect } from 'react';

function Redirect() {
  useEffect(() => {
    window.location.href = 'https://mayurjadhav2002.vercel.app/';
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}

export default Redirect;
