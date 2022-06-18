import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import ScrollToColor from "./ScrollToColor";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { Link } from "react-scroll";

const pages = [
   { menu: 'Save the Date', id: 'saveDate' },
   { menu: 'Fecha', id: 'fecha' },
   { menu: 'Lugar', id: 'lugar' },
   { menu: 'Confirmacion', id: 'Confirmacion' },
];

const Navegation = () => {
	const theme = createTheme();

	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = (page) => {
		setAnchorElNav(null);
	};

	return (
		<div>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<ScrollToColor>
					<AppBar style={{ boxShadow: 'none' }}>
						<Container maxWidth="xl">
							<Box
								disableGutters
								sx={{ display: "flex", justifyContent: "flex-end" }}
							>
								<Typography
									fontFamily="Tangerine"
									variant="h2"
									noWrap
									component="div"
									sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
									color="black"
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
										style={{}}
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
											<MenuItem key={page.id} onClick={handleCloseNavMenu}>
												<Typography textAlign="center">{page.menu}</Typography>
											</MenuItem>
										))}
									</Menu>
								</Box>

								<Typography
									fontFamily="Tangerine"
									variant="h2"
									noWrap
									component="div"
									sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
								>
									Brisia & Santiago
								</Typography>
								<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
									{pages.map((page, i) => (
										<Button
											key={page.id}
											onClick={()=>handleCloseNavMenu(page)}
											sx={{ my: 2, color: "black", display: "block", font: "italic",
												fontSize: "14px",
												fontWeight: "bold",}}
										>
											<Link
												activeClass="active"
												to={page.id}
												spy={true}
												smooth={true}
												style={{ textDecoration: "none", color: "black" }}
											>
												{page.menu}
											</Link>
										</Button>
									))}
								</Box>
							</Box>
						</Container>
					</AppBar>
				</ScrollToColor>
			</ThemeProvider>
		</div>
	);
};
export default Navegation;
