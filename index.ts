const ringo = {
  name: "Ringo",
  greet: function (greeting: string) {
    console.log(`${this.name} says ${greeting}`);
  },
};

const kimJiWon = {
  name: "kim Ji Won",
  designation: "K POP Artist",
};

const reuseTheRingoGreet = ringo.greet.bind(kimJiWon);
reuseTheRingoGreet("Hi to the fans!!");
