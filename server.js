import express from 'express'

const app = express()

app.use('/api/v1', router)


app.listen(3000, () => {
	console.log('server is running ')
})