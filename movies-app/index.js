let movieData = []

const joinMovie = event =>{
    event.preventDefault()
    const movieName = document.querySelector("#movieName").value
    const movieYear = document.querySelector("#movieYear").value

    movieData.push({movie: movieName, year: movieYear})

    console.log(movieData)
}