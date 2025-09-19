
let visitorName  = 'John Doe';
let visitorAge = '21';
let visitorTicketId = 'John Doe';

let visitor = {
    name: [visitorName],
    age: [visitorAge],
    ticketId: [visitorTicketId]
};
//console.log(visitor);

visitor.ticketId = null;
//console.log(visitor);

let tickets = {
    Ticket1: visitor[visitorTicketId],
    Ticket2: "Victor Rancherez",
    Ticket3: null,
    Ticket4: "Jenny Parker",
    Ticket5: null
};
let ticketIdToCheck = "Ticket2";
let ticketStatusResult;
if (ticketIdToCheck in tickets) {
    if (tickets[ticketIdToCheck] == null) {
        ticketStatusResult = 'not sold';
    }
    else {
        ticketStatusResult = `sold to ${tickets[ticketIdToCheck]}`
    }
}
else {
    ticketStatusResult = 'unknown ticket id';
};

//console.log(ticketStatusResult);

let simpletTicketStatusResult;
if (tickets[ticketIdToCheck] != undefined && tickets[ticketIdToCheck] != '') {
    simpletTicketStatusResult = tickets[ticketIdToCheck];
}
else {
    simpletTicketStatusResult = 'invalid ticket !!!';
}
//console.log(simpletTicketStatusResult);

let visitorWithGtc = {
    gtc: {
        version: 121
    }
}
let gtcVersion;

if (visitorWithGtc.gtc.version) {
    gtcVersion = visitorWithGtc.gtc.version;
}
else {
    gtcVersion;
}
//console.log(gtcVersion);