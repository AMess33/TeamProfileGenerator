const Manager = require("../lib/Manager")

describe( "Manager", () => {
    const manager = new Manager('John', 'john@yahoo.com', '1');

    it("should get a name from Manager", () => {
        expect(manager.getName()).toEqual('John')
        });
    
        it("should get an ID from Employee", () => {
        expect(manager.getId()).toEqual(1)
        });
    
        it("should get an email from Manager", () => {
        expect(manager.getEmail()).toEqual('john@yahoo.com');
        });
    
        it("should get a role from Manager and assign it to Manager", () => {
        expect(manager.getRole()).toEqual('Manager');
        });

        it("should get the manager's office number", () => {
            expect(manager.getOfficeNumber()).toEqual('1');
        }); 
})