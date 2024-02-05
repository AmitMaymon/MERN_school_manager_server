const express = require('express')
const cors = require('cors')
const session = require('express-session')
const studentsRouter = require('./routers/studentsRouter')

require('./config/db') //connection to DB
const PORT = 8000
const app = express()



app.use(cors())
app.use(express.json())


app.use('/students',studentsRouter)



app.listen(PORT,()=>{
    console.log('server running on port: ',PORT);
})

