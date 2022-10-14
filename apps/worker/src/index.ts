import { Hono } from 'hono'

const app = new Hono()
app.get('/', (c) => c.text('worker.yusuke.run!!'))

export default app
