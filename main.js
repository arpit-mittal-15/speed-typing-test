const para = [
  "LOrem hello dolor sit amet consectetur adipisicing elit Rem enim doloremque accusamus nam debitis eius Soluta ea rem laudantium praesentium cumque quaerat fuga sunt quam officia etquasi eaque Voluptatum quos vero consequatur illo expedita quibusdam adipisci similique natusnumquam sint perspiciatis quisquam laboriosam veniam neque praesentium cum fugiat debitis",
];

let count = 0;
let wrong = 0;
let startTime = 10;
let time = 10;



function start(){
  document.getElementById("test-para").innerHTML = para[0];
  const element = document.getElementById("test-para");
  const text = element.textContent;
  const letters = text.split('');
  letters[count] = `<span id="test-cursor"></span><span class="typed-letter">${letters[count]}</span>`;
  element.innerHTML = letters.join('');

  document.getElementById("timer").innerHTML = time;
}



function timerFunc(){
  if(time == 0){
    clearInterval(timer);
    document.getElementById("test-restart").style.display = "block";
    document.getElementById("test-para").style.filter = "blur(2px)"
    showReview();
  }
  else{
    time--;
    document.getElementById("timer").innerHTML = time;
  }
}

window.onkeydown = function(event){
  
  let charCode = event.keyCode;
  if (charCode > 64 && charCode < 91){
    if(count+wrong == 0){
      const timer = setInterval(timerFunc, 1000);
    }
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
      const element = document.getElementById("test-para");
      const text = element.textContent;
      const letters = text.split('');
      letters[count+1] = `<span id="test-cursor"></span><span class="typed-letter">${letters[count+1]}</span>`;
      element.innerHTML = letters.join('');
      count++;
    }
    else{
      const element = document.getElementById("test-para");
      const text = element.textContent;
      const letters = text.split('');
      letters[count] = `<span id="test-cursor"></span><span class="wrong-letter">${letters[count]}</span>`;
      element.innerHTML = letters.join('');
      wrong++;
    }
  };
}

function showReview(){
  let speed = Math.round(((count/5)/startTime)*600)/10;
  let total = count + wrong;
  let accuracy = 0;
  let raw = 0;
  if(total !== 0){
    accuracy = Math.round((count/total)*1000)/10;
    raw = Math.round(((total/5)/startTime)*600)/10;
  }
  document.getElementById("your-speed").innerHTML = `<span class="review-heading">WPM</span>${speed}`;
  document.getElementById("your-accuracy").innerHTML = `<span class="review-heading">acc</span>${accuracy}%`;
  document.getElementById("your-raw-speed").innerHTML = `<span class="review-heading">raw</span>${raw}`;
  document.getElementById("your-characters").innerHTML = `<span class="review-heading">characters</span>${total}/${count}/${wrong}`;
}