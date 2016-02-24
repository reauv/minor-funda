import React, { Component } from 'react';
import ObjectItem from 'Components/ObjectItem/ObjectItem';

class ObjectList extends Component {

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<div>
				{this.props.results.map((object, i) =>
					<ObjectItem object={object} key={i} />
				)}
			</div>
		);
	}
}

export default ObjectList;
