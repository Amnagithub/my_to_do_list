
import inquirer from "inquirer";
import chalk from "chalk";
import { exit } from "process";

let todos :string []= []
async function maketodo(todo:string[]){
    do{
    let ans =await inquirer.prompt([{
        type:"list",
        message: "Selecte an Operation",
        name: "select",
        choices:["Add","Update","View","Delete","Exit"],
    }])
    if (ans.select=="Add"){
        let Addtodo = await inquirer.prompt([{
            type: "input",
            message:"Enter a new task",
            name:"todo",
        }])
        todos.push(Addtodo.todo);
        todos.forEach(todo => console.log(chalk.green.italic(todo)));
    }

    if (ans.select=="Update"){
        let update=await inquirer.prompt([{
            type:"list",
            message:"Updat item from the list",
            name:"todo",
            choices:todos.map(item =>item),
        }])
        let Addtodo = await inquirer.prompt([{
            type: "input",
            message:"Enter a new task",
            name:"todo",
        }])
        let newtodo = todos.filter(value => value !==update.todo);
        todos = [...newtodo,Addtodo.todo];
console.log(chalk.bold.red(todos));
    }
    if (ans.select=="View"){
        console.log(chalk.bold.bgBlueBright("Here is your Daily Tasks"));
        console.log(chalk.bold.yellow(todos));
        console.log(".....")
        
    }
    if (ans.select=="Delete"){
        let deletetodo=await inquirer.prompt([{
            type:"list",
            message:"Update item from the List",
            name:"todo",
            choices:todos.map(item =>item),
        }])
        let newtodo = todos.filter(value => value !==deletetodo.todo);
        todos = [...newtodo];
        console.log(chalk.bold.redBright(todos));
    }
    if (ans.select=="Exit"){
        let exittodo=await inquirer.prompt([{
            type:exit,
            name:"exit",
            message:"click to Exit",
        }])
        console.log(chalk.bgBlueBright.bold("Thanks for Using our App"))
    }
    } while(true)
}

maketodo(todos);
