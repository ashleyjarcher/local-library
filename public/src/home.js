function getTotalBooksCount(books) {
return books.length; 
}

function getTotalAccountsCount(accounts) {
  return accounts.length; 
}

function getBooksBorrowedCount(books){
  let borrowedBooks = books.filter(thisBook => thisBook.borrows[0].returned === false);
  return borrowedBooks.length; 
}

function getMostCommonGenres(books) {
  let helper = function (element) {
  element.sort((obj1, obj2) => (obj1.count > obj2.count ? -1 : 1));
};
  let result = [];
  books.forEach((book) => {
    let created = result.findIndex((genreObj) => genreObj.name === book.genre);
    //check to see if object is already created
    if (created > 0) {
      result[created].count++;
    } else {
      //else push in the whole new object
      result.push({ name: book.genre, count: 1 });
    }
    helper(result);
  });
  return result.slice(0, 5);
}

function getMostPopularBooks(books) {
  const popularBooks = books.map((thisBook) =>({
  name: thisBook.title,
  count: thisBook.borrows.length,
  }));
  return popularBooks.sort((obj1,obj2) => obj2.count - obj1.count).slice(0,5);
}
 
function getMostPopularAuthors(books, authors) {
  let fiveMostPop = []
  for (let thisAuthor of authors){
    for (let thisBook of books){
      if (thisAuthor.id === thisBook.authorId){
        fiveMostPop.push({name: `${thisAuthor.name.first} ${thisAuthor.name.last}`, count: thisBook.borrows.length})
      }
    }
  }
  return fiveMostPop.sort((obj1, obj2) => obj1.count > obj2.count ? -1 :1).slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
