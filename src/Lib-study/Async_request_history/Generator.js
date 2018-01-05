/*
*   query_tickets => pay_ticket => print_ticket => see the movie
* */
let gen = doSomeThing();
function query_tickets(criteria) {
    // return new Promise((a, b) => {
        setTimeout(() => {
            console.log('query done!');
            let tickets = [1, 2, 3, 4];
            gen.next(tickets);
        }, 1500)
    // });
}

function pay_ticket(tickets) {
    // return new Promise((a, b) => {
        setTimeout(() => {
            console.log('pay done!');
            let ticket = tickets[Math.floor(Math.random() * tickets.length)];
            gen.next(ticket);
        }, 1500)
    // });
}

function print_ticket(ticket) {
    // return new Promise((a, b) => {
        setTimeout(() => {
            console.log('print done!');
            console.log(`your ticket print successfully, ticket=${ticket}`)
            gen.next();
        }, 1500)
    // });
}

function seeMovie() {
    console.log('happy time!')
}

function* doSomeThing(){
    let tickets = yield query_tickets();
    let ticket = yield pay_ticket(tickets);
    yield print_ticket(ticket);
    seeMovie();
}

console.log('=================');
console.log('=====Start=======');
console.log('=================');
gen.next();