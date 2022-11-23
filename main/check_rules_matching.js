import { createNewUserAndTask , addNewTaskToExistingUsers, getTasksOfAUser } from "./get_users_tasks.js";
// import { getBTCPriceBitfinex } from "../helping_functions/Bitfinex_data_pull.js"

let users = []
const rule_1 = 'Eat the ice cream'
const rule_2 = 'Smaller than 14000'
var rules = [rule_1, rule_2]

function check_rules() {
  for (var i = 0; i < users.length; i++) {
    for (var k = 0; k < users[i]['rules'].length; k++){
      for (var j = 0; j < rules.length; j++){
        console.log('The current rule is', rules[j])
        console.log('The current task from user is', users[i]['rules'][k]['task_name'])
        if (users[i]['rules'][k]['task_name'] === rules[j]) {
          // transaction executed and the rule is removed from the array.
          console.log('Match found')
        }
        else {
          console.log('No match found')
        }
    }
}
}
}

// clearInterval(timerID); // The setInterval is cleared and doesn't run anymore

// For testing with 2 users and 4 tasks
users = createNewUserAndTask("0x123456", "Buy a vanilla ice cream")
users = addNewTaskToExistingUsers("0x123456", "Eat the ice cream")
users = createNewUserAndTask("0x7777777", "Buy a dog")
users = addNewTaskToExistingUsers("0x7777777", "Take the dog for a walk")

console.log(users)
check_rules() // run at the beginning
setInterval(check_rules, 30*1000); // Every 30 seconds
