require('express')()
.use('/', (req,res)=>res.status(200).send("Hello Word!"))
.listen(3030, console.log("Ligou 3030"));