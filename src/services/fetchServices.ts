export const fetchServices = async (url: string, method: string, body?: any): Promise<object> => {
  if (process.env.API_KEY === undefined) {
    throw new Error('API_KEY is not defined')
  }
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'X-Infomedia-Api-Key': process.env.API_KEY
    },
    body: JSON.stringify(body)
  })
  return await response.json()
}
