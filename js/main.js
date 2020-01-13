// js for accordion
(function() {
    const accordion = document.getElementsByClassName("accordion");
    let current = -1;
  
    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function() {
            if (i !== current && current !== -1) {
                accordion[current].classList.remove('active');
                accordion[current].nextElementSibling.classList.remove('panel-open');
            }
            this.nextElementSibling.classList.toggle('panel-open');
            current = this.classList.toggle('active') ? i : -1;
        });
    };
})();
// end of js accordion

// js for email
let email = document.querySelector('input');
let submit = document.querySelector('.submit-button');
submit.addEventListener('click',function(){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        alert('congrats your email has been sent!')
    }else{
        alert('Sorry! This email is not valid')
    }``
})
// end of js email

// js for tabs
function onTabClick(event) {
    let activeTabs = document.querySelectorAll('.active');
    
    //deactivate existing active tab and panel
    for( let i = 0; i < activeTabs.length; i++) {
    activeTabs[i].className = activeTabs[i].className.replace('active', '');
    }
    
    activeTabs.forEach(function(tab) {
      tab.className = tab.className.replace('active', '');
    });
    
    // activate new tab and panel
    event.target.parentElement.className += ' active';
    document.getElementById(event.target.href.split('#')[1]).className += ' active';
  }
  
  const element = document.getElementById('nav-tab');
  
  element.addEventListener('click', onTabClick, false);

// end of js for tabs

var chrome=document.querySelector('.free');
chrome.addEventListener('click', function(){
    chrome.style.backgroundColor="rgb(52, 52, 129)"
});



