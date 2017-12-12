require('express')()
.use('/', (req,res)=>res.status(200).send("Hello Word!"))
.listen(process.env.PORT||3000, console.log("Ligou 80"));