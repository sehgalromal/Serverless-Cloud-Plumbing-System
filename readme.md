# Serverless Cloud Plumbing System (DevOps) 

The Serverless Cloud Plumbing System is a learning management system that follows the multi cloud deployment model.Our system can be configured based on the University requirements and is equipped with many services for students and instructors. The system is designed using serverless technologies to process data and uses different back-end cloud services including Amazon Web Services and Google Cloud Platform. The project is built using various technologies React JS, Node js and Python.   


* Date Created: 03 30 2020
* Last Modification Date: 08 13 2020

### Authors

* Romal Sehgal 
* Ram Prasath Meganathan 
* Sai Pavan Akuralapu 
* Shivam Gupta


### Architecture 

![alt text](https://github.com/sehgalromal/Serverless-Cloud-Plumbing-System/blob/master/Architecture_Screenshots/Overall_Architecture.png)

The architecture above explains how the application works by communicating with many other services internally. The user can access either web application or the mobile application. The application load balancer handles all the incoming traffic to the application., this load balancer is provided by Elastic Container Service. The load balancer internally also has a auto scaling feature where based on the metric provided by us it creates new instances of docker and shifts the load to the appropriate service. All the docker are instantiated by Elastic Bean Stalk, the EBS hosts multi container docker based on the Docker Aws configuration provided. Each docker instance represents a single microservice running on it. The AWS Cognito is used for user authentication and management and the DynamoDB is used for data store. 


### Authentication powered by Amazon Cognito

![alt text](https://github.com/sehgalromal/CanadaTourismApplication/blob/master/Projects-Assets-Screenshots/image4.jpg?raw=true)

### Web Application 

We developed the web application using HTML5, CSS3, Javascript and Bootstrap. The web application contains responsive web pages for searching the landmark, Description of landmark, Booking page and final ticket receipt and PDF page.  

    (1) Search/Home page 
    
	The homepage of the website is designed using HTML and jQuery. The styling of the contents in the homepage is done using bootstrap. The homepage consists 	  of a search bar on the top from where the user can search for different tourist locations. However, it also displays all the 40 tourist locations in the 	   form of a card view so that user can have a gist of all the places that are available on the website.
	
   
    (2) Login page 
    
        We have used AWS Cognito to provide login and user management capability to our application. We have used default login, sign-up and forgot password pages   	     for both android and web application. Since we are using Cognito we are able to achieve two-factor authentication and login management without writing   	      single piece of code, but once user have logged in we maintain user token which helps in user management throughout the application.   
   
    (3) Description Page
    
       After searching for a particular location, the user can now see a detailed view of that searched location. It gives the user a significant amount 
       of details of the searched location. After this the user can proceed to the ticket booking part. 
      
   
    (4) Booking Details Page 
    
	The booking details page provides a interface for users to enter details related to the travel. It takes in booking information using which it can book 	ticket for user. It validates the users by calling validation service and once validated it books tickets for the user. 

   
    (5) Tickets page 
    
        Once the payment is validated, the ticket is generated and shown to the user as below. The user can even download the ticket in the pdf form offline. 
    










