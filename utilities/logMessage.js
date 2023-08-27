export const logMessage = ({ name, message, date }, isLast = false) => {
	const header = `${name} (${date})`
	const line = `\t${''.padStart(header.length, '-')}`
	console.log(line)
	console.log(`\t${header}`)
	console.log(`\t${message}`)
	if (isLast) {
		console.log(line)
	}
}
