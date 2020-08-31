# Petful Server 

    https://github.com/thinkful-ei-panda/DSA_petful_server_gage_josh

#### Endpoints 

`api/pets`
- `/ GET`
        returns the first in queue of both Cats and Dogs 
```
{
   "cat":{
      "age":2,
      "breed":"Bengal",
      "description":"Grey cat",
      "gender":"Female",
      "imageURL":"https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "name":"Grumpy-Face",
      "story":"Thrown on the street"
   },
   "dog":{
      "imageURL":"https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "description":"Black pug.",
      "name":"Bilbo",
      "gender":"Male",
      "age":3,
      "breed":"Pug",
      "story":"Owner Passed away"
   }
}
```

- `/ DELETE`
    removes ether based on on the contents of `{type : ['cats' or 'dogs']}` so it would look like  `{type:cats}` in the request body 

`api/people`

- `/ GET`
    gets an array of all users i.e `[ 'Soutaiseiriron' , 'Увула','Buerak','Shawn Lee's Ping Pong Orchestra']`

- `/ POST`
    post new user to that array based on the object sent with the key word "person"
        i.e. `{person : 'He Was Eaten By Owls'}`


![hmmmm](/img/expert.jpg)


- `/ DELETE`
    .... im going to leave this one up to your imagination on what this endpoint does.