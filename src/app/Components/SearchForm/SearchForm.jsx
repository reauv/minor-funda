import styles from './search_form';
import { push } from 'react-router-redux';
import React, { Component, PropTypes } from 'react';
import { RaisedButton } from 'material-ui';

const PRICES = [
	50000, 100000, 200000, 300000, 400000, 500000,
];

class SearchForm extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		fields: PropTypes.object,
		handleSubmit: PropTypes.func,
		addressSuggestions: PropTypes.array,
	}

	onMinPriceChange = (event, key, value) => this.props.fields.minPrice.onChange(value);
	onMaxPriceChange = (event, key, value) => this.props.fields.maxPrice.onChange(value);
	onSubmit = (values, dispatch) => {
		dispatch(push({ pathname: '/search', query: values }));
	};

	getDataSource() {
		return this.props.addressSuggestions.map((suggestion) =>
			suggestion.Display.Naam
		);
	}


	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		const { fields: { address, minPrice, maxPrice }, handleSubmit } = this.props;

		return (
			<div className={styles.wrapper}>
				<form onSubmit={handleSubmit(this.onSubmit)} className={styles.container}>
					<div className={styles.address}>
						<label className={styles.label}>
							Waar zoek je een woning?
						</label>
						<input
							type="text"
							className={styles.input}
							{...address}
						/>
					</div>

					<div className={styles.min_price}>
						<label className={styles.label}>
							Minimum prijs
						</label>
						<select
							className={styles.select}
							{...minPrice}
							value={minPrice.value || ''}
						>
							<option></option>
							{PRICES.map((price, i) =>
								<option key={i} value={price}>{`EUR ${price}`}</option>
							)}
						</select>
					</div>

					<div className={styles.max_price}>
						<label className={styles.label}>
							Maximum prijs
						</label>
						<select
							className={styles.select}
							{...maxPrice}
							value={maxPrice.value || ''}
						>
							<option></option>
							{PRICES.map((price, i) =>
								<option key={i} value={price}>{`EUR ${price}`}</option>
							)}
						</select>
					</div>

					<div className={styles.actions}>
						<RaisedButton primary type="submit" label="Zoek" className={styles.submit} />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchForm;
