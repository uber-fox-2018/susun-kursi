// bila ada 10 orang, ['a','b','c','d','e','f','g','h','i','j'].
// orang-orang tsb akan diatur tempat duduk nya berdasarkan urutannya secara vertikal,
// dan jumlah maksimal kursi per baris vertikal adalah 3.
// tampilkan siapa saja yg berada di baris 1, 2, dan 3 nya.

// hasil yg benar :
// Baris 0 :  [ 'a', 'd', 'g', 'j' ]
// Baris 1 :  [ 'b', 'e', 'h' ]
// Baris 2 :  [ 'c', 'f', 'i' ]

function generateSeats(rowSeats) {
    var seats = []
	for(var i=0; i < rowSeats; i++) {
		seats.push([])
	}
	return seats
}

function managePerson(arr, rowSeats) {
	var seats = generateSeats(rowSeats)
    var row = 0
    

	for(var i=0; i<arr.length-1; i++) {
		seats[row].push(arr[i])
		if(row < 2) {
			row++
		} else {
			row = 0
        }
        
    }
	printSeats(seats)
}

function printSeats(seats) {
	for(var i=0; i<seats.length; i++) {
		console.log(`Baris ${i} : `, seats[i])
	}
}

managePerson(['a','b','c','d','e','f','g','h','i','j'], 3)