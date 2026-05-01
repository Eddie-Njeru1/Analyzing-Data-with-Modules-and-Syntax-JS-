//Readline require to link datejs in json for the date
const require('datejs');

//Create a function named combineUsers that will contain an indeterminite amount of arrays
function combineUsers(...args) {
  const combinedObjects = {users: []}; //Variable with key of users
  for (const userArray of args) { // loop throough args to isolate each array
    combinedObjects.users = [...combinedObjects.users, ...userArray]; 
  }

  combinedObjects.merge_date = Date.today().toString('M/d/yyyy'); //Fetch dates
  return combinedObjects;
  
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};