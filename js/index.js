import users from "./users.js";

console.log(users);


// ******* TASK-1***********

const getUserNames = users => { return users.map( users => users.name)
  // твой код
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]



``
// ************ TASK-2 *************

const getUsersWithEyeColor = (users, color) => { return users.filter(element => element.eyeColor === color)
  // твой код
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]




// ************* TASK-3 *****************
const getUsersWithGender = (users, gender) => { return users.filter(user => user.gender === gender).map(user => user.name);
  // твой код
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]




// ***************** TASK-4 ***************
// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {return users.filter(user => !user.isActive);
  // твой код
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]



// **************** TASK-5 ***********************

const getUserWithEmail = (users, email) => { return users.find(users => users.email === email)
  // твой код
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}





// ******************** TASK-6 **********************

const getUsersWithAge = (users, min, max) => { return users.filter(user => user.age >= min && user.age <= max);
  // твой код
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]



// ****************** TASK-7 ********************
const calculateTotalBalance = users => { return users.reduce((totalBalance, users) => totalBalance += users.balance, 0)
  // твой код
};

console.log(calculateTotalBalance(users)); // 20916




// ********************* TASK-8 *************************
const getUsersWithFriend = (users,friendName) => {  return users.filter(users => users.friends.includes(friendName));
  // твой код
};



console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


// *********************** TASK-9 ***************************

const getNamesSortedByFriendsCount = users => { return users.sort((a,b)=> a.friends.length > b.friends.length ? 1 : -1).map(x => x.name);
  // твой код
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]



// *********************** TASK-10 *****************************


const getSortedUniqueSkills = users => {
  const sk = [];
  const skills = users.reduce((ski, el) => {
      ski.push(...el.skills);
      return ski;
    }, [])
       .forEach(el => {
      if(sk.includes(el) === false) {
        sk.push(el);
      }
    } )
    sk.sort();
    return sk;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
  




