// Define the monthly sales target for Farah in dollars
const monthlySalesTarget = 435;

// Define the date range (1 Jan - 31 Dec) for the total target sales calculation
const startDate = new Date('2023-01-01');
const endDate = new Date('2023-12-31');

// Define the number of working days in a week (excluding Fridays)
const workingDaysPerWeek = 6;

// Calculate the total target sales within the date range
const totalTargetSales = monthlySalesTarget * (endDate.getMonth() - startDate.getMonth() + 1);

// Calculate the total number of days within the date range
const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

// Calculate the number of Fridays within the date range
let fridays = 0;
for (let currentDate = new Date(startDate); currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
  if (currentDate.getDay() === 5) { // 5 represents Friday
    fridays++;
  }
}

// Calculate the total working days by subtracting Fridays
const totalWorkingDays = totalDays - fridays;

// Calculate the daily target sales
const dailyTargetSales = totalTargetSales / totalWorkingDays;

// Output the results
console.log("Monthly Sales Target: $" + monthlySalesTarget);
console.log("Total Target Sales for the Year: $" + totalTargetSales);
console.log("Total Working Days: " + totalWorkingDays);
console.log("Daily Target Sales: $" + dailyTargetSales.toFixed(2));
