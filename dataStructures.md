### Notes on JavaScript Data Structures and Algorithms

Let me begin by explaining <b>What is a constructor function and what does it do?</b>
<i>A constructor function is simply a function that creates an Object class. It allows us to create multiple instances of that class. In other words, What this simply means is that a contructor function allows us to create a lot of object very quickly and these objects will have the same property and the same functionality as they belong to the same class.</i><br>

<i>Lets simplify this further with the help of an example. Lets suppose there is a social networking site with billions of users. Imagine these users as objects of the same class. So they will all inherit the same properties like First Name, Last Name, Email, Phone number etc. Suppose we had to build a site like that and create a bunch of users, we will start by creating a constructor function like so: </i>

```js
function User(firstName, lastName, age, gender, email) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.gender = gender;
	this.email = email;
};
```

<i>Notice that the function `User` is capitalized. This is a common convention when creating a constructor function. The function contains parameters like firstName, lastName etc. which are going to be the proprties of all instances of the User class.</i><br>

<i>Now lets use this User class to construct some User objects (or instances).</i>

```js
var user1 = new User("Martina", "Novratilova", "30", "Female", martiNova@xyz.com);
```

<i>We just created a `user1` object from our `User` class. Notice the use of the `new` keyword which is required to invoke the User class.</i>