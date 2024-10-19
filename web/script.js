const login = document.getElementById("login");
login.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const dashboard = document.getElementById("dashboard");
    dashboard.style.display = "block";
})

const deposit = document.getElementById("depositBtn");
deposit.addEventListener("click", function(){
    const depositNumber = document.getElementById("depositInput").value;
    const depositAmount = parseFloat(depositNumber);
    
    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositAmount = parseFloat(currentDeposit);
    const totalDeposit = currentDepositAmount + depositAmount;

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceAmount = parseFloat(currentBalance);
    const totalBalance = currentBalanceAmount + depositAmount;

    document.getElementById("currentDeposit").innerText = totalDeposit;
    document.getElementById("currentBalance").innerText = totalBalance;
    Document.getElementById("depositInput").value = "";
})

const withdraw = document.getElementById("withdrawBtn");
withdraw.addEventListener("click", function(){
    const withdrawNumber = document.getElementById("withdrawInput").value;
    const withdrawAmount = parseFloat(withdrawNumber);

    const currentWithdraw = document.getElementById("currentWithdraw").innerText;
    const currentWithdrawAmount = parseFloat(currentWithdraw);
    const totalWithdraw = currentWithdrawAmount + withdrawAmount;

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceAmount = parseFloat(currentBalance);
    const totalBalance = currentBalanceAmount - withdrawAmount;

    document.getElementById("currentWithdraw").innerText = totalWithdraw;
    document.getElementById("currentBalance").innerText = totalBalance;
    Document.getElementById("withdrawInput").value = "";
})

function logOut(){
    location.reload();
}