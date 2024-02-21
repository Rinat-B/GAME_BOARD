import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
//Enter this link:  https://mui.com/material-ui/react-menu/
//Choose a menu, click on 'Show code' and copy the JS code.
//Match the tab names to the component names: BullsCowsGame-שם המשחק , NumberGuessingGame-ניחוש מספרים, TriviaGame-משחק טריויה, ArithmeticSequenceGame-סדרה חשבונית
//And call them respectively.
//Good luck!

export default function BasicMenu() {
    const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    navigate(`/${e.target.id}`)
    

     
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <div>menu</div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem id='TriviaGame' onClick={handleClose}>TriviaGame</MenuItem>
        <MenuItem id='NumberGuessingGame' onClick={handleClose}>NumberGuessingGame</MenuItem>
        <MenuItem id='ArithmeticSequenceGame' onClick={handleClose}>ArithmeticSequenceGame</MenuItem>
      </Menu>
    </div>
  );
}