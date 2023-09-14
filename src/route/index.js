// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
const index2 = require('./index2')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', test)
router.use('/index2', index2)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
