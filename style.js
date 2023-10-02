var firstName = prompt('ENTER FIRSTNAME');
var lastName = prompt('ENTER LASTNAME');
var middleName = prompt('ENTER MIDDLENAME');
var birthYear = prompt('ENTER BIRTHYEAR');
var daysOfwork = prompt('ENTER DAYSOFWORK');
var workHours = daysOfwork * 8
var dailySalary = 8 * 250
var grossSalary = daysOfwork * dailySalary
var tax = grossSalary * .15
var netSalary = grossSalary - tax
var age = 2023 - birthYear

alert ('NAME: '+lastName+', '+firstName+' '+middleName+
'\n'+'AGE: '+age+'\n'
+'TOTAL WORK DAYS: '+daysOfwork+'\n'
+'TOTAL WORK HOURS: '+workHours+'\n'
+'GROSS SALARY: '+grossSalary+'\n'
+'NET SALARY: '+netSalary+'\n'
+'TAX: '+tax+'\n' )