const Employee = require("../lib/Employee");

describe( "Employee", () => {
    const employee = new Employee('John', 'john@yahoo.com');
    
    it("should return a name", () => {
    expect(employee.name).toEqual('John')
    });
  
    it("should return an ID", () => {
    expect(employee.id).toEqual(1);
    });

    it("should return an email", () => {
    expect(employee.email).toEqual('john@yahoo.com');
    });

    it("should get a name from Employee", () => {
    expect(employee.getName()).toEqual('John')
    });

    it("should get an ID from Employee", () => {
    expect(employee.getId()).toEqual(1)
    });

    it("should get an email from Employee", () => {
    expect(employee.getEmail()).toEqual('john@yahoo.com');
    });

    it("should get a role from Employee and assign it to Employee", () => {
    expect(employee.getRole()).toEqual('Employee');
    });

  });
