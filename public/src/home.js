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
  let littleHelper = books.map((thisBook) => thisBook.genre);
  let commonGenres = [];
  littleHelper.forEach((genre) => {
    let created = commonGenres.findIndex((genreObj) => genreObj.name === genre);
    created >= 0
      ? commonGenres[created].count++
      : commonGenres.push({ name: genre, count: 1 }); 
  });
  return commonGenres.sort((obj1, obj2) => obj2.count - obj1.count).slice(0, 5);
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