import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ title, subTitle }) => {
	return (
		<div>
			<div className="text-success">
				<h1 className="text-center display-4">{title}</h1>
				<h2 className="text-center fs-5">{subTitle}</h2>
			</div>
		</div>
	);
};

PageHeader.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string,
};

export default PageHeader;
