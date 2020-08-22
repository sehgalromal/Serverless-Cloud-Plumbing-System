# Serverless Cloud Plumbing System (DevOps) 

The Serverless Cloud Plumbing System is a learning management system that follows the multi cloud deployment model.Our system can be configured based on the University requirements and is equipped with many services for students and instructors. The system is designed using serverless technologies to process data and uses different back-end cloud services including Amazon Web Services and Google Cloud Platform. The project is built using various technologies React JS, Node js and Python.   

Our Management System includes the following components :
   
(1.) User Management using GCP and AWS, 

(2.) User Authentication using GCP and AWS,  

(3.) Online Support using Amazon Lex,  

(4.) Instant Messaging using GCP Pub/Sub,  

(5.) Data Processing Containerization on Google Cloud Run,  

(6.) Unsupervised K-Means Clustering using GCP AI Platform and Cloud Functions

(7.) Sentiment Analysis using Amazon Comprehend. 


* Date Created: 03 30 2020
* Last Modification Date: 08 13 2020

### Authors

* Romal Sehgal 
* Ram Prasath Meganathan 
* Sai Pavan Akuralapu 
* Shivam Gupta


### Architecture 

![alt text](https://github.com/sehgalromal/Serverless-Cloud-Plumbing-System/blob/master/Architecture_Screenshots/Overall_Architecture.png)

All the modules of the system are de-coupled and have no dependency among each other. This is a Multi-Cloud architecture that uses Google Cloud Platform and Amazon Web Services. 


### User Management Module GCP Firestore and Amazon RDS

#### Event Driven Archiecture

![alt text](https://github.com/sehgalromal/Serverless-Cloud-Plumbing-System/blob/master/Architecture_Screenshots/signup.png)


This feature provide users the flexibility to sign up using their email account with the help of website registration page. All the the user details are managed in Amazon MySQL RDS instance. The user registration details are taken in two phases; first phase receiving Email, password, and the second phase getting security questions. These details are then sent to a cloud function which in turn stores the credentials in Amazon MYSQL RDS instance and security question and answers in GCP Firestore. 


### User Authentication Module using Amazon Cognito 

#### Event Driven Archiecture

![alt text](https://github.com/sehgalromal/Serverless-Cloud-Plumbing-System/blob/master/Architecture_Screenshots/image18.png)
	   
This feature uses OAuth2.0 feature of Google cloud. It allows the users to sign in with their google account details and does token-based authentication using OpenID Connect tokens. For the user authentication module, we have used AWS Lambda, Amazon Cognito, Amazon RDS, GCP Cloud functions, and GCP Cloud Firestore.  

### Online Support Module using Amazon Lex 

#### Event Driven Archiecture

![alt text](https://github.com/sehgalromal/Serverless-Cloud-Plumbing-System/blob/master/Architecture_Screenshots/image18.png)

This module provides basic assistance services to the users. Based on use case requirements, the module was developed to answer to the queries related to Navigation or displaying number of active users when logged in. The Online Support module is implemented using Amazon Lex Service and deployed to the front-end web application using Amazon Amplify Framework. 


### Instant Messaging module using Amazon Pub/Sub

#### Event Driven Archiecture

![alt text](https://github.com/sehgalromal/Serverless-Cloud-Plumbing-System/blob/master/Architecture_Screenshots/image40.png)


Chat module has been implemented by using WebSockets API present in API Gateway services. It has been implemented by creating three routes i.e., connect, disconnect and default message routes and three lambda functions has been created for those based on routes. DynamoDB is used for storing the user conversations and connection IDs. Whenever the user gets connected, connect lambda function creates a unique id and stores it dynamoDB and default message lambda function is used for sending message to all the users who are online and it sends messages based on connection ids present in DynamoDB. Disconnect lambda function deletes connectionID that has  present in DynamoDB whenever user gets disconnected. 


### Data Processing Module using Google Cloud Run 

#### Event Driven Archiecture

![alt text](https://github.com/sehgalromal/Serverless-Cloud-Plumbing-System/blob/master/Architecture_Screenshots/image50.png)

This module provide the users a word cloud of the upper-case entities based on the file uploaded by the user. It uses the combination of NLTK library and  a function deployed inside Cloud Run Docker container that extracts information from files and use them for word cloud. Based on the context of the sentences present in the document, named entities are fetched and then word cloud is formed. 

### Machine Learning Module using GCP AI

#### Event Driven Archiecture

![alt text](https://github.com/sehgalromal/Serverless-Cloud-Plumbing-System/blob/master/Architecture_Screenshots/image55.png)

This module provide the functionality to classify and store the files in a specific category. For this module, we have used Google Cloud Platform for building, training, and deploying Machine Learning models. Since the primary objective of this module is to classify the files and store the files based on their similarity . We have created our own customized k-means algorithm to meet the use-case requirements.  


### Sentiment Analysis using Amazon Comprehend 

#### Event Driven Archiecture

![alt text](https://github.com/sehgalromal/Serverless-Cloud-Plumbing-System/blob/master/Architecture_Screenshots/image67.png)

Based user chat messages, sentiment analysis is performed. For the Sentiment Analysis module, we have used AWS Lambda, Amazon Lex, Amazon Comprehend, and Amazon S3.  






