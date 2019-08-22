# CFLM

## Project
Build a server-rendered full-stack app

![](https://media.giphy.com/media/65ODCwM00NVmEyLsX3/giphy.gif)

- [ ] Build an app using the Express framework.
- [x] Use a PostgreSQL database to store and retrieve your data.
- [ ] Use the retrieved data to populate a Handlebars template for server-side rendering to be displayed on the front-end.

What's also important:
- [x] Include tests and set up code coverage.
- [ ] Unit tests of pure functions, and integration tests of your server routes, including tests for errors such as 404.
- [ ] You should write tests for your database and use a separate test database and build script.
- [ ] Use Heroku or a similar service to host the app and the database.
- [ ] Try to include ES6 syntax on the server.

## What we'd like to learn

- SQL, queries and testing
- Good error handling
- Testing in general / TDD
- JWTs/local storage/sessions
- Express 
- Handlebars - Make a site with multiple pages but repeating info
- Promises/Fetch
- Stretch Goal: password hashing etc.
- Travis ???
- Stretch goal: sidebar

## Ideas 

- Stupid/Silly/Funny (but show an employer)
- Decent CSS
    - SVGs?
- Achievable
- Form(s)
- Animal adoption agency
    - Different users have different animals

- Use handlebars to render a static site that can be manipulated as data is added

## Code of conduct

- Go as fast as the slowest person
- 20/20/20 
- Pair programming
    - Give precedence to backseat driver's ideas / discussing ideas
- Communicating fluidly
    - Expressing your ideas / Sharing & Discussing
    - Check in every half hour
- Switch up working pairs - drop your work at the time cutoff and explain to your new pairmate
- Regular small commits / regular laptop switching
- Try and keep commits equal
- Take breaks 
- Update the hackmd as you go with code snippets, lessons learned (pictures?)
 - Comment the code
 - ES6
 - Git commits: Feature/ or Fix/
 - Create issues for features and reference them in git commits 
 - TDD 
 - Mobile first 

## Problems we had

- Understanding file structure and how to start setting up our FS. We looked at the examples exercises from the week but they often had different structures which made it difficult to choose one style to go with. We were confused about what would replace our typical server.js or router.js. We also wanted to follow the MVC model which was difficult to implement. 
- We whiteboarded this together using an example from FAC16 and one of the workshops as support which meant we learnt exactly what each directory should include, what the files would do and how to ride our bike with handlebars.
- We spend time understanding the app.js file and particularly what the app.set, app.engine and app.use are for. We did console log a lot and find out there were a big objects and we found out that basically we kind of give instruction to express,so it will know where look for files 


## Animal svgs

https://www.flaticon.com/packs/animal-27
https://www.flaticon.com/packs/animal-27/2

### Our chosen animals


-[Elephant](https://www.flaticon.com/free-icon/elephant_1998642)
-[Octopus](https://www.flaticon.com/free-icon/octopus_1998728)
-[Seal](https://www.flaticon.com/free-icon/seal_1998783)
-[Hippopotamus](https://www.flaticon.com/free-icon/hippopotamus_1998677)
-[Cheeky monkey](https://www.flaticon.com/free-icon/monkey_1998721)
-[Bison](https://www.flaticon.com/free-icon/bison_1998579)
-[Hamster](https://www.flaticon.com/free-icon/hamster_1998671)
-[Llama](https://www.flaticon.com/free-icon/llama_1998716)
-[Panther](https://www.flaticon.com/free-icon/black-panther_1998743)
-[Platypus](https://www.flaticon.com/free-icon/platypus_1998753)
-[Tortoise](https://www.flaticon.com/free-icon/tortoise_1998805)
-[Jellyfish](https://www.flaticon.com/free-icon/jellyfish_1998689)

---
Next batch
-[Pig](https://www.flaticon.com/free-icon/pig_1998749)



### Run your build scripts 



![](https://i.imgur.com/Ux5bi6x.png)

![](https://i.imgur.com/FLjSgOv.png)


![](https://i.imgur.com/uxrwhhU.png)

The location of .env depends on where you run your build script. 
