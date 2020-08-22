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


### User Management Module 

![alt text](https://github.com/sehgalromal/Serverless-Cloud-Plumbing-System/blob/master/Architecture_Screenshots/signup.png)


This feature provide users the flexibility to sign up using their email account with the help of website registration page. All the the user details are managed in Amazon MySQL RDS instance. The user registration details are taken in two phases; first phase receiving Email, password, and the second phase getting security questions. These details are then sent to a cloud function which in turn stores the credentials in Amazon MYSQL RDS instance and security question and answers in GCP Firestore. 


	   








