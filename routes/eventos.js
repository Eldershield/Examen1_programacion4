const {Router}=require('express')

const router=Router();

router.get('/',(req,res)=> res.send('GET Endpoint para Eventos'))
router.post('/',(req,res)=> res.send('POST Endpoint para Eventos'))
router.put('/',(req,res)=> res.send('PUT Endpoint para Eventos'))
router.delete('/',(req,res)=> res.send('DELETE Endpoint para Eventos'))

module.exports=router