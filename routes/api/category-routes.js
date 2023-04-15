const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const results  = await Category.findAll({
    include: [
      {
        model: Product,
        attributes: [
          "product_name",
          "price",
          "stock"
        ]
      }
    ]
  })


  res.json(results)
});



router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const results = await Category.findByPk(req.params.id, {
    include: [
      {
        model: Product,
        attributes: [
          "product_name",
          "price",
          "stock"
        ]
      }
    ]
  });

  res.json(results)
});



router.post('/', async (req, res) => {
  // create a new category
  const results = await Category.create(req.body)
  res.json(results)
});



//UNSURE HOW TO START THIS. EXAMPLE IN PRODUCT-ROUTES LOOKS CONFUSING
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const results = await Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  res.json(results)
});



router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const results = await Category.destroy({
    where: {
      id: req.params.id
    }
  })
  res.json(results)
});



module.exports = router;
