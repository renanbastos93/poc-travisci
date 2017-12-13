module.exports = require('express')()
.get('/', (req,res)=>res.status(200).send("Hello Word!"))
.get('/api', (req, res)=>res.status(200).json({message: "voce está na api!"}))
.listen(process.env.PORT || 3000, console.log(`Ligou ${process.env.PORT || 3000}`));