const Engineer = require("../lib/Engineer")

describe( "Engineer", () => {
    const engineer = new Engineer('John', 'john@yahoo.com', 'John333');
    
    it("should get a name from Employee", () => {
        expect(engineer.getName()).toEqual('John')
        });
    
        it("should get an ID from engineer", () => {
        expect(engineer.getId()).toEqual(1)
        });
    
        it("should get an email from engineer", () => {
        expect(engineer.getEmail()).toEqual('john@yahoo.com');
        });
    
        it("should get a role from engineer and assign it to engineer", () => {
        expect(engineer.getRole()).toEqual('Engineer');
        });

        it("should get the gitHub username", () => {
            expect(engineer.getGithub()).toEqual('John333');
        });



});