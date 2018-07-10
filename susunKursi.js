// bila ada 10 orang, ['a','b','c','d','e','f','g','h','i','j'].
// orang-orang tsb akan diatur tempat duduk nya berdasarkan urutannya secara vertikal,
// dan jumlah maksimal kursi per baris vertikal adalah 3.
// tampilkan siapa saja yg berada di baris 1, 2, dan 3 nya.

// hasil yg benar :
// Baris 0 :  [ 'a', 'd', 'g', 'j' ]
// Baris 1 :  [ 'b', 'e', 'h' ]
// Baris 2 :  [ 'c', 'f', 'i' ]

'use strict'

function generateSeats(row) {
	let seats = []
	for(let i=0; i<row; i++) { // i<rowa ===> penulisan typo
		seats.push([]) // seat.push([]) ===> penulisan seat kurang s
	}
	return seats
}

function managePerson(arr, rowSeats) {
	let seats = generateSeats(rowSeats) // generateSeat(rowSeats) ===> nama function kurang s
	let row = 0

	for(let i=0; i<= arr.length-1; i++) { // i<= arr.length-1 ===> kurang sama dengan dalam kondisi
		seats[row].push(arr[i]) // seat.row[] ===> penulisan seat kurang s
		if(row < 2) { // if(row <= 2) ===> diganti tidak pakai sama dengan
			row++
		} else {
			row = 0 // row == 0 ===> kelebihan sama dengan
		}
	}
	printSeats(seats)
}

function printSeats(seats) {
	for(let i=0; i<seats.length; i++) { // let i=1 ===> dimulai dari 0
		console.log(`Baris ${i} : `, seats[i])
	}
}

managePerson(['a','b','c','d','e','f','g','h','i','j'], 3)
