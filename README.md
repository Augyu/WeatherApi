# Weather API
A simple API based on Express to get current temperature
The source of weather data is from [OpenWeather](https://openweathermap.org/).

## API
#### GET location/{*zipcode*}?scale={*Fahrenheit, Celsius*}
Response
```json=
{
    temperature: 6.1,
    scale: "Fahrenheit"
}
```
## Packages
### Production
- axios
### Dev
- nodemon
### Test
- mocha
- chai
## Disclaimer

Please do not share this assignment or submission with the public. In addition, 
if it appears you copied another person's work nearly verbatim, you will be 
disqualified. If you're applying for a student, intern, or graduate research 
position, we will additionally forward the plagiarism incident to your school.

## The Assignment

Write an API application that allows users to check the current temperature.

The API application should provide one route:

GET /locations/{zip-code}

The response should be returned with 200 status code with a payload in JSON format 
as follows:

{
    "temperature": number
    "scale": "string"
}

where "temperature" is a number representing the current temperature of the specified 
zip code and "scale" is either "Fahrenheit" and "Celsius".

By default, Fahrenheit will be returned.  However, users can optionally specify 
"scale" as a query string when making a call.

Example:

To get Blacksburg's current temperature:

Request:

GET /locations/24060

Response:

200

{
    "temperature": 43
    "scale": "Fahrenheit"
}


To get Beverly Hills, California's current temperature in Celsius:

Request:

GET /locations/90210?scale=Celsius

Response:

200

{
    "temperature": 25
    "scale": "Celsius"
}


To get Chicago's current temperature in Fahrenheit:

Request:

GET /locations/60606?scale=Fahrenheit

Response:

200

{
    "temperature": 63
    "scale": "Fahrenheit"
}



## The Data

There are several free weather APIs available in the Internet. 
Please search and select the best available one.


## Requirements

### Must Haves
These are the requirements your submission must fulfill to be considered 
correct.

* The application is developed using either JavaScript or TypeScript.
* The application is available at `http://localhost:8080` after invoking 
  `npm install` followed by `npm start`
* Your code is something you'd be comfortable putting in production and 
  having your team maintaining
* Send us a zip file containing all source code and any artifacts for 
  the solution.  Please do not include any binary files. 
* Please do not disclose the project on a public source code repository.

### Should Have
These should be fulfilled, but if they aren't please let us know why.

* Your code is tested in some automated fashion when invoking `npm test`
* Source control history (e.g. the `.git` directory or a link to Github)

### Nice to Have
Stretch goals. If you fulfill these requirements, you get bonus points, but 
they aren't required.

* Design rationale

### Time constraint
We look forward to reviewing your solution within two days from the time we 
sent this assignment to you.
