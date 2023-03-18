import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const WeoMenu = ({ data, selectionKeys, handleSelect }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        variant='outlined'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={openMenu}
        sx={{my:0.3}}
      >
        {selectionKeys.value}
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
        {data.map((c) => {
            // handle adding the units for the descriptor items
            let menuItem;
            if (selectionKeys.value2) {
              menuItem = `${c[selectionKeys.value]}, ${c[selectionKeys.value2]}`;
            } else {
              menuItem = `${c[selectionKeys.value]}`;
            }
            return (
                <MenuItem 
                  key={c[selectionKeys.id]} 
                  onClick={() => {
                    handleSelect(c[selectionKeys.id])
                    handleClose()
                    }}>
                    {menuItem}
                </MenuItem>
            )
        })}
      </Menu>
    </div>
  );
}

export default WeoMenu;