import { Hono } from 'hono'

const app = new Hono()
app.use()
app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.post("/signup",(c)=>{
  return c.json({
    msg:"hello"
  })
})
app.post("/signin",(c)=>{
  return c.json({
    msg:"hello"
  })
})
app.post("/blog",(c)=>{
  return c.text("ok")
})
app.put("/blog",(c)=>{
  return c.text("hello")
})
app.get(".blog:id",(c)=>{
  const body = c.body;
  return c.text("hello")
})
export default app
