// U41684674

// Employee class
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        console.log(`Employee Name: ${this.name}, Monthly Salary: $${this.salary}`);
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

// Employee Demonstration
let employee = new Employee("John Doe", 5000);
console.log(`Annual Salary: $${employee.calculateAnnualSalary()}`);

