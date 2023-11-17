const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let countType = document.getElementById("countType").value;
  let weightType = document.getElementById("weightType").value;
  let height = +document.querySelector("#height").value;
  let weight = +document.querySelector("#weight").value;
  let display = document.getElementById("display");

  if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
    alert(
      ` Invalid input : [ ${countType} = ${height} ] and [ ${weightType} = ${weight} ]`
    );
    return;
  }

  if (countType == "cm") {
    height /= 100;
  } else if (countType == "inche") {
    height *= 2.54;
    height /= 100;
  } else if (countType == "feet") {
    height *= 12;
    height *= 2.54;
    height /= 100;
  }

  if (weightType == "pound") weight *= 2.20462262185;

  let bmi = weight / (height * height);

  let condition = document.getElementById("condition");
  if (bmi < 18.5) {
    condition.innerHTML = "Low Weight";
    condition.style.color = "rgb(44, 44, 255)";
  }
  if (bmi >= 18.5 && bmi < 25) {
    condition.innerHTML = "Normal";
    condition.style.color = "rgb(0, 200, 0)";
  }
  if (bmi >= 25 && bmi < 30) {
    condition.innerHTML = "High Weight";
    condition.style.color = "orange";
  }
  if (bmi >= 30) {
    condition.innerHTML = "Obese";
    condition.style.color = "rgb(255, 50, 50)";
  }

  display.innerHTML = ${bmi.toFixed(2)};
});

const dietBtn = document.getElementById("dietBtn");
dietBtn.addEventListener("click", () => {
  dietBtn.innerHTML = "Healthy Diet";
  const dietPlans = document.querySelector(".diet-plans");
  const scrDown = document.querySelector(".scroll-down");
  scrDown.style.display = "block";
  dietPlans.style.display = "block";
});
