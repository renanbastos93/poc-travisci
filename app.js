require('express')()
.use('/', (req,res)=>res.status(200).send("Hello Word!"))
.listen(80, console.log("Ligou 80"));