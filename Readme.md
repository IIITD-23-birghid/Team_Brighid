

## Check out the project
The Frontend is hosted on Cloudflare [Link to Frontend](https://app-42p.pages.dev/)
Its a PWA App, so open it up on your phones , and you can install it by :
1. Tap on the 3 dots at the top of your browser
2. Click on `Add to Home screen`
3. Voila!

The Backend is hosted on a EC2 instance at http://35.154.227.99/
Made using Node.js and MongoDB

#### The Object Detection Thingy 🧠
We at Brighid aren't exactly maestros of Machine Learning
But we sure know how to make things work
So we used [Teachable Machine]() and initiative by google to make ML more accessible and easily trainable
We can showcase the Model on our machines (cause we don't exactly know how to transfer them to github 👀)

Some Images from our testing:
![[Screenshot 2023-10-15 at 10.51.02 AM.png]]

![[Screenshot 2023-10-15 at 10.50.38 AM.png]]

![[Screenshot 2023-10-15 at 10.49.55 AM.png]]

![[Screenshot 2023-10-15 at 10.49.34 AM.png]]


PSS - We have also included our failed attempts at using `tensorflow.js` in a folder called `tensorflow-testing` 
## Running it yourself 🏃‍♀️
1. Clone the Repo
```bash
git clone 
```
2. Change directory to frontend and backend and run `npm install`
```bash
cd frontend
npm i
cd ..
cd backend
npm i
```
3. Start the frontend
```bash
cd frontend
npm run start
```
4. Start the backend
	1. The backend requires a mongoDB connection URI which you can generate on [mongoDB Atlas](https://www.mongodb.com/)
	2. Replace the `placeholder` on line 7 in `index.js` with the mongoURI

DONE!



## Problem Statement 
Create a data-driven tool that enables women to measure, reduce, and track their carbon footprint, contributing to global efforts to combat climate change

## What are we doing ?

Helping users measure , track and reduce their carbon footprint
- Making it easier for users to catalogue and add their products using **Object classification** 
- Getting recommendations for sustainable products with lower $CO_2$ emissions
- Sharing stories about everyday people who have made a huge contribution to reducing $CO_2$ emissions, and encouraging users to "do their part"
	- The users will be able to see how much $CO_2$ emissions they make everyday, thus making it very easy to track and reduce usage
- 
## Research 🧐

### Carbon Footprint of common items
##### Food Consumption
![[Screenshot 2023-10-14 at 6.06.06 PM.png]]
##### General Consumption
![[Screenshot 2023-10-14 at 6.06.31 PM.png]]
##### Transportation
![[Screenshot 2023-10-14 at 6.06.48 PM.png]]
##### At Home
![[Screenshot 2023-10-14 at 6.07.29 PM.png]]


### Data Sourcing
- [Food Data and Research Reference](https://www.kaggle.com/code/selfvivek/choose-your-food-wisely)
	![[Screenshot 2023-10-14 at 6.39.22 PM.png]]
- [Metro Travel](https://www.delhimetrorail.com/carbonlite-metro-travel)
- [AI Models Carbon Emissions](https://www.technologyreview.com/2022/11/14/1063192/were-getting-a-better-idea-of-ais-true-carbon-footprint/)




%% ### Stakeholders

### Scalability

### Impact




## Mock Ups %%

## Technical Implementations 🏃‍♀️🧪
Tech we are using
- Web pwa using React js
- MongoDB for User DB
- [tensorflow.js](https://www.tensorflow.org/js) for Object classification Model Implementation on user device
	- No breach of user privacy , as the model runs on user's smartphone

## Problems we are facing
### Data Sourcing
- Finding reliable data for $CO_2$ emissions of specific products
	- Eg Emissions will be different for 2 similar products if their manufacturing methods are different


## References
[Tensor Flow Tutorials](https://codelabs.developers.google.com/codelabs/tensorflowjs-object-detection?hl=en#7)
[Wondefull Carbon Footprint Website](https://clevercarbon.io/carbon-footprint-of-common-items/)
