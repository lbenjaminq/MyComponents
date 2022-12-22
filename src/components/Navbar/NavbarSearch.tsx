import MenuIcon from '@mui/icons-material/Menu';
import { Box, AppBar, Toolbar, Typography, IconButton, Drawer } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import { Lists } from './Lists';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import { SearchBar } from '../Searchs/SearchBar';

export interface Pages {
  title: string;
  link: string;
  icon?: React.ReactNode
};

const pages: Pages[] = [{ title: 'Search', link: "/home", icon: <ManageSearchRoundedIcon /> }, { title: 'Contact Us', link: "", icon: <ContactSupportRoundedIcon /> }];

export const NavbarSearch = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={TypographyTitle}
          >
            ECOMMERCE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              onClose={handleClose}
              anchor="left"
              PaperProps={{
                sx: {
                  backgroundColor: "#332F30",
                }
              }}
              open={open}
              sx={{ backgroundColor: "rgba(217,205,211,0.8)", }}
            >
              <Typography
                variant="h5"
                color="#fff"
                sx={{ margin: "20px auto 0 auto" }}
              >
                Ecommerce
              </Typography>
              <Lists pages={pages} />
            </Drawer>
          </Box>
          <SearchBar />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, alignItems: "center" }}>
            <Lists pages={pages} row />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const TypographyTitle = {
  mr: 2,
  display: { xs: 'none', sm: 'flex' },
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
  "&:hover": {
    color: "#FCFF8B"
  }
}