import styles from './header.css';
import { Link } from 'react-router';
import React, { Component } from 'react';

class Header extends Component {

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<div className={styles.container}>
				<Link to="/">
					<img src="/logo.svg" className={styles.logo} alt="Funda" />
				</Link>
			</div>
		);
	}
}

export default Header;
