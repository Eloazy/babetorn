var prompt = null
export default async function(query, tornconnection) {
	try {
		prompt = query
		console.log('\x1b[35m> Analysing request\x1b[0m')
		const response = await fetch('http://localhost:1025/api/branch/babetorn', {
			method: 'POST',
			headers: {
				'Content-Type':'application/json'
			},
			body: JSON.stringify({ query })
		})
		if(!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}
		const data = await response.json()
		if(!data) {throw new Error(`Error: undefined data`)}
		console.log('\x1b[35m> Analysis finished\x1b[0m')
		return typeof data.result == 'string' ? data.result : data.result.result
	} catch(err) {
		console.error('\x1b[31mERROR:',err.message,'\x1b[0m')
	}
}