# URL Shortener

This is a simple URL shortener application built with Node.js and MongoDB along .

## Features

- Shorten URLs 
- Track number of visits along with timings at the shortened URLs

## Installation

1. Clone this repository:

2. Install dependencies:
```
npm install
```
3. Start the server:
```
npm start
```
## Usage

- To shorten a URL, make a POST request to `/url` with the original URL in the request body as json.
- To visit a shortened URL, navigate to `/url/:id` in your browser, replacing `:id` with the short ID of the URL.
- To delete a shortened URL, make a DELETE request to `/url/:id`, replacing `:id` with the short ID of the URL.
