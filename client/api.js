import request from 'superagent'

export function getBooks(callback) {
  callback(books)
}

const books = [

  {
    id: 0,
    title: "Catcher in the Rye",
    author: "J. D. Salinger",
    genre: "Coming-of-Age Fiction",
    description: "Holden Caulfield holds a place in the American psyche akin to Huck Finn and Tom Sawyer: an exquisitely rendered character with whom nearly anyone can identify.",
    image: "https://upload.wikimedia.org/wikipedia/en/3/32/Rye_catcher.jpg"
  },

  {
    id: 1,
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Historical Fiction",
    description: "War and Peace is a novel by the Russian author Leo Tolstoy, which is regarded as a central work of world literature and one of Tolstoy's finest literary achievements.",
    image: "http://t3.gstatic.com/images?q=tbn:ANd9GcTAnCgUQcW2e-HqpE6wC9VwXrcGh9_RbXInr3nZScQxpRdB8W4M"
  }
]
