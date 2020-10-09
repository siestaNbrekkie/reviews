![Reviews Microservice Demo](Demo/Reviews_gif.gif)

# Reviews - SiestaNbrekkie

> Reviews microservice module and backend design for a lodging and home rental web page. Built with React, Express, and MongoDB.

## Related Projects

  - https://github.com/siestaNbrekkie/calendar
  - https://github.com/siestaNbrekkie/image-carousel
  - https://github.com/siestaNbrekkie/reservations

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> After page has loaded you will be able to view overall rating for specfic location, that overall rating broken out into six different ratable sections, and the reviews written by users that have stayed at that location. If desired the ability to click through multiple pages of reviews is available and also search functionality to search within reviews for specific words or phrases using the search bar.

## Requirements

- Node 6.13.0 or higher

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
npm run seed-db
npm run build
npm run start in separate terminal window
```
## RESTful CRUD API Routes

- Read / GET - view reviews from specific roomId (1 - 20):         /rooms/:roomId 
