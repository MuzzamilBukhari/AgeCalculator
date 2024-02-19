let todayDate = new Date();

const displayMsg = (years, months, days) => {
    let msg = document.querySelector(".msg");
    msg.innerHTML = `You are ${years} years, ${months} months and ${days} days old`;
}

const calculateAge = () => {
    let dobValue = document.querySelector("input").value;
    let birthDateInArray = dobValue.split("-");
    let yearsDiff = todayDate.getFullYear() - birthDateInArray[0];
    let monthsDiff = todayDate.getMonth()+1 - birthDateInArray[1];
    console.log("this month ", todayDate.getMonth())
    let daysDiff = todayDate.getDate() - birthDateInArray[2];
    displayMsg(yearsDiff, monthsDiff, daysDiff);
}
// console.log(date);