// src/components/Navbar.tsx

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import strings from '../../assets/context/strings';

interface NavbarProps {
  handleNavigation: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleNavigation }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navList = [
    { text: strings.navBarHome, page: 'home' },
    { text: strings.navBarAbout, page: 'about' },
    { text: strings.navBarServices, page: 'services' },
    { text: strings.navBarContact, page: 'contact' }
  ];

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navList.map(({ text, page }) => (
          <ListItem key={text} onClick={() => handleNavigation(page)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', sm: 'none' }, color: 'black' }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'row', ml: 'auto', mr: 2 }}>
            {navList.map(({ text, page }) => (
              <Link
                key={text}
                onClick={() => handleNavigation(page)}
                sx={{
                  margin: { xs: '0 10px', sm: '0 20px', md: '0 30px', lg: '0 40px' },
                  textDecoration: 'none', 
                  color: 'black',
                  cursor: 'pointer',
                  fontSize: { xs: '11px', sm: '15px', md: '17px' },
                  '&:hover': {
                    color: 'gray'
                  }
                }}
              >
                {text}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </div>
  );
};

export default Navbar;