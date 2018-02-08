/*
*   query_tickets => pay_ticket => print_ticket => see the movie
* */

function query_tickets(criteria) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('query done!');
            let tickets = [100, 200, 300, 400];
            resolve(tickets);
        }, 1500)
    });
}

function pay_ticket(tickets) {
    return new Promise((a, b) => {
        setTimeout(() => {
            console.log('pay done!');
            let ticket = tickets[Math.floor(Math.random() * tickets.length)];
            a(ticket);
        }, 1500)
    });
}

function print_ticket(ticket) {
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


query_tickets('Movie')
    .then(print_ticket)
    .then(pay_ticket)
    .then(print_ticket)
    .then(seeMovie)







const co = require('co');

co(function* () {
    let tickets = yield query_tickets('Movie');
    let ticket = yield pay_ticket(tickets);
    yield print_ticket(ticket);
    seeMovie();
})


async function doSomething(){
    let tickets = await query_tickets('Movie');
    let ticket = await pay_ticket(tickets);
    await print_ticket(ticket);
    seeMovie();
}

// doSomething();