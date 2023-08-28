import React from 'react';

function Footer(){
    const currDate=new Date();
    const yr=currDate.getFullYear();
    return(
        <footer>
           <p> Copyright © {yr}</p>
        </footer>
    );
}

export default Footer;