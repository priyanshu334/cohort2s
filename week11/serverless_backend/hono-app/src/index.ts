import { Hono } from 'hono'

const app = new Hono()
//middleware 
async function authMiddleware(c:any,next:any){
  if(c.req.header("Authorization")){
    await next()
  }
  else{
    return c.text("chal bhag")
  }
}
app.use(authMiddleware)
app.get('/', async (c) => {
  const body = await c.req.json;
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("params"));
  return c.text('Hello Hono!')
})

app.post('/',(c)=>{
  return c.json({
    msg:"hello"
  })
})
export default app
