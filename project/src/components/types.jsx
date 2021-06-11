export class FilmType {
  constructor({id, name, posterImage, previewImage, backgroundImage, backgroundColor, videoLink, previewVideoLink, description, rating, scoresCount, director, starring, runTime, genre, released, isFavorite}) {
    this.id = id;
    this.name = name;
    this.posterImage = posterImage;
    this.previewImage = previewImage;
    this.backgroundImage = backgroundImage;
    this.backgroundColor = backgroundColor;
    this.videoLink = videoLink;
    this.previewVideoLink = previewVideoLink;
    this.description = description;
    this.rating = rating;
    this.scoresCount = scoresCount;
    this.director = director;
    this.starring = starring;
    this.runTime = runTime;
    this.genre = genre;
    this.released = released;
    this.isFavorite = isFavorite;
  }
}
