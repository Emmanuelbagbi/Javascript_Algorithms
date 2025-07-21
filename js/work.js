const employees = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    gender: "Female",
    salary: "95000.50",
    country: "USA",
    department: "Engineering",
    rank: "Senior Developer",
    hireDate: "2015-05-20",
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    gender: "Male",
    salary: "120000.00",
    country: "Canada",
    department: "Engineering",
    rank: "Lead Developer",
    hireDate: "2012-03-15",
  },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@example.com",
    gender: "Male",
    salary: "70000.00",
    country: "USA",
    department: "Marketing",
    rank: "Marketing Specialist",
    hireDate: "2019-07-10",
  },
  {
    id: 4,
    name: "David",
    email: "david@example.com",
    gender: "Male",
    salary: "105000.75",
    country: "UK",
    department: "Engineering",
    rank: "Developer",
    hireDate: "2018-11-01",
  },
  {
    id: 5,
    name: "Eve",
    email: "eve@example.com",
    gender: "Female",
    salary: "98000.00",
    country: "Australia",
    department: "HR",
    rank: "HR Manager",
    hireDate: "2014-04-25",
  },
  {
    id: 6,
    name: "Frank",
    email: "frank@example.com",
    gender: "Male",
    salary: "60000.00",
    country: "Canada",
    department: "Support",
    rank: "Support Specialist",
    hireDate: "2020-01-15",
  },
  {
    id: 7,
    name: "Grace",
    email: "grace@example.com",
    gender: "Female",
    salary: "75000.50",
    country: "USA",
    department: "Marketing",
    rank: "Marketing Manager",
    hireDate: "2017-08-30",
  },
  {
    id: 8,
    name: "Hank",
    email: "hank@example.com",
    gender: "Male",
    salary: "88000.25",
    country: "USA",
    department: "Sales",
    rank: "Sales Executive",
    hireDate: "2016-06-05",
  },
  {
    id: 9,
    name: "Ivy",
    email: "ivy@example.com",
    gender: "Female",
    salary: "115000.00",
    country: "UK",
    department: "Engineering",
    rank: "Senior Developer",
    hireDate: "2011-09-20",
  },
  {
    id: 10,
    name: "Jack",
    email: "jack@example.com",
    gender: "Male",
    salary: "99000.00",
    country: "Australia",
    department: "Support",
    rank: "Support Lead",
    hireDate: "2013-10-18",
  },
];

// what is the total salary of employees hired before 2015?

const hiredb42015 = employees
  .filter((employee) => employee.hireDate < "2015-01-01")
  .reduce((acc, curVal) => acc + parseFloat(curVal.salary), 0);

// console.log(hiredb42015);

//what is the average salary of employees in the engineering department who have senior in their rank?

const employeeEngrDept = employees.filter(
  (employee) =>
    employee.department === "Engineering" &&
    employee.rank === "Senior Developer"
);
totalSalary = employeeEngrDept.reduce(
  (acc, employee) => acc + parseFloat(employee.salary),0
);
const averageSal = totalSalary/ (employeeEngrDept.length);


// console.log(averageSal);

// which country has the highest salary and what is that salary

const countrySalary = employees.reduce((acc,employee)=>{
const country  = employee.country;
const salary = parseFloat(employee.salary);
if(!acc[country]) acc[country] = {total:0,count:0}
acc[country].total += salary;
acc[country].count++;
return acc

},{})
// console.log(countrySalary);


//list the top 3 highest paid employees along with their names and salaries

const topPaidEmployee = employees.sort((a,b)=>parseFloat(b.salary)-parseFloat(a.salary)).slice(0,3)
.map(employee=>({name: employee.name,salary:employee.salary,country:employee.country }))
// console.log(topPaidEmployee);

//Generate a summary report that shows the total number of employees, total salary, average salary, and number
//of employees per department
