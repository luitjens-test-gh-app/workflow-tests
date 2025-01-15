import express from 'express'

const app = express()
const port: number = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// comment
export const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

