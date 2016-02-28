import styles from './search_form';
import { push } from 'react-router-redux';
import React, { Component, PropTypes } from 'react';
import { fetchSuggestions } from 'Sources/SearchSource';
import { AutoComplete, SelectField, MenuItem, RaisedButton } from 'material-ui';

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

	onAddressChange = (value) => this.props.fields.address.onChange(value);
	onAddressInputChange = (value) => fetchSuggestions(value);
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
		const { fields: { minPrice, maxPrice }, handleSubmit } = this.props;

		return (
			<div className={styles.wrapper}>
				<form onSubmit={handleSubmit(this.onSubmit)} className={styles.container}>
					<div className={styles.address}>
						<AutoComplete
							fullWidth
							className={styles.input}
							filter={AutoComplete.noFilter}
							onNewRequest={this.onAddressChange}
							onUpdateInput={this.onAddressInputChange}
							dataSource={this.getDataSource()}
							floatingLabelText="Waar zoek je een woning?"
						/>
					</div>

					<div className={styles.min_price}>
						<SelectField
							fullWidth
							value={minPrice.value}
							onChange={this.onMinPriceChange}
							floatingLabelText="Minimum prijs"
						>
							{PRICES.map((price, i) =>
								<MenuItem key={i} value={price} primaryText={`EUR ${price}`} />
							)}
						</SelectField>
					</div>

					<div className={styles.max_price}>
						<SelectField
							fullWidth
							value={maxPrice.value}
							onChange={this.onMaxPriceChange}
							floatingLabelText="Maximum prijs"
						>
							{PRICES.map((price, i) =>
								<MenuItem key={i} value={price} primaryText={`EUR ${price}`} />
							)}
						</SelectField>
					</div>

					<div className={styles.actions}>
						<RaisedButton primary type="submit" label="Zoek" />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchForm;
