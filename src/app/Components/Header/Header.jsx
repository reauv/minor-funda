import styles from './header.css';
import React, { Component } from 'react';

class Header extends Component {

	/**
	 * Construct the component.
	 *
	 * @param  {Object} props   - The properties of the component.
	 * @param  {Object} context - The context of the component.
	 * @constructor
	 */
	constructor(props, context) {
		super(props, context);
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<div className={styles.container}>
				<img src="logo.svg" className={styles.logo} />
			</div>
		);
	}
}

export default Header;
