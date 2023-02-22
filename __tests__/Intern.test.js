const Intern = require ("../lib/Intern")

describe( "Intern", () => {
    const intern = new Intern('John', 'john@yahoo.com', 'Kansas');
    
    it("should get a name from Employee", () => {
        expect(intern.getName()).toEqual('John')
        });
    
        it("should get an ID from intern", () => {
        expect(intern.getId()).toEqual(1)
        });
    
        it("should get an email from intern", () => {
        expect(intern.getEmail()).toEqual('john@yahoo.com');
        });
    
        it("should get a role from intern and assign it to intern", () => {
        expect(intern.getRole()).toEqual('Intern');
        });

        it("should get the interns school", () => {
            expect(intern.getSchool()).toEqual('Kansas');
        });



});