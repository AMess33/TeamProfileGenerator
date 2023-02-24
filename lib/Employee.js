// employee parent class, name id email getname() getId() getEmail() getRole()
var id = 1;

class Employee {
    constructor(name, email) {
        this.name = name;
        this.id = id++;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;
