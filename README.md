# node-movie-finder
logs request of movie, without fetching OMDBI api

Build an Express server that responds to GET requests at http://localhost:3000/
Proxy incoming requests to OMDB by manually crafting an HTTP request using axios.
Forward the URL parameters to OMDB. 
Cache movie data using a hash table or object. (Use the provided activity diagram to grok the logic)
Log all incoming requests using the morgan middleware library
