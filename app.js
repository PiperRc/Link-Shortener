// navbar

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-effect');
})

// link shorterner
// 
/*<div class="link-container"
  <div class="link">
    <p class="original-link">http://frontendmentor.com</p>

    <p class="shorten-link">https:555933033/k54</p>

    <div class="copyBtn-container">
      <button>Copy</button>
    </div>

  </div>
</div> */


const input = document.querySelector('.inputLink input');
const buttonDiv = document.querySelector('.inputLink div:nth-child(2)');

const shortenBtn = document.querySelector(".inputLink button");
const inputLinkContainer = document.querySelector(".inputLinkContainer");

shortenBtn.addEventListener('click', createLinkContainer);

input.addEventListener('keydown', ((e) => {

  if (e.code === 'Enter') {
    createLinkContainer();
  }
}))



function createLinkContainer() {
  if (!input.value) {
    input.classList.add('placeholder-color');
    buttonDiv.classList.add('no-link-text');
    inputLinkContainer.classList.remove('inputLinkContainer-background');
    inputLinkContainer.classList.add('inputLinkContainer-noLink');

  }

  else {
    // fix the backgroundcolor of the input container
    inputLinkContainer.classList.add('inputLinkContainer-background');
    inputLinkContainer.classList.remove('inputLinkContainer-noLink');

    // remove buttonDiv class
    buttonDiv.classList.remove('no-link-text');

    // create outer div
    const newDiv = document.createElement("div");

    // add class to outer div
    newDiv.classList.add("link-container");

    // create innerdiv
    const newInnerDiv = document.createElement("div");

    // add class to innerdiv
    newInnerDiv.classList.add("link");

    // create p for original link
    const firstP = document.createElement('p');
    // add class to p
    firstP.classList.add('original-link');
    // add content to it
    if (input.value.length >= 29) {
      firstP.innerHTML = input.value.slice(0, 25) + '...';
    }
    else { firstP.innerHTML = input.value }

    // create p for shorten link
    const secondP = document.createElement('p');
    // add class to p
    secondP.classList.add('shorten-link');


    // add loader 
    const loader = document.createElement('div');
    // add class to it 
    loader.classList.add('loader');
    // append ot p
    secondP.append(loader);


    // add content to it
    const link = fetch(`https://api.shrtco.de/v2/shorten?url=${input.value}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const link = data.result.short_link2;
        secondP.innerHTML = link;
      })

    // create button container
    const copyBtnContainer = document.createElement('div')
    // add class to it
    copyBtnContainer.classList.add("copyBtn-container");
    // create button
    const copyBtn = document.createElement("button");
    // add content to button
    copyBtn.innerHTML = "Copy"


    // create Event Listener
    copyBtn.addEventListener('click', async () => {
      await navigator.clipboard.writeText(secondP.innerHTML)
      copyBtn.innerHTML = 'Copied!'
      copyBtn.style.backgroundColor = 'var(--dViolet)'
    })

    // append button to container
    copyBtnContainer.append(copyBtn);

    // append the p's and the button to the innerdiv
    newInnerDiv.append(firstP);
    newInnerDiv.append(secondP);
    newInnerDiv.append(copyBtnContainer);

    // append innerdiv to outerdiv
    newDiv.append(newInnerDiv);

    // append outerdiv after inputLinkContainer
    inputLinkContainer.after(newDiv);

  }
}
