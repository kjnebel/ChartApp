# ChartApp

This application was developed using a Django backend, Next.js Frontend, Docker for the backend, and ApexCharts.js for the charts in the frontend.
For the Next.js I used React with Typescript.
The Django backend was implemented using Python.

### *Must have Python, Docker, and Node.js installed

## Backend setup
To start the backup you will first want to create and activate a virtual environment in the ChartAppBackend/chartapp-backend folder using the following commands for windows:  
$ python3 -m venv env  
$ env\Scripts\activate  

And for Mac:  
$ python -m venv env  
$ source env/bin/activate  

Then you will want to run the docker command for the backend in the chartapp-backend folder:  
$ docker-compose up --build

The backend should now be running on your device.

## Frontend setup
To setup the frontend you will first want to run the following command in the ChartAppFrontend/chart-app directory:  
$ npm install

Then to run the frontend you will use:   
$ npm run dev

The frontend should now be running at http://localhost:3000/ 
