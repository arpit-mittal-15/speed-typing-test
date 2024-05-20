const para = [
  "LOrem hello dolor sit amet consectetur adipisicing elit Rem enim doloremque accusamus nam debitis eius Soluta ea rem laudantium praesentium cumque quaerat fuga sunt quam officia etquasi eaque Voluptatum quos vero consequatur illo expedita quibusdam adipisci similique natusnumquam sint perspiciatis quisquam laboriosam veniam neque praesentium cum fugiat debitis",
];

let count = 0;

let time = 30;

const timer = setInterval(timerFunc, 1000);

function start(){
  document.getElementById("test-para").innerHTML = para[0];
  const element = document.getElementById("test-para");
  const text = element.textContent;
  const letters = text.split('');
  letters[count] = `<span class="typed-letter">${letters[count]}</span>`;
  element.innerHTML = letters.join('');

  document.getElementById("timer").innerHTML = time;
}



function timerFunc(){
  if(time == 0){
    clearInterval(timer);
    showSpeed();
  }
  else{
    time--;
    document.getElementById("timer").innerHTML = time;
  }
}

window.onkeydown = function(event){

  let charCode = event.keyCode;
  if (charCode > 64 && charCode < 91){
    if(event.shiftKey){
      textCheck(charCode);
    }
    else{
      textCheck(charCode + 32)
    }
  }
  else if (charCode == 32){
    textCheck(charCode)
  }
};

function textCheck(keyValue){
  let keyPressed = String.fromCharCode(keyValue);
  if(time !== 0){
    if(keyPressed == para[0][count]){

      const element = document.getElementById("test-para"); // Replace with your HTML element
      const text = element.textContent;
      const letters = text.split('');
      letters[count+1] = `<span class="typed-letter">${letters[count+1]}</span>`;
      element.innerHTML = letters.join('');
      count++;
    };
  };
}

function showSpeed(){
  let speed = (count/5)*2;
  document.getElementById("your-speed").innerHTML = speed;
}