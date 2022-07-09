import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import ScrollToColor from "./ScrollToColor";
import { Link } from "react-scroll";

const pages = [
	{ menu: "Save the Date", id: "saveDate" },
	{ menu: "Countdown", id: "countdown" },
	{ menu: "Timeline", id: "timeline" },
	{ menu: "Ubicación", id: "ubicacion" },
	{ menu: "Confirmación", id: "Confirmacion" },
	{ menu: "Hashtag", id: "hashtag" },
	{ menu: "Regalos", id: "Regalos" },
	{ menu: "Vestimenta", id: "Codigo" },
];

const Navegation = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = (page) => {
		setAnchorElNav(null);
	};

	return (
		<ScrollToColor>
			<AppBar style={{ boxShadow: "none" }}>
				<Box disableGutters sx={{ display: "flex" }}>
					<Typography
						paddingLeft={"20px"}
						fontFamily="Tangerine"
						variant="h2"
						noWrap
						component="div"
						sx={{ display: { xs: "none", md: "flex" } }}
						color="black"
						justifyContent="flex-start"
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
								<MenuItem key={page.id} onClick={handleCloseNavMenu} >
									<Link
									activeClass="active"
									to={page.id}
									spy={true}
									smooth={true}
									style={{ textDecoration: "none", color: "black" }}
								>
									{page.menu}
								</Link>
								</MenuItem>
							))}
						</Menu>
						<Typography
							fontFamily="Tangerine"
							variant="h2"
							noWrap
							component="div"
							justifyContent={"center"}
							sx={{
								flexGrow: 1,
								display: { xs: "flex", md: "none" },
							}}
						>
							Brisia & Santiago
						</Typography>
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							justifyContent: "flex-end",
							mr: 2,
						}}
					>
						{pages.map((page, i) => (
							<Button
								key={page.id}
								onClick={() => handleCloseNavMenu(page)}
								sx={{
									my: 2,
									color: "black",
									display: "block",
									font: "italic",
									fontSize: "14px",
									fontWeight: "bold",
								}}
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
			</AppBar>
		</ScrollToColor>
	);
};
export default Navegation;
