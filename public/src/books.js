function findAuthorById(authors, id) {
  let result = authors.find((author) => author.id === id);
  return result;
}

function findBookById(books, id) {
  let result = books.find((book) => book.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  let result = [];
  let checkedOut = books.filter(book => book.borrows[0].returned === false);
  let returned = books.filter(book => book.borrows[0].returned === true);
  result.push(checkedOut, returned)
  return result;
}
 
function getBorrowersForBook(book, accounts) {
  let allBorrowers = [];
book.borrows.forEach((borrowed) => {
let account = accounts.find((el) => el.id === borrowed.id);
account.returned = borrowed.returned; 
allBorrowers.push(account);
});
return allBorrowers.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
