import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import cx from "classnames";

import userAvatar from "../../img/usuario.svg";

const Navbar = () => {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);

	return (
		<div className={cx(classes.nav, show && classes.nav_black)}>
			<img
				className={classes.nav_logo}
				src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
				alt="Netflix Logo"
			/>
			<img
				src={userAvatar}
				alt="User Avatar"
				className={classes.nav_avatar}
			/>
		</div>
	);
};

export default Navbar;
