//torn connection V1
export default async function(link) {
	try {
		const response = await fetch(link)
		if(!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}
	        
	    const data = await response.json()
	    if(!data) {throw new Error(`Error: undefined data`)}
	    return data
	} catch(err) {
		console.log('\x1b[31mERROR:',err,'\x1b[0m')
	}
}