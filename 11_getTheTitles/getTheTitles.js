const getTheTitles = function(array) {
    const books = [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
      ]

    return array.map(books => books.title);
};


// Do not edit below this line
module.exports = getTheTitles;
