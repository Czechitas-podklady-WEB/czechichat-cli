import { logMessage } from './logMessage.js'

export const list = async () => {
	console.log('Seznam zpráv:')
	const response = await fetch('https://czechichat.deno.dev/api/list-messages')
	const { messages } = await response.json()

	messages
		.slice(0, 10)
		.reverse()
		.forEach((message, index, messages) => {
			logMessage(message, index === messages.length - 1)
		})
}
