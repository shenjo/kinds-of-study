/*
*   query_tickets => pay_ticket => print_ticket => see the movie
* */

function query_tickets(criteria,notify) {
    // need 3s to do the work
    setTimeout(() => {
        console.log('query done!');
        let tickets = [1, 2, 3, 4];
        notify(tickets);
    }, 1500)
}

function pay_ticket(tickets, notify) {
    // need 2s to do the work
    setTimeout(() => {
        console.log('pay done!');
        let ticket = tickets[Math.floor(Math.random() * tickets.length)];
        notify(ticket);
    }, 1500)
}

function print_ticket(ticket, notify) {
    // need 2s to do the work
    setTimeout(() => {
        console.log('print done!');
        console.log(`your ticket print successfully, ticket=${ticket}`)
        notify();
    }, 1500)
}

function seeMovie(){
    console.log('happy time!')
}

query_tickets('Action Movie',function(result){
    pay_ticket(result,function(result){
        print_ticket(result,function(){
            seeMovie();
        })
    })
});


