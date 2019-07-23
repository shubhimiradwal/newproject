import React from 'react';
import { Button } from 'reactstrap';

var bgColors = { "Default": "#81b71a",
                    "Blue": "#0066cc",
                    "Cyan": "#37BC9B",
                    "Green": "#66ff8c",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42"
};


const Header = () => {
  return (
      <div style={{top:0, left:0,right:0,heigth:20,backgroundColor:	bgColors.Blue}}>
      blog1
    </div>
  );
}

export default Header;