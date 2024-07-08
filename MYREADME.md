# useEffec: 
* jub bhi humay koi aisa kam, koi data fetch krwana ho API ki help say, koi calculation jo first time a kay usi page pr honi chahiyee
* koi aisa kam jo bohat mandatory ho jub hum us screen pr ayeen tb wo hona hi chahiyee us saray logic ko hum dalatay hay `useEffect` may.

* useEffect ka kya kam hay?
. It takes two arguments: a function and an optional array of dependencies

* Function Argument: 
. This is the function that contains the code you want to run after each render of the component. It may contain asynchronous code (like data fetching), subscriptions, or any imperative code.

* Dependencies Array (Optional): 
. This array specifies when the useEffect function should re-run. It contains variables or props that the effect depends on. If the values in this array change between renders, the effect function will re-run.

* With emppty dependency useEffect call after every time when function call.

* jub hum dependency detay hay to hum btaty hay kay useEffect ki logic kb chalani chahiyee. jo kay madatory nhi hay. optional hay. bilkay hum usay apni need kay hisab say used kr saktay hay.