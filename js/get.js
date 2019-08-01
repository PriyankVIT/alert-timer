$(document).ready(() => {
	window.localStorage.clear()
})

$("#btn").on("click", (event) => {
	event.preventDefault()
	let days = $("#day").val()
	let hours = $("#hour").val()
	let mins = $("#min").val()
	let secs = $("#sec").val()
	console.log(days, hours, mins, secs)

	window.localStorage.setItem("d", days)
	window.localStorage.setItem("h", hours)
	window.localStorage.setItem("m", mins)
	window.localStorage.setItem("s", secs)

	window.location.replace("timer.html")
})