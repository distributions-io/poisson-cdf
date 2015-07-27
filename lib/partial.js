'use strict';

// MODULES //

var gammainc = require( 'compute-gammainc' );


// FUNCTIONS //

var floor = Math.floor;


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
		if ( x < 0 ) {
			return 0;
		}
		return gammainc( lambda, floor( x ) + 1, {
			'tail': 'upper',
			'regularized': true
		});
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
