function getRating(watchList){
    // Add your code below this line
    const averageRating = watchList
      // Use filter to find films directed by Christopher Nolan
      .filter(film => film.Director === "Christopher Nolan")
      // Use map to convert their ratings from strings to numbers
      .map(film => Number(film.imdbRating))
      // Use reduce to add together their ratings
      .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
    // Divide by the number of Nolan films to get the average rating
    watchList.filter(film => film.Director === "Christopher Nolan").length;
    // Add your code above this line    
    return averageRating;
  }