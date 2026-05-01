//Readline require to link datejs in json for the date
const require('datejs');

//Create a function named combineUsers that will contain an indeterminite amount of arrays
function combineUsers(...args) {
  const combinedObjects = {users: []}; //Variable with key of users
  for (const userArray of args) {
    combinedObjects.users = [...combinedObjects.users, ...userArray]; // loop throough args to isolate each array
  }

  combinedObjects.merge_date = Date.today().toString('M/d/yyyy');
  return combinedObjects;
  
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};