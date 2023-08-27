export const logMessage = ({ name, message, date }, isFirst = false) => {
	const header = `${name} (${date})`
	const line = `\t${''.padStart(header.length, '-')}`
	if (isFirst) {
		console.log(line)
	}
	console.log(`\t${header}`)
	console.log(`\t${message}`)
	console.log(line)
}
