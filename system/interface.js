import * as fs from 'fs' 

export default function() {
	process.title = 'babetorn'
	console.log('\x1Bc') // clean console
	console.log('\x1b[33m') // change color
	console.log(fs.readFileSync('./system/logo.txt', 'utf8'))
	console.log('\x1b[0m')
	console.log('\n\x1b[32mWelcome Eloazy')
	console.log('\n\x1b[31m═══════════════════════════════════════════════════════════════════════════════════════\x1b[0m')
}