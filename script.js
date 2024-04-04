// Define an array to store employees
var employees = [];

// Function to add a new employee
function addEmployee(name, profession, age) {
    var employee = {
        name: name,
        profession: profession,
        age: age
    };
    employees.push(employee);
}

// Function to display the added employees
function displayEmployees() {
    console.log("Added Employees:");
    employees.forEach(function(employee, index) {
        console.log((index + 1) + ". Name: " + employee.name + ", Profession: " + employee.profession + ", Age: " + employee.age);
    });
}

// Function to prompt user for employee details and add the employee
function promptAndAddEmployee() {
    var name = prompt("Enter Name:");
    var profession = prompt("Enter Profession:");
    var age = prompt("Enter Age:");
    addEmployee(name, profession, age);
}

// Main function to interact with user
function main() {
    var choice;
    do {
        console.log("1. Add Employee");
        console.log("2. Display Employees");
        console.log("3. Exit");
        choice = prompt("Enter your choice:");

        switch (choice) {
            case "1":
                promptAndAddEmployee();
                break;
            case "2":
                displayEmployees();
                break;
            case "3":
                console.log("Exiting...");
                break;
            default:
                console.log("Invalid choice!");
        }
    } while (choice !== "3");
}

// Call the main function to start the program
main();

    // Define an array to store employees
let employees = [];

// Function to add a new employee
function addEmployee(name, profession, age) {
    const employee = {
        name: name,
        profession: profession,
        age: age
    };
    employees.push(employee);
}

// Function to display the added employees
function displayEmployees() {
    console.log("Added Employees:");
    employees.forEach((employee, index) => {
        console.log((index + 1) + ". Name: " + employee.name + ", Profession: " + employee.profession + ", Age: " + employee.age);
    });
}

// Function to prompt user for employee details and add the employee
function promptAndAddEmployee() {
    const name = prompt("Enter Name:");
    const profession = prompt("Enter Profession:");
    const age = prompt("Enter Age:");
    
    // Check if all fields are filled
    if (name && profession && age) {
        addEmployee(name, profession, age);
    } else {
        console.log("Error: Please make sure all fields are filled before adding an employee!");
    }
}

// Main function to interact with user
function main() {
    let choice;
    do {
        console.log("New Employees");
        console.log("1. Add User");
        console.log("2. Added Employees");
        console.log("3. Exit");
        choice = prompt("Enter your choice:");

        switch (choice) {
            case "1":
                promptAndAddEmployee();
                break;
            case "2":
                if (employees.length === 0) {
                    console.log("Added Employees:\nYou have 0 Employees.");
                } else {
                    displayEmployees();
                }
                break;
            case "3":
                console.log("Exiting...");
                break;
            default:
                console.log("Invalid choice!");
        }
    } while (choice !== "3");
}

// Call the main function to start the program
main();

// Define an array to store employees
let employees = [];

// Function to add a new employee
function addEmployee(name, profession, age) {
    const employee = {
        name: name,
        profession: profession,
        age: age
    };
    employees.push(employee);
}

// Function to delete an employee by index
function deleteEmployee(index) {
    if (index >= 0 && index < employees.length) {
        employees.splice(index, 1);
        console.log("Success: Employee deleted!");
    } else {
        console.log("Error: Invalid employee index!");
    }
}

// Function to display the added employees
function displayEmployees() {
    console.log("Added Employees:");
    employees.forEach((employee, index) => {
        console.log((index + 1) + ". Name: " + employee.name + ", Profession: " + employee.profession + ", Age: " + employee.age);
    });
}

// Function to prompt user for employee details and add the employee
function promptAndAddEmployee() {
    const name = prompt("Enter Name:");
    const profession = prompt("Enter Profession:");
    const age = prompt("Enter Age:");
    
    // Check if all fields are filled
    if (name && profession && age) {
        addEmployee(name, profession, age);
        console.log("Success: Employee added!");
    } else {
        console.log("Error: Please make sure all fields are filled before adding an employee!");
    }
}

// Function to prompt user for index to delete an employee
function promptAndDeleteEmployee() {
    const index = parseInt(prompt("Enter index of employee to delete:")) - 1;
    deleteEmployee(index);
}

// Main function to interact with user
function main() {
    let choice;
    do {
        console.log("New Employees");
        console.log("1. Add User");
        console.log("2. Added Employees");
        console.log("3. Delete User");
        console.log("4. Exit");
        choice = prompt("Enter your choice:");

        switch (choice) {
            case "1":
                promptAndAddEmployee();
                break;
            case "2":
                if (employees.length === 0) {
                    console.log("Added Employees:\nYou have 0 Employees.");
                } else {
                    displayEmployees();
                }
                break;
            case "3":
                promptAndDeleteEmployee();
                break;
            case "4":
                console.log("Exiting...");
                break;
            default:
                console.log("Invalid choice!");
        }
    } while (choice !== "4");
}

// Call the main function to start the program
main();
