// Write your code here
console.log("Hello!");

class Book  {  
  constructor(Title, Author, ISBN, numCopies) {
    this.Title = Title;
    this.Author = Author;
    this.ISBN = ISBN;
    this.numCopies = numCopies ;
  }
  // Getter
  get Avalability() {
    let stock = "in stock";
    if(this.numCopies == 0){
      stock = "out of stock";
    } else if(this.numCopies < 10) {
      stock = "low stock";
    }
    return stock;
  }
  // Method
  sell(numSold = 1) {
    this.numCopies -= numSold;
  }
  restock(numCopies = 5) {
    this.numCopies += numCopies;
  }

}

const book = new Book("Book Title", "Book Author", "12345678", "10");
console.log("Book: " , book.Title, book.Author, book.ISBN, book.numCopies);
console.log("book Avalability: ", book.Avalability);
book.sell();
console.log("book Avalability sell: ", book.Avalability);
book.restock(5);
console.log("book Avalability restock: ", book.Avalability);