import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import {
  ThemeProvider,
  CssBaseline
} from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import ScrollToColor from "./ScrollToColor";


const pages = ["Fecha", "Lugar", "Confirmacion"];

const Navegation = () => {

  const theme = createTheme();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

    return (
      <div>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
            <ScrollToColor>
              <AppBar  style={{ boxShadow: 'none'}}>
                <Container maxWidth="xl">
                  <Toolbar disableGutters>
                    <Typography
                      fontFamily='Tangerine'
                      variant="h2"
                      noWrap
                      component="div"
                      sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                      color= "black"
                    >
                      Brisia & Santiago
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                      >
                        <MenuIcon />
                      </IconButton>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                          display: { xs: "block", md: "none" },
                        }}
                      >
                        {pages.map((page) => (
                          <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page}</Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                    <Typography
                      fontFamily='Tangerine'
                      variant="h2"
                      noWrap
                      component="div"
                      sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                    >
                      Brisia & Santiago
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                      {pages.map((page) => (
                        <Button
                          key={page}
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, color: "black", display: "block" }}
                        >
                          {page}
                        </Button>
                      ))}
                    </Box>
                  </Toolbar>
                </Container>
              </AppBar>
            </ScrollToColor>
        </ThemeProvider>
        <br/>
        <br/>
        <br/>
      </div>
  );
};
export default Navegation;
