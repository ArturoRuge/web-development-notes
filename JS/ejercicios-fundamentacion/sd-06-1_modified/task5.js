

// Type your code below this line!

function FriendList(){
    this.friends = [];
}

const numberOfFriends = parseInt(process.argv[3]);

const friendList = new FriendList();

for(let i = 4; i < 4 + numberOfFriends; i++){
    friendList.friends.push(process.argv[i])
}

console.log(friendList.friends)

// Type your code above this line!

