import { list } from './utilities/list.js'
import { live } from './utilities/live.js'
import { send } from './utilities/send.js'

const [_a, _b, command, message] = process.argv

if (command === 'send') {
	if (message === undefined) {
		console.error(`Chybí zpráva.`)
		process.exit(2)
	}
	await send(message)
} else if (command === 'list') {
	await list()
} else if (command === 'live') {
	await live()
} else {
	if (command === undefined) {
		console.error(`Chybí příkaz.`)
	} else {
		console.error(`Neznámý příkaz "${command}".`)
	}
	process.exit(1)
}
