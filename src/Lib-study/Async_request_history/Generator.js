/*
*   query_tickets => pay_ticket => print_ticket => see the movie
* */
let gen = doSomeThing();
gen.next();
function query_tickets(criteria) {
        setTimeout(() => {
            console.log('query done!');
            let tickets = [100, 200, 300, 400];
            gen.next(tickets);
        }, 1500)
    // });
}

function pay_ticket(tickets) {
        setTimeout(() => {
            console.log('pay done!');
            let ticket = tickets[Math.floor(Math.random() * tickets.length)];
            gen.next(ticket);
        }, 1500)
    // });
}

function print_ticket(ticket) {
        setTimeout(() => {
            console.log('print done!');
            console.log(`your ticket print successfully, ticket=${ticket}`)
            gen.next();
        }, 1500)
}

function seeMovie() {
    console.log('happy time!')
}

function* doSomeThing(){
    let tickets = yield query_tickets('Movie');
    let ticket = yield pay_ticket(tickets);
    yield print_ticket(ticket);
    seeMovie();
}

