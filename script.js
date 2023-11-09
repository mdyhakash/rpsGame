const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result_image"),
  cpuResult = document.querySelector(".cpu_result_image"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    // reset the result images and text
    userResult.src = cpuResult.src = "./img/rock.png";
    result.textContent = "Wait...";

    // remove the active class from the other images
    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    // clicked image source
    let imageSrc = e.target.querySelector("img").src;

    // remove the rotate class from the result images
    userResult.classList.remove("user_res_rotate");
    cpuResult.classList.remove("cpu_res_rotate");

    //  delay the result calculation
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      // rotate the user result image based on the image source
      if (imageSrc?.includes("paper") || imageSrc?.includes("scissors")) {
        userResult.classList.add("user_res_rotate");
      } else {
        userResult.classList.remove("user_res_rotate");
      }

      // set user result image source based on clicked image
      userResult.src = imageSrc;

      // Generate a random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      //  CPU image options
      let cpuImages = [
        "./img/rock.png",
        "./img/paper.png",
        "./img/scissors.png",
      ];

      // rotate the CPU result image based on the image source
      if (
        cpuImages[randomNumber]?.includes("paper") ||
        cpuImages[randomNumber]?.includes("scissors")
      ) {
        cpuResult.classList.add("cpu_res_rotate");
      } else {
        cpuResult.classList.remove("cpu_res_rotate");
      }

      // set CPU result image source based on random number
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
        SP: "You",
      };

      //  outcome value based on user and CPU
      let outComeValue = outcomes[userValue + cpuValue];

      // Display the result
      result.textContent =
        userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
    }, 2500);
  });
});