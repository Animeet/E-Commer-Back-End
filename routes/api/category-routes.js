const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const results  = await Category.findAll()

  res.json(results)
});

// router.get('/', (req, res) => {
//   // find all categories
//   // be sure to include its associated Products
//   Category.findAll()
//   .then(results => {
//     res.json(results)
//   })
// });

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const results = await Category.findByPk(req.params.id);

  res.json(results)
});

router.post('/', async (req, res) => {
  // create a new category
  const results = await Category.create(req.body)
  res.json(results)
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const results = await Category.update(req.body)
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
