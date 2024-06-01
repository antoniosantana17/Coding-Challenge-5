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

// Manager subclass
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    calculateAnnualSalary() {
        const baseAnnualSalary = super.calculateAnnualSalary();
        const bonus = baseAnnualSalary * 0.15;
        const totalAnnualSalary = baseAnnualSalary + bonus;
        console.log(`Bonus: $${bonus}`);
        console.log(`Total Annual Salary (including bonus): $${totalAnnualSalary}`);
        return totalAnnualSalary;
    }
}

// Manager demonstration
let manager = new Manager("Alice Smith", 7000, "Sales");
manager.calculateAnnualSalary();

