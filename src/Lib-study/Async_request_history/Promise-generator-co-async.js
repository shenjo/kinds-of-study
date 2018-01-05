/*
*   query_tickets => pay_ticket => print_ticket => see the movie
* */

function query_tickets(criteria) {
    // need 3s to do the work
    // setTimeout(() => {
    //     console.log('query done!');
    //     let tickets = [1, 2, 3, 4];
    //     notify(tickets);
    // }, 1500)
    return new Promise((a, b) => {
        setTimeout(() => {
            console.log('query done!');
            let tickets = [100, 200, 300, 400];
            a(tickets);
        }, 1500)
    });
}

function pay_ticket(tickets) {
    // need 2s to do the work
    // setTimeout(() => {
    //     console.log('pay done!');
    //     let ticket = tickets[Math.floor(Math.random() * tickets.length)];
    //     notify(ticket);
    // }, 1500)
    return new Promise((a, b) => {
        setTimeout(() => {
            console.log('pay done!');
            let ticket = tickets[Math.floor(Math.random() * tickets.length)];
            a(ticket);
        }, 1500)
    });
}

function print_ticket(ticket) {
    // need 2s to do the work
    // setTimeout(() => {
    //     console.log('print done!');
    //     console.log(`your ticket print successfully, ticket=${ticket}`)
    //     notify();
    // }, 1500)

    return new Promise((a, b) => {
        setTimeout(() => {
            console.log('print done!');
            console.log(`your ticket print successfully, ticket=${ticket}`)
            a();
        }, 1500)
    });
}

function seeMovie() {
    console.log('happy time!')
}

console.log('=================');
console.log('=====Start=======');
console.log('=================');
query_tickets('Action Movie')
    .then(pay_ticket)
    .then(print_ticket)
    .then(seeMovie);







// const co = require('co');
//
// co(function* () {
//     let tickets = yield query_tickets('Action Movie');
//     let ticket = yield pay_ticket(tickets);
//     yield print_ticket(ticket);
//     seeMovie();
// });


// async function doSomething(){
//     let tickets = await query_tickets('Action Movie');
//     let ticket = await pay_ticket(tickets);
//     await print_ticket(ticket);
//     seeMovie();
// }
//
// doSomething();