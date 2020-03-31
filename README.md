# ES3 Object properties iteration

Before ES6, the only way of iterating with an object's properties was the `for...in` loop. When you loop through an object with the `for...in` loop, you need to verify that the property belongs to the object (and is not inherited.).

One known limitation of the `for...in` loop is that it iterates through all properties in the Prototype chain. If you only want to show the object's properties, without the inherited ones, you need to verify that the property belongs to the object. The simplest way to do this is by using the **.hasOwnProperty()** method.
