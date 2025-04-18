// import React from 'react';
// import './Navbar.css';
// import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { useState } from 'react';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar position="static" sx={{backgroundColor:"#2ECC71",color:"#fff"}}>
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           JobPortal
//         </Typography>
//         {isMobile ? (
//           <>
//             <IconButton
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               onClick={handleMenu}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleClose}
//             >
//               <MenuItem onClick={handleClose}>Home</MenuItem>
//               <MenuItem onClick={handleClose}>About</MenuItem>
//               <MenuItem onClick={handleClose}>Jobs</MenuItem>
//               <MenuItem onClick={handleClose}>Pages</MenuItem>
//               <MenuItem onClick={handleClose}>Contact</MenuItem>
//               <MenuItem onClick={handleClose}>Post A Job</MenuItem>
//             </Menu>
//           </>
//         ) : (
//           <>
//             <Button color="inherit"><Link to={"/"}>Home</Link></Button>
//             <Button color="inherit"><Link to={"/about"}>About</Link></Button>
//             <Button color="inherit"><Link to={"/job"}>Jobs</Link></Button>
//             <Button color="inherit"><Link to={"#"}>Pages</Link></Button>
//             <Button color="inherit"><Link to={"/contact"}>Contact</Link></Button>
//             <Button variant="contained" color="secondary">Post A Job</Button>
//           </>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import './Navbar.css';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2ECC71", color: "#fff" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, textDecoration: 'none', color: '#fff', cursor: 'pointer' }}
        >
          JobPortal
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/about">About</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/job">Jobs</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="#">Pages</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/contact">Contact</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="#">Post A Job</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/job">Jobs</Button>
            <Button color="inherit" component={Link} to="#">Pages</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
            <Button variant="contained" color="secondary">Post A Job</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
