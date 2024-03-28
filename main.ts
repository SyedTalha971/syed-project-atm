#! /usr/bin/env node

import inquirer from "inquirer";

let talhaPin = 1211;
let talhaBalance = 20000;

// Sir Hamzah Syed Input

let hamzaPin = 1212
let hamzaBalance = 30000

// Sir Ameen Alam Input

let ameenPin = 1213
let ameenBalance = 35000

// Sir Zia Khan Input

let ziaPin = 1214
let ziaBalance = 999999

console.log (`\n-----------------------------\n  Syed Talha Banking PVT LTD\n-----------------------------`)
console.log(`\n--------------------------------------------\nFor guide feel free to contact - 03447757971\n--------------------------------------------`)
console.log (`\nMy Pin Code Is ${talhaPin}
\nSir Syed Hamzah's Pin Code Is ${hamzaPin}
\nSir Ameen Alam's Pin Code Is${ameenPin}
\nSir Zia Khan's Pin Code Is ${ziaPin}
`)

const pinInput = await inquirer.prompt([
  {
    message: "Please dial your pin code",
    type: "number",
    name: "getPin",
  },
]);
if (pinInput.getPin === talhaPin) {
  console.log(
    "--------------------\nYour Pin is Correct\n--------------------\nWelcome Syed Talha\n--------------------"
  );

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please Select one of the below operation first",
      type: "list",
      choices: ["Withdrawer", "Check Balance"],
    },
  ]);
  if (operationAns.operation === "Withdrawer") {
    let withdrawerAns = await inquirer.prompt([
      {
        name: "withdrawerOption",
        message: "Please select one of the option for transaction",
        type: "list",
        choices: ["500", "1000", "2000", "Other Amount"],
      },
    ]);
    if (withdrawerAns.withdrawerOption === "500") {
      talhaBalance -= withdrawerAns.withdrawerOption;
      console.log(
        `\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${talhaBalance}
        \n----------------------------------`
      );
    } else if (withdrawerAns.withdrawerOption === "1000") {
      talhaBalance -= withdrawerAns.withdrawerOption;
      console.log(
        `\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${talhaBalance}
        \n----------------------------------`
      );
    } else if (withdrawerAns.withdrawerOption === "2000") {
      talhaBalance -= withdrawerAns.withdrawerOption;
      console.log(
        `\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${talhaBalance}
        \n----------------------------------`
      );
    } else if (withdrawerAns.withdrawerOption === "Other Amount") {
      let otherAmount = await inquirer.prompt([
        {
          name: "manualAmount",
          type: "number",
          message: "Please enter the amount to make withdraw",
        },
      ]);
      if (otherAmount.manualAmount <= talhaBalance) {
      talhaBalance -= otherAmount.manualAmount;
      console.log(
        `\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${otherAmount.manualAmount} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${talhaBalance}
        \n----------------------------------`
      )}
      else console.log (`\n------------------------------------------------------
      \nEnter amount is insufficent to make this transaction 
      \n\t Please deposit or withdraw sufficent amount 
      \n\t  Your account balance is ${talhaBalance}
      \n------------------------------------------------------`);
    }
    
  }
  else if (operationAns.operation === "Check Balance") {
        console.log(`\n--------------------------------\t\n Your Account Balance is ${talhaBalance}\n--------------------------------`)
    }
}
// Transaction of Hamza
else if (pinInput.getPin === hamzaPin) {
  console.log(
    "--------------------\nYour Pin is Correct\n--------------------\nWelcome Syed Hamzah\n--------------------"
  );

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please Select one of the below operation first",
      type: "list",
      choices: ["Withdrawer", "Check Balance"],
    },
  ]);
  if (operationAns.operation === "Withdrawer") {
    let withdrawerAns = await inquirer.prompt([
      {
        name: "withdrawerOption",
        message: "Please select one of the option for transaction",
        type: "list",
        choices: ["500", "1000", "2000", "Other Amount"],
      },
    ]);
    if (withdrawerAns.withdrawerOption === "500") {
      hamzaBalance -= withdrawerAns.withdrawerOption;
      console.log(
        `\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${hamzaBalance}
        \n----------------------------------`
      );
    } else if (withdrawerAns.withdrawerOption === "1000") {
      hamzaBalance -= withdrawerAns.withdrawerOption;
      console.log(
        `\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${hamzaBalance}
        \n----------------------------------`
      );
    } else if (withdrawerAns.withdrawerOption === "2000") {
      hamzaBalance -= withdrawerAns.withdrawerOption;
      console.log(
        `\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${hamzaBalance}
        \n----------------------------------`
      );
    } else if (withdrawerAns.withdrawerOption === "Other Amount") {
      let otherAmount = await inquirer.prompt([
        {
          name: "manualAmount",
          type: "number",
          message: "Please enter the amount to make withdraw",
        },
      ]);
      if (otherAmount.manualAmount <= hamzaBalance) {
      hamzaBalance -= otherAmount.manualAmount;
      console.log(
        `\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${otherAmount.manualAmount} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${hamzaBalance}
        \n----------------------------------`
      )}
      else console.log (`\n------------------------------------------------------
      \nEnter amount is insufficent to make this transaction 
      \n\t Please deposit or withdraw sufficent amount 
      \n\t Your account balance is ${hamzaBalance}
      \n------------------------------------------------------`);
    }
    
  }
  else if (operationAns.operation === "Check Balance") {
        console.log(`\n--------------------------------\t\n Your Account Balance is ${hamzaBalance}\n--------------------------------`)
    }
}
// Transaction of Ameen Alam
else if (pinInput.getPin === ameenPin) {
  console.log(
    "--------------------\nYour Pin is Correct\n--------------------\nWelcome Ameen Alam\n--------------------"
  );

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please Select one of the below operation first",
      type: "list",
      choices: ["Withdrawer", "Check Balance"],
    },
  ]);
  if (operationAns.operation === "Withdrawer") {
    let withdrawerAns = await inquirer.prompt([
      {
        name: "withdrawerOption",
        message: "Please select one of the option for transaction",
        type: "list",
        choices: ["500", "1000", "2000", "Other Amount"],
      },
    ]);
    if (withdrawerAns.withdrawerOption === "500") {
      ameenBalance -= withdrawerAns.withdrawerOption;
      console.log(
        `\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${ameenBalance}
        \n----------------------------------`
      );
    } else if (withdrawerAns.withdrawerOption === "1000") {
      ameenBalance -= withdrawerAns.withdrawerOption;
      console.log(
        `\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${ameenBalance}
        \n----------------------------------`
      );
    } else if (withdrawerAns.withdrawerOption === "2000") {
      ameenBalance -= withdrawerAns.withdrawerOption;
      console.log(
        `\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${ameenBalance}
        \n----------------------------------`
      );
    } else if (withdrawerAns.withdrawerOption === "Other Amount") {
      let otherAmount = await inquirer.prompt([
        {
          name: "manualAmount",
          type: "number",
          message: "Please enter the amount to make withdraw",
        },
      ]);
      if (ameenBalance >= otherAmount.manualAmount) {
      ameenBalance -= otherAmount.manualAmount;
      console.log(
        `\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${otherAmount.manualAmount} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${ameenBalance}
        \n----------------------------------`
      )}
      else console.log (`\n------------------------------------------------------
      \nEnter amount is insufficent to make this transaction 
      \n\t Please deposit or withdraw sufficent amount 
      \n\t  Your account balance is ${ameenBalance}
      \n------------------------------------------------------`);
    }
    
  }
  else if (operationAns.operation === "Check Balance") {
        console.log(`\n--------------------------------\t\n Your Account Balance is ${ameenBalance}\n--------------------------------`)
    }
}
// Transaction of Zia Khan
else if (pinInput.getPin === ziaPin) {
  console.log(
    "--------------------\nYour Pin is Correct\n--------------------\nWelcome Zia Khan\n--------------------"
  );

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please Select one of the below operation first",
      type: "list",
      choices: ["Withdrawer", "Check Balance"],
    },
  ]);
  if (operationAns.operation === "Withdrawer") {
    let withdrawerAns = await inquirer.prompt([
      {
        name: "withdrawerOption",
        message: "Please select one of the option for transaction",
        type: "list",
        choices: ["500", "1000", "2000", "Other Amount"],
      },
    ]);
    if (withdrawerAns.withdrawerOption === "500") {
      ziaBalance -= withdrawerAns.withdrawerOption;
      console.log(
        `\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${ziaBalance}
        \n----------------------------------`
      );
    } else if (withdrawerAns.withdrawerOption === "1000") {
      ziaBalance -= withdrawerAns.withdrawerOption;
      console.log(
        `\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${ziaBalance}
        \n----------------------------------`
      );
    } else if (withdrawerAns.withdrawerOption === "2000") {
      ziaBalance -= withdrawerAns.withdrawerOption;
      console.log(
        `\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${ziaBalance}
        \n----------------------------------`
      );
    } else if (withdrawerAns.withdrawerOption === "Other Amount") {
      let otherAmount = await inquirer.prompt([
        {
          name: "manualAmount",
          type: "number",
          message: "Please enter the amount to make withdraw",
        },
      ]);
      if (otherAmount.manualAmount <= ziaBalance) {
      ziaBalance -= otherAmount.manualAmount;
      console.log(
        `\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${otherAmount.manualAmount} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${ziaBalance}
        \n----------------------------------`
      )}
      else console.log (`\n------------------------------------------------------
      \nEnter amount is insufficent to make this transaction 
      \n\t Please deposit or withdraw sufficent amount 
      \n\t  Your account balance is ${ziaBalance}
      \n------------------------------------------------------`);
    }
    
  }
  else if (operationAns.operation === "Check Balance") {
        console.log(`\n--------------------------------\t\n Your Account Balance is ${ziaBalance}\n--------------------------------`)
    }
}

else {
    console.log ("\n----------------\t\n Incorrect Pin\n----------------")
}
