function findAccountById(accounts, id) {
  const result = accounts.find (account => account.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {
  const alphabetized = accounts.sort((lastnameA, lastnameB) => lastnameA.name.last.toLowerCase()< lastnameB.name.last.toLowerCase()?-1:1 )
return alphabetized;
}


function getTotalNumberOfBorrows(account, books) {
  const {id} = account
  const reducer = (previousValue, currentBook) => {
    const {borrows} = currentBook
    for (let element of borrows) {
      if (element.id === id) previousValue++
    }
    return previousValue
  }
  const totalBorrows = books.reduce(reducer, 0)
  return totalBorrows
}
  

function getBooksPossessedByAccount(account, books, authors) {
  const borrowed = books.filter((book) => account.id === book.borrows[0].id);
  borrowed.forEach(book => book.author = authors.find(author => book.authorId === author.id));
console.log(borrowed)
return borrowed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
