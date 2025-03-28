//torn connection V1
import babel from './babel_connection.js'

export default async function(link) {
	try {
		console.log('\x1b[35m> Starting connection with TORN\x1b[0m')
		const response = await fetch(link)
		if(!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}
	        
	    const data = await response.json()
	    if(!data) {throw new Error(`Error: undefined data`)}
	    console.log('\x1b[35m> Connection terminated, data acquired successfully\x1b[0m')
	    return data //await babel(data, true) disabled the babelaife AI
	} catch(err) {
		console.error('\x1b[31mERROR:',err.message,'\x1b[0m')
	}
}