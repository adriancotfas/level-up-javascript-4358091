// Write your code here

class Movie  {  
  constructor(Title, Director, Gene, ReleaseYear, Rating) {
    this.title = Title;
    this.director = Director;
    this.gene = Gene;
    this.releaseYear = ReleaseYear;
    this.rating = Rating;
  }
  // Getter
  get Overview() {
    return `${this.title}, a ${this.gene} film directed by ${this.director} was relesed in ${this.releaseYear}, it receved a rating of ${this.rating}`;
  }
}

const movie = new Movie("Movie Title", "Movie director", "Movie gene", "Movie releaseYear","Movie rating");
console.log( movie.Overview ); 
