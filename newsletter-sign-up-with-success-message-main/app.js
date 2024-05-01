const data = document.querySelector(".input-email")
const btn = document.querySelector(".btn")
const msg = document.querySelector(".err-msg")
const container = document.querySelector(".container")
const dismiss = document.querySelector(".dismiss")


const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (validateEmail(data.value)) {
        console.log("yes");
        container.innerHTML=`
        <div class="success">
        <img src="./assets/images/icon-success.svg" alt="success">
        <h2>
          Thanks for subscribing!
        </h2>
        <p>
          A confirmation email has been sent to <b>${data.value}</b>
          Please open it and click the button inside to confirm your subscription.        
        </p>
        <button class="btn dismiss">
          Dismiss message
        </button>
      </div>
        `

    }
    else {
        msg.style.display = "block"
        data.classList.add("err-data")

        setTimeout(() => {
            msg.style.display = "none"
            data.classList.remove("err-data")
        }, 2000);
    }

})


