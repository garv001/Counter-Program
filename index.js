let num = 0;
document.getElementById("decreaseBtn").onclick = function () {
  num = num - 1;
  document.getElementById("countLabel").textContent = num;
};

document.getElementById("resetBtn").onclick = function () {
  num = 0;
  document.getElementById("countLabel").textContent = num;
};

document.getElementById("increaseBtn").onclick = function () {
    num = num + 1;
    document.getElementById("countLabel").textContent = num;
};
