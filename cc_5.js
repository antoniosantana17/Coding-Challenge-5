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

// Instantiate Manager Objects

// Manager 1: Bob Ross Digital Marketing department
let manager1 = new Manager("Bob Ross", 6600, "Digital Marketing");
manager1.calculateAnnualSalary();

// Manager 2: Debbie Little Finance department
let manager2 = new Manager("Debbie Little", 7205, "Finance");
manager2.calculateAnnualSalary();

