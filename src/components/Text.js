/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import chalk from 'chalk';

const Text = ({bold, italic, underline, strikethrough, children, unstable__transformchildren}) => {
	const transformChildren = children => {
		if (bold) {
			children = chalk.bold(children);
		}

		if (italic) {
			children = chalk.italic(children);
		}

		if (underline) {
			children = chalk.underline(children);
		}

		if (strikethrough) {
			children = chalk.strikethrough(children);
		}

		if (unstable__transformchildren) {
			children = unstable__transformchildren(children);
		}

		return children;
	};

	return <span style={{flexDirection: 'row'}} unstable__transformchildren={transformChildren}>{children}</span>;
};

Text.propTypes = {
	bold: PropTypes.bool,
	italic: PropTypes.bool,
	underline: PropTypes.bool,
	strikethrough: PropTypes.bool,
	children: PropTypes.node.isRequired,
	unstable__transformchildren: PropTypes.func
};

Text.defaultProps = {
	bold: false,
	italic: false,
	underline: false,
	strikethrough: false,
	unstable__transformchildren: undefined
};

export default Text;
