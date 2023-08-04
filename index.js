import os from 'os'

const name = os.userInfo().username
const [_a, _b, message] = process.argv

try {
	console.log('Odesílá se zpráva:')
	console.log(`\tJméno: ${name}`)
	console.log(`\tText: ${message}`)
	const response = await fetch('https://czechichat.deno.dev/api/send-message', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({ name, message }),
	})
	if (!response.ok || (await response.json()).status !== 'ok') {
		throw new Error('Response status not ok.')
	}
	console.log('Zpráva byla úspěšně odeslána. 🎉')
	console.log(
		'Všechny poslední zprávy si můžete prohlédnout na https://czechichat.deno.dev/.',
	)
} catch (error) {
	console.error(error)
	console.error('Odesílání zprávy se nezdařilo. 😵')
	process.exit(1)
}
