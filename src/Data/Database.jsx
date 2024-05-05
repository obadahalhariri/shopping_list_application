let Database = {
    users: [
        { id: 1, username: "John", shoppingLists: [1, 2] },
        { id: 2, username: "Jane", shoppingLists: [3] },
        { id: 3, username: "Jak", shoppingLists: [] },
        { id: 4, username: "Jeoy", shoppingLists: [] },
    ],

    shoppingLists: [
        {
            id: 1,
            title: "Food",
            owner: 1,
            invitedMembers: [3],
            archived: false,
            items: [
                { id: 1, name: "Apples", solved: false },
                { id: 2, name: "Milk", solved: true },
            ],
        },
        {
            id: 2,
            title: "Home Supplies",
            owner: 1,
            invitedMembers: [4],
            archived: false,
            items: [
                { id: 1, name: "Toilet Paper", solved: false },
                { id: 2, name: "Dish Soap", solved: false },
            ],
        },
        {
            id: 3,
            title: "Gift Ideas",
            owner: 2,
            invitedMembers: [3, 4],
            archived: true,
            items: [
                { id: 1, name: "Book", solved: false },
                { id: 2, name: "Watch", solved: true },
            ],
        },
        {
            id: 4,
            title: "Electronics",
            owner: 3,
            invitedMembers: [1, 2],
            archived: false,
            items: [
                { id: 1, name: "Laptop", solved: false },
                { id: 2, name: "Smartphone", solved: false },
            ],
        },
        {
            id: 5,
            title: "Clothing",
            owner: 4,
            invitedMembers: [2, 3],
            archived: false,
            items: [
                { id: 1, name: "T-shirt", solved: false },
                { id: 2, name: "Jeans", solved: true },
            ],
        },
        {
            id: 6,
            title: "Home Decor",
            owner: 1,
            invitedMembers: [3, 4],
            archived: true,
            items: [
                { id: 1, name: "Curtains", solved: false },
                { id: 2, name: "Rug", solved: false },
            ],
        },
        {
            id: 7,
            title: "Sports Equipment",
            owner: 2,
            invitedMembers: [1, 4],
            archived: false,
            items: [
                { id: 1, name: "Football", solved: false },
                { id: 2, name: "Yoga Mat", solved: true },
            ],
        },
        {
            id: 8,
            title: "Travel Essentials",
            owner: 3,
            invitedMembers: [2, 4],
            archived: true,
            items: [
                { id: 1, name: "Passport Holder", solved: false },
                { id: 2, name: "Travel Pillow", solved: true },
            ],
        },
    ],
};

export default Database