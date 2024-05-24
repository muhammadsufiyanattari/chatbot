let list = document.getElementById("list");
let typing = document.getElementById("typing");
let course = document.getElementById("course");
let icon = document.getElementById("icon");
let input = document.querySelector(".my-input");
let input1 = document.querySelector(".my-input1");
let input2 = document.querySelector(".my-input2");

function lastMessage() {
  var scrol = document.querySelector(".scroll");
  scrol.scrollTop = scrol.scrollHeight;
}
function sendMessage() {
  let InpValue = event.target;
  lastMessage();

  if (event.keyCode === 13) {
    list.innerHTML += `<div class="ul-div" ><li class="right-side"> ${InpValue.value} </li></div>`;
    typing.style.display = "block";
    icon.style.display = "none";

    if (
      ["hi", "hey", "hello", "hy", "oye",'he','hay', "salam", "asalamowalaikum"].indexOf(
        InpValue.value.toLowerCase()
      ) !== -1
    ) {
      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side">  Hello, Welcome to Saylani Mass IT Traning (SMIT) chatbot: </li>`;
        lastMessage();
      }, 2000);
      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side ">Ap kese hen? </li>`;
        typing.style.display = "none";
        icon.style.display = "block";
        lastMessage();
      }, 4000);
    } else if (
      [
        'good',
        'thik hon',
        'allah pak ka karam he',
        "theek",
        "me theek",
        "fit",
        "mast",
        "may thik hoon",
        "allhamdullilah",
        "thik",
        "thk",
        "thik ho",
        'ok ki report he'
      ].indexOf(InpValue.value.toLowerCase()) !== -1
    ) {
      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side"> Ji bataiye SMIT me admission ke lye kya information provide kar sakhte hen?  </li>`;
        typing.style.display = "none";
        icon.style.display = "block";
        lastMessage();
      }, 2000);
    } else if (
      [
        "me addmission lena chata ho",
        'me add lena chata hon',
        "mujhy addmission chahiye",
        "addmission lena he",
        "addmission chahiye",
        "addmission chaiye",
      ].indexOf(InpValue.value.toLowerCase()) !== -1
    ) {
      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side"> Ap kon se course meadmission lena chate hen?
        </li>`;
      }, 2000);
      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side course-btn">
        <button class="left-side course" onclick = "webAndApp()" >Web and app hybird Application</button>
        <button class="left-side course" onclick = "python()">Python programming language</button>
        <button class="left-side course" onclick = "graphic()">Gaphic designing</button>
        <button class="left-side course" onclick = "gen()">Gen Ai & chatbot</button>
        <button class="left-side course" onclick = "animation()">3D Animations</button></li>`;
        typing.style.display = "none";

        icon.style.display = "block";
        lastMessage();
      }, 4000);
    } else {
      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side"> Mazrat me ap ki bat samajh nahi sakha please dubara arz karen</li>`;
        typing.style.display = "none";
        icon.style.display = "block";
        lastMessage();
      }, 2000);
    }
    InpValue.value = "";
  }
}

// courses function!
function webAndApp() {
  setTimeout(function abc() {
    list.innerHTML += `<div class="ul-div" ><li class="right-side">Web and app hybird Application</li></div>`;
    lastMessage();
  }, 1000);
  setTimeout(function abc() {
    list.innerHTML += `<li class="left-side"> Ap ka name kya he </li>`;
    typing.style.display = "none";
    icon.style.display = "block";
    input1.style.display = "block";
    input2.style.display = "none";
    input.style.display = "none";
    lastMessage();
  }, 3000);
}
function python() {
  setTimeout(function abc() {
    list.innerHTML += `<div class="ul-div" ><li class="right-side"> Python programming language </li></div>`;
    lastMessage();
  }, 1000);
  setTimeout(function abc() {
    list.innerHTML += `<li class="left-side"> Ap ka name kya he </li>`;
    typing.style.display = "none";
    icon.style.display = "block";
    input1.style.display = "block";
    input.style.display = "none";
    input2.style.display = "none";
    lastMessage();
  }, 3000);
}
function gen() {
  setTimeout(function abc() {
    list.innerHTML += `<div class="ul-div" ><li class="right-side"> Ai & chatbot </li></div>`;
    lastMessage();
  }, 1000);
  setTimeout(function abc() {
    list.innerHTML += `<li class="left-side"> Ap ka name kya he </li>`;
    typing.style.display = "none";
    icon.style.display = "block";
    input1.style.display = "block";
    input.style.display = "none";
    input2.style.display = "none";
    lastMessage();
  }, 3000);
}
function graphic() {
  setTimeout(function abc() {
    list.innerHTML += `<div class="ul-div" ><li class="right-side"> Graphic Designing </li></div>`;
    lastMessage();
  }, 1000);
  setTimeout(function abc() {
    list.innerHTML += `<li class="left-side"> Ap ka name kya he </li>`;
    typing.style.display = "none";
    icon.style.display = "block";
    input1.style.display = "block";
    input2.style.display = "none";
    lastMessage();

    input.style.display = "none";
  }, 3000);
}
function animation() {
  setTimeout(function abc() {
    list.innerHTML += `<div class="ul-div" ><li class="right-side"> 3D Animation</li></div>`;
    lastMessage();
  }, 1000);
  setTimeout(function abc() {
    list.innerHTML += `<li class="left-side"> Ap ka name kya he </li>`;
    typing.style.display = "none";
    input1.style.display = "block";
    input.style.display = "none";
    icon.style.display = "block";
    input2.style.display = "none";
    lastMessage();
  }, 3000);
}

function sendName() {
  let InpName = event.target;
  lastMessage();

  if (event.keyCode === 13) {
    list.innerHTML += `<div class="ul-div" ><li class="right-side"> ${InpName.value} </li></div>`;
    if (isNaN(InpName.value.toLowerCase())) {
      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side">Theek he ab Apne Father ka name batayen. </li>`;
        typing.style.display = "none";
        icon.style.display = "block";
        input1.style.display = "none";
        input.style.display = "none";
        input2.style.display = "block";
        lastMessage();
      }, 2000);
    } else {
      setTimeout(function abc() {
        lastMessage();

        list.innerHTML += `<li class="left-side"> g dubara khaiye </li>`;
        typing.style.display = "none";
        icon.style.display = "block";
        lastMessage();
      }, 2000);
    }

    InpName.value = "";
  }
}
function sendFatherName() {
  let InpFatherName = event.target;
  lastMessage();

  if (event.keyCode === 13) {
    list.innerHTML += `<div class="ul-div" ><li class="right-side"> ${InpFatherName.value} </li></div>`;
    if (isNaN(InpFatherName.value.toLowerCase())) {
      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side">Thik he ab ap apne CNIC number send kijiye.</li>`;
        typing.style.display = "none";
        icon.style.display = "block";
        input.style.display = "none";
        input1.style.display = "none";
        input2.style.display = "block";
        lastMessage();
      }, 2000);
    } else if (!isNaN(InpFatherName.value)) {
      setTimeout(function abc() {
        list.innerHTML += `<li class="left-side"> Sorry hamare addmission abhi close hen</li>`;
        typing.style.display = "none";
        icon.style.display = "block";
        input.style.display = "none";
        input1.style.display = "none";
        input2.style.display = "block";
        lastMessage();
      }, 2000);
    }

    InpFatherName.value = "";
  }
}

// closed-word mind is hang baba