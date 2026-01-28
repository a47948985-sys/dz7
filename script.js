let orders = [
    {
        id: 1,
        customer: "Jhon",
        items: [
            { name: "Ноутбук", price: 50000, quantity: 1 },
            { name: "Мышь", price: 1500, quantity: 2 }
        ]
    },
    {
        id: 2,
        customer: "Alan",
        items: [
            { name: "Телефон", price: 30000, quantity: 1 },
            { name: "Чехол", price: 1000, quantity: 3 }
        ]
    },
    {
        id: 3,
        customer: "Jane",
        items: [
            { name: "Клавиатура", price: 2500, quantity: 1 },
            { name: "Монитор", price: 12000, quantity: 1 }
        ]
    }
];

var total= 0
var maxOrderSum = 0
var bestOrder  = " "

for (var  i = 0; i < orders.length; i++){
    var product = orders[i]
    var orderSum= 0;

    for(var  j = 0; j < product.items.length; j++) {
        var item = product.items[j];
        orderSum += item.price * item.quantity;
    }
    console.log(product.customer + orderSum + "coм" );

    total += orderSum;
    if (orderSum > maxOrderSum) {
        maxOrderSum = orderSum;
        bestOrder= product.customer;
    }
}
console.log("Общий доход магазина" + total + "сом");
console.log("Самый дорогой заказ сделал:" + bestOrder);