import interface_creator from './system/interface.js'
import babel from './system/babel_connection.js'
import torn from './system/torn_connection.js'
import { input } from '@inquirer/prompts'

(async () => {
	try {
		interface_creator()	
		do {
			var answer = await input({ message: '\x1b[32mTell me what you want:\x1b[0m' })
			if(answer == 'clean') {integrated_commands()}
			else {
				//prototype of a command need inprovement
				console.log('\x1b[31m>\x1b[0m',await caller(answer),'\n')	
			}

			
		} while(true)
	} catch(err) {
		console.log('\x1b[31mERROR:',err,'\x1b[0m')
	}
})()

// prototype, we will use a prefix system using startWith('')
function integrated_commands() {
	console.log('\x1Bc')
	interface_creator()
}

async function caller(answer) {
	return await torn(await babel(answer.length > 0 ? answer : 'say: \'error: send a valid answer\'' ))
}