import { delay } from './delay.js'
import { logMessage } from './logMessage.js'

export const live = async () => {
	let lastMessageId = null
	console.log('Poslední zprávy:')
	while (true) {
		const response = await fetch(
			'https://czechichat.deno.dev/api/list-messages',
		)
		let { messages } = await response.json()

		// Show first message on start
		if (lastMessageId === null) {
			lastMessageId = messages.at(1)?.id ?? null
		}

		let foundLastMessage = false
		const newMessages = messages.filter((message) => {
			if (message.id === lastMessageId) {
				foundLastMessage = true
			}
			return !foundLastMessage
		})
		if (newMessages.length > 0) {
			newMessages.reverse()
			newMessages.forEach((message) => {
				logMessage(message)
			})
			lastMessageId = newMessages.at(0).id
		}
		await delay(1000)
	}
}
