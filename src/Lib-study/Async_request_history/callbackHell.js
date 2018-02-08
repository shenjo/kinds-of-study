/*
*   query_tickets => pay_ticket => print_ticket => see the movie
* */




function query_tickets(criteria,notify) {
    setTimeout(() => {
        console.log('query done!');
        let tickets = [100, 200, 300, 400];
        notify(tickets);
    }, 1500)
}

function pay_ticket(tickets, notify) {
    setTimeout(() => {
        console.log('pay done!');
        let ticket = tickets[Math.floor(Math.random() * tickets.length)];
        notify(ticket);
    }, 1500)
}

function print_ticket(ticket, notify) {
    setTimeout(() => {
        console.log('print done!');
        console.log(`your ticket print successfully, ticket=${ticket}`)
        notify();
    }, 1500)
}

function seeMovie(){
    console.log('happy time!')
}

query_tickets('Movie',function(result){
    pay_ticket(result,function(result){
        print_ticket(result,function(){
            seeMovie();
        })
    })
});

// setTimeout(() => {
//     console.log('hi')
//     setTimeout(() => {
//         console.log('hi')
//         setTimeout(() => {
//             console.log('hi')
//         }, 1000)
//     }, 2000)
// }, 3000)


