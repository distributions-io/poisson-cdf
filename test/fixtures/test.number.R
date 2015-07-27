options( digits = 16 )
library( jsonlite )

lambda = 1
x = c( -5, -2.5, 0, 2.5, 5 )
y = ppois( x, lambda )

cat( y, sep = ",\n" )

data = list(
	lambda = lambda,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/number.json" )
