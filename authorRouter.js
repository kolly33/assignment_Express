const express = require('express');

const router = express.Router();

// Simulated in-memory data store (replace with database integration)
const authors = [
    {
        name: 'J.K. Rowling',
        id: 1,
        born: 1965,
    },
    {
        name: 'J.R.R. Tolkien',
        id: 2,
        born: 1892,
    },
    {
        name: 'George R.R. Martin',
        id: 3,
        born: 1948,
    },
]

// Middleware for simple logging (replace with a more robust logger)
// router.use((req, res, next) => {
//   console.log(`${req.method} request to ${req.url}`);
//   next();
// });

// Create (POST) endpoint
router.post('/', (req, res) => {
  const newAuthor = req.body;
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});

// Read (GET) all endpoint
router.get('/', (req, res) => {
  res.json(authors);
});

// Read (GET) by ID endpoint

router.get('/:id', (req, res) => {
    const id = req.params.id
    const author = authors.find(author => author.id == id)

    if (!author) {
        res.status(404).end("author not found")
        return
    }

    res.json(author)
})
// router.get('/:id', (req, res) => {
//   const authorId = req.params.id;
//   const author = authors.find(a => a.id === authorId);
//   if (author) {
//     res.json(author);
//   } else {
//     res.status(404).send('Author not found');
//   }
// });

// Update (PUT) by ID endpoint
router.put('/:id', (req, res) => {
    const id = req.params.id
    const author = req.body
    const index = authors.findIndex(author => author.id == id)

    if (index == -1) {
        res.status(404).end("author not found")
        return
    }

    authors[index] = author
    res.json(author)
})
// router.put('/:id', (req, res) => {
//   const authorId = req.params.id;
//   const updatedAuthor = req.body;
//   const authorIndex = authors.findIndex(a => a.id === authorId);
//   if (authorIndex !== -1) {
//     authors[authorIndex] = updatedAuthor;
//     res.json(updatedAuthor);
//   } else {
//     res.status(404).send('Author not found');
//   }
// });

// Delete (DELETE) by ID endpoint
router.delete('/:id', (req, res) => {
    const id = req.params.id
    const index = authors.findIndex(author => author.id == id)
    if (index == -1) {
        res.status(404).end("author not found")
        return
    }

    authors.splice(index, 1)
    res.json(authors)
})
// router.delete('/:id', (req, res) => {
//   const authorId = req.params.id;
//   const authorIndex = authors.findIndex(a => a.id === authorId);
//   if (authorIndex !== -1) {
//     authors.splice(authorIndex, 1);
//     res.status(204).send(); // No content
//   } else {
//     res.status(404).send('Author not found');
//   }
// });



module.exports = router;
