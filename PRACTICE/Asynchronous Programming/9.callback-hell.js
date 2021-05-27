const getQuestionsBtn = document.querySelector("button");
const questionsContainer = document.querySelector(".q-container");

getQuestionsBtn.addEventListener("click", getQuestions);

function getQuestions() {
  let getQuestionsData = (questions, callback) => {
    const data = new XMLHttpRequest();

    data.addEventListener("readystatechange", function () {
      if (this.status === 200 && this.readyState === 4) {
        const questionsRetrieved = JSON.parse(this.responseText);
        callback(undefined, questionsRetrieved);
      } else if (this.readyState === 4) {
        callback("Error Fetching Data", undefined);
      }
    });

    data.open("GET", questions, true);

    data.send();
  };

  getQuestionsData("questions/6.questions1-2.json", (error, questionsData) => {
    console.log(questionsData);

    getQuestionsData(
      "questions/6.questions3-4.json",
      (error, questionsData) => {
        console.log(questionsData);

        getQuestionsData(
          "questions/6.questions5-6.json",
          (error, questionsData) => {
            console.log(questionsData);

            getQuestionsData(
              "questions/6.questions7-8.json",
              (error, questionsData) => {
                console.log(questionsData);

                getQuestionsData(
                  "questions/6.questions9-10.json",
                  (error, questionsData) => {
                    console.log(questionsData);
                  }
                );
              }
            );
          }
        );
      }
    );
  });
}
