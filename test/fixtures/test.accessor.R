options( digits = 16 )
library( jsonlite )

lambda = 20
x = seq( -1, 1000, 0.5 )
y = ppois( x, lambda )

cat( y, sep = ",\n" )

data = list(
	lambda = lambda,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/accessor.json" )
