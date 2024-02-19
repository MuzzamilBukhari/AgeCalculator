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
    if (monthsDiff < 0){
        monthsDiff += 12;
        yearsDiff--;
    }
    let daysDiff = todayDate.getDate() - birthDateInArray[2];
    if (daysDiff < 0){
        daysDiff += 30;
        monthsDiff--;
    }
    displayMsg(yearsDiff, monthsDiff, daysDiff);
}
// console.log(date);