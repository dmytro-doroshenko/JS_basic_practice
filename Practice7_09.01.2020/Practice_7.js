class User {
    constructor(name, age, gender, email, phone, city, job, id) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
        this.city = city;
        this.job = job;
        this.id = id;
    }
}

User.prototype.toString = function () {
    return `name: ${this.name}, city: ${this.city}`;
}


alex = new User('Alex', 24, 'male', 'alex@email.com', '+380112223344', 'London', 'seller', 10);
lucy = new User('Lucy', 21, 'female', 'lucy@email.com', '+10557778841', 'Paris', 'hairdresser');
bob = new User('Bob', 31, 'male', 'bob@email.com', '+78004456621', 'Minsk', 'driver', 12);
phil = new User('Philipp', 40, 'male', 'phil@email.com', '+480179989899', 'Toronto', 'system administrator');
lisa = new User('Lisa', 26, 'female', 'lisa@yahoo.com', '+12503366477', 'Berlin', 'housewife', 33);
jack = new User('Jack', 67, 'male', 'jack@email.com', null, 'Oslo', 'teacher');

let users = [alex, lucy, bob, phil, lisa, jack];


// console.log(bob.toString());


// let sorted_by_age = users.sort( (a, b) => (a.age - b.age) );
// console.log('Sorted by age: ', sorted_by_age);

// let sorted_by_name = users.sort( function(a, b) { 
//     let nameA = a.name.toLowerCase();
//     let nameB = b.name.toLowerCase();
//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0 
// });
// console.log('Sorted by name: ', sorted_by_name);

// let sorted_by_city = users.sort( function(a, b) { 
//     let cityA = a.city.toLowerCase();
//     let cityB = b.city.toLowerCase();
//     if (cityA < cityB) return -1;
//     if (cityA > cityB) return 1;
//     return 0 
// });
// console.log('Sorted by city: ', sorted_by_city);



// let filtered_by_gender = users.filter(function (user) {
//     if (user.gender === 'male') {
//         return true;
//     }
// })
// console.log(filtered_by_gender);


// let filtered_by_age = users.filter(function (user) {
//     return user.age > 25;
// });
// console.log('Older than 25:', filtered_by_age);




Array.prototype.find_min = function() {
    return (Math.min(...this))
}

Array.prototype.short = function() {
    let shortest = this[0]
    for (i of this) {
        if (typeof(i) === 'string' && i.length < shortest.length) {
            shortest = i;
        }
    }
    return shortest;
}

Array.prototype.with_id = function () {
    let elements_with_id = []
    for (i of this) {
        if (i.id) {
            elements_with_id.push(i);
        }
    }
    return elements_with_id;
}

Array.prototype.my_map = function (callback) {
    let changed_list = [];
    for (i of this) {
        changed_list.push(callback(i));
    }
    return changed_list;
}

Array.prototype.my_filter = function (callback) {
    let filtered_list = [];
    for (i of this) {
        if (callback(i)) {
            filtered_list.push(i)
        }
    }
    return filtered_list;
}

Array.prototype.my_foreach = function (callback) {
    for (i of this) {
        callback(i);
    }
}


let list = [1, 6, 5 ,78, 13, -4, 14, 556]

// console.log(list.find_min())

let list_str = ['asdf', 'avbc', 'qwertyuio', 54, 7, 'cd', 'xbvcn']
console.log(list_str.short());


// console.log(users.with_id())


// let mapped_list = list.map( (a) => (a + 10) );
// console.log(mapped_list);

// let my_mapped_list = list.my_map( (a) => (a + 10) );
// console.log(my_mapped_list);

// let my_fil = users.my_filter(function (user) {
//     return user.age > 25;
// });

// console.log(my_fil);

// let for_each = users.forEach((user) => (console.log(`${user.name}: ${user.phone};`)));
// let my_for_each = users.my_foreach((user) => (console.log(`${user.name}: ${user.email};`)));


class Cinderella {
    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}

class Prince {
    constructor(name, age, shoes_size) {
        this.name = name;
        this.age = age;
        this.shoes_size = shoes_size;
    }
}


let cind = [
    new Cinderella('Cind1', 17, 39),
    new Cinderella('Cind2', 16, 37),
    new Cinderella('Cind3', 19, 40),
    new Cinderella('Cind4', 18, 39),
    new Cinderella('Cind5', 21, 36),
    new Cinderella('Cind6', 18, 37),
    new Cinderella('Cind7', 20, 37),
    new Cinderella('Cind8', 16, 36),
    new Cinderella('Cind9', 19, 45),
];

let prince = new Prince('Prince1', 22, 39);

// let princess = cind.filter(function (cinderella) {
//     return cinderella.foot_size === prince.shoes_size && cinderella.age <= prince.age;
// })

// console.log(princess);