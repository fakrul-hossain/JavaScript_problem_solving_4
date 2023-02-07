// Fifth problem
// A function takes three numbers as parameters. And those three inputs will have different values. If the three input values are multiples of 1000 thousand then subtract 2000. If not, that number will show.

function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
    if (typeof firstFriendGems != 'number' || typeof secondFriendGems != 'number' || 
    typeof thirdFriendGems != 'number') {
        return 'Please Input Number'
    }
    totalDiamond = (firstFriendGems * 21) + (secondFriendGems * 32) + (thirdFriendGems * 43);
    if (totalDiamond >= 2000) {
        return totalDiamond - 2000;
    } else {
        return totalDiamond
    }
}

console.log(gemsToDiamond(20, 200,50));