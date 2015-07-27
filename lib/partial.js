'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( lambda )
*	Partially applies mean parameter `lambda` and returns a function for evaluating the cumulative distribution function (CDF) for a Poisson distribution.
*
* @param {Number} lambda - mean parameter
* @returns {Function} CDF
*/
function partial( lambda ) {

	/**
	* FUNCTION: cdf( x )
	*	Evaluates the cumulative distribution function (CDF) for a Poisson distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated CDF
	*/
	return function cdf( x ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
