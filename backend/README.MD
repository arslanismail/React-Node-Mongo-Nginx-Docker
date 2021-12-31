# TODO-- WebService (Node | Express | Mongo )

This is a simple assignment project that i worked on and following technologies are being used in this project
* Node.js with Express Framework
* MongoDb
* Docker and Docker-compose 
## Installation

You are required to install the following pieces of software on your machine where you want to run this web service for testing 
* Docker (CLI Support)
* Docker-compose (CLI Support)


***
#### Step 1: Navigate to the project directory by cmd or bash

```bash
cd {project_name}
``` 
***
***
#### Step 2: Now you are at the root of your project folder 
The root of the project folder contains a docker-compose.yaml file which will help us make 3 containers that are
 
* webserver (For Our Express App) 
* mongodb (For Our Database)

##### Run The Following commands

```bash
1. docker-compose build
# This command will download the images for Redis and MongoDB from docker hub and build image for our Express app and install all dependencies

2. docker-compose up -d
# This Command will basically run the images in that we made by previous build command "-d" flag will make it run in the background 
```

***




