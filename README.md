# Search Page FE

## Overview

Search Page FE is a job listing web application that helps users search for jobs by job description and location. This app also allows users to filter jobs based on the "Full Time" criteria and view detailed information for each job. The application also features a Google OAuth authentication system, which enabling users to sign in and access the app securely.

## Features

### Home Page
- Search Input: Users can search for jobs by job description and location.
- Full-Time's Checkbox: Filter job results to show only full-time positions.
- Job Listings: Displays a list of jobs with pagination. "More Jobs" functionality allows users to load more job data.
- Job Count Display: Shows the number of jobs currently being displayed, for example, "Showing 3 jobs."

### Detail Page
- Job Details: Displays detailed information for a specific job, including title, company name, job type, location, description, and other relevant data.

### Authentication
- Google OAuth: Before accessing the app, users will require to sign in using their Google account.

## Tech Stack
- React: A JavaScript library for building user interfaces.
- Vite: A fast build tool for React that offers fast hot module replacement (HMR).
- TypeScript: A typed superset of JavaScript that helps catch type-related errors at compile-time.
- TailwindCSS: A utility-first CSS framework for designing responsive, modern UIs.
- MantineUI: A React component library providing pre-styled components for faster UI development.
- ContextAPI: State management solution for managing the app's global state.
- @react-oauth/google: A package to easily integrate Google OAuth authentication with your React apps. You can find more information and installation instructions on [@react-oauth/google](https://www.npmjs.com/package/@react-oauth/google).

## Installation
### 1. Clone the repository
```bash
$ git clone git@github.com:PotasticMaeve/search_page_fe.git
$ cd search_page_fe
```

### 2. Install dependencies
Make sure you have Node.js installed, then run the following command to install all the required dependencies:
```bash
$ npm install
```

### 3. Create a .env file
Create a .env file at the root of your project and add the following environment variables:
```bash
VITE_API_URL=<your-api-url>
VITE_GOOGLE_CLIENT_ID=<your-google-client-id>
```

### 4. Run the app
This will launch the app in your default browser, usually accessible at http://localhost:5173
```bash
$ npm run dev
```