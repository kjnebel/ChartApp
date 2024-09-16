# ChartApp

This application is a basic fullstack project designed to take data from the back end and display it as charts in the front end. It was developed using a Django back end, Next.js Frontend, Docker to package the back end, and ApexCharts.js for the charts in the frontend.
For the Next.js I used React with Typescript.
The Django back end was implemented using Python.

## Requirements:
  + Must have Python installed
  + Must have Docker installed
  + Must have Node.js or Next.js installed

## Backend setup
  To start the back end you will first want to create and activate a virtual environment in the ChartAppBackend/chartapp-backend folder using the following commands for windows:  
  ```sh
  $ cd ChartApp/ChartAppBackend/chartapp-backend
  $ python -m venv env  
  $ env\Scripts\activate  
  ```
  
  And for Mac:  
  ```sh
  $ cd ChartApp/ChartAppBackend/chartapp-backend
  $ python -m venv env  
  $ source env/bin/activate  
  ```
  
  Then you will want to run the docker command for the backend in the chartapp-backend folder:  
  ```sh
  $ docker-compose up --build
  ```
  
  **The backend should now be running on your device.**
  
## Frontend setup
  To setup and run the frontend you will first want to run the following command in the ChartAppFrontend/chart-app directory:  
  ```sh
  $ cd ChartApp/ChartAppFrontend/chart-app
  $ npm install
  $ npm run dev
  ```

  **The frontend should now be running at [http://localhost:3000/](http://localhost:3000/)**
