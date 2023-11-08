
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src =
      "./img/Rock.png";
    result.textContent = "Wait...";

    optionImages.forEach((image2, index2) => {
      
      
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    //  delay the result calculation
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      // clicked option image
      let imageSrc = e.target.querySelector("img").src;
      //  user image option 
      userResult.src = imageSrc;

      // Generate a random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      //  CPU image options
      let cpuImages = [
        "/img/Rock.png",
        "/img/Paper.png",
        "/img/Scissors.png"
      ];
      // CPU random image
      cpuResult.src = cpuImages[randomNumber];

      
      let cpuValue = ["R", "P", "S"][randomNumber];
      
      // clicked option (based on index)
      let userValue = ["R", "P", "S"][index];

      // all possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "You",
        PP: "Draw",
        PR: "You",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "You"
      };

      //  outcome value based on user and CPU 
      let outComeValue = outcomes[userValue + cpuValue];

      // Display the result
      result.textContent =
        userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
    }, 2500);
  });
});