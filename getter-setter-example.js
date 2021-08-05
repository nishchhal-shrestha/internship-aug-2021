let student = {
    firstName: 'Nishchhal',
    lastName: 'Shrestha',
    get getFullName() {
        return `${this.firstName} ${this.lastName}`;  
    },
    set setFullName(fullName) {
        const fullNameParts = fullName.split(' ');
        console.log('fullNameParts', fullNameParts);
        this.firstName = fullNameParts[0];
        this.lastName = fullNameParts.length > 1 ? fullNameParts[1] : '';
    } 
}

student.setFullName = 'Ram Shrestha';
console.log('student', student);