import React from 'react';
import PropTypes from 'prop-types';
import arrify from 'arrify';
import chalk from 'chalk';

const methods = [
	'hex',
	'hsl',
	'hsv',
	'hwb',
	'rgb',
	'keyword',
	'bgHex',
	'bgHsl',
	'bgHsv',
	'bgHwb',
	'bgRgb',
	'bgKeyword'
];

const Color = ({children, ...colorProps}) => {
	const transformChildren = children => {
		Object.keys(colorProps).forEach(method => {
			if (colorProps[method]) {
				if (methods.includes(method)) {
					children = chalk[method](...arrify(colorProps[method]))(children);
				} else if (typeof chalk[method] === 'function') {
					children = chalk[method](children);
				}
			}
		});

		return children;
	};

	return (
		<span style={{flexDirection: 'row'}} unstable__transformchildren={transformChildren}>
			{children}
		</span>
	);
};

Color.propTypes = {
	children: PropTypes.node.isRequired
};

export default Color;
