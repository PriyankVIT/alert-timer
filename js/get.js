$(document).ready(() => {
	window.localStorage.clear()
})

$("#btn").on("click", (event) => {
	event.preventDefault()
	let hours = $("#hour").val()
	let mins = $("#min").val()
	let secs = $("#sec").val()
	console.log(hours, mins, secs)

	window.localStorage.setItem("h", hours)
	window.localStorage.setItem("m", mins)
	window.localStorage.setItem("s", secs)

	window.location.replace("timer.html")
})