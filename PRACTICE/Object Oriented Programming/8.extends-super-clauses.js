// extends
class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

class AnotherWorkshop extends Workshop {
  speakUp(msg) {
    this.ask(msg);
  }
}

let python = new AnotherWorkshop("Julian");
python.speakUp("teaches Python???");

// super

// class Workshop {
//   constructor(teacher) {
//     this.teacher = teacher;
//   }
//   ask(question) {
//     console.log(this.teacher, question);
//   }
// }

// class AnotherWorkshop extends Workshop {
//   ask(msg) {
//     super.ask(msg);
//   }
// }

// let react = new AnotherWorkshop("Trevor");
// react.ask("teaches react???");
