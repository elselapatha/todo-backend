const {Router} =require('express')
const router=Router()

router.get('/', function (req, res) {
  res.send([]);
});

router.post('/', function (req, res) {
  res.send('success post!');
});

router.patch('/:id', function (req, res) {
  res.send('success patch!');
});

router.delete('/:id', function (req, res) {
  res.send('success delete!');
});

module.exports=router
