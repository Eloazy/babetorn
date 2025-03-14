export default async function(query) {
	try {
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
			return typeof data.result == 'string' ? data.result : data.result.result
	} catch(err) {
		console.log('\x1b[31mERROR:',err,'\x1b[0m')
	}
}