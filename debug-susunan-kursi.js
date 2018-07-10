// bila ada 10 orang, ['a','b','c','d','e','f','g','h','i','j'].
// orang-orang tsb akan diatur tempat duduk nya berdasarkan urutannya secara vertikal,
// dan jumlah maksimal kursi per baris vertikal adalah 3.
// tampilkan siapa saja yg berada di baris 1, 2, dan 3 nya.

// hasil yg benar :
// Baris 0 :  [ 'a', 'd', 'g', 'j' ]
// Baris 1 :  [ 'b', 'e', 'h' ]
// Baris 2 :  [ 'c', 'f', 'i' ]

// 'use strict'

function generateSeats(row) {
	var seats = []
	for(var i=0; i<row; i++) { // ubah rowa menjadi row
		seats.push([]) // ubah seat menjadi seats
	}
	return seats
}

// console.log(generateSeats(3))

function managePerson(arr, rowSeats) {
	var seats = generateSeats(rowSeats) //tambahkan s menjadi generateSeats
  // console.log(seats)
	var row = 0

	for(var i=0; i<arr.length; i++) { // arr.length-1 menjadi arr.length
    seats[row].push(arr[i]) //ubah seat menjadi seats
		if(row == 2) { //ubah row menjadi ==
			row = 0
		} else {
			row++
		} 
    
	}
	printSeats(seats)
}

function printSeats(seats) {

	for(let i=0; i<seats.length; i++) {
		console.log(`Baris ${i} : `, seats[i])
	}

}

managePerson(['a','b','c','d','e','f','g','h','i','j'], 3)