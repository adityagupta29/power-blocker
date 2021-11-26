const select = document.querySelector(".text");
const inner = document.querySelector(".text-inner");
const text = document.querySelector("p");
var background = chrome.extension.getBackgroundPage();


if (background.enabled ){
    select.style.transform = 'translateX(102%)';    
    inner.style.border = '.5px solid #ffa502';
    select.style.border = '.5px solid #ffa502';   
    text.style.color = '#ffa502';
    inner.style.boxShadow = '0 0 20px #d35400';
    inner.style.right = '-7.3px';
    select.style.boxShadow = '0 0 20px #d35400';
} 
else{
    select.style.transform = '';
    inner.style.border = '1px solid rgb(17, 17, 17)';
    select.style.border = '1px solid rgb(17, 17, 17)';   
    text.style.color = 'rgb(17, 17, 17)';
    inner.style.boxShadow = '0 0 0px';
    inner.style.right = '-6.5px';
    select.style.boxShadow = '0 0 0px';
}

select.addEventListener("click", () => {
    if (select.style.transform){
		background.enabled = false;
        select.style.transform = '';
        inner.style.border = '1px solid rgb(17, 17, 17)';
        select.style.border = '1px solid rgb(17, 17, 17)';   
        text.style.color = 'rgb(17, 17, 17)';
        inner.style.boxShadow = '0 0 0px';
        inner.style.right = '-6.5px';
        select.style.boxShadow = '0 0 0px';
    } 
    else {
        background.enabled = true;
        select.style.transform = 'translateX(102%)';    
        inner.style.border = '.5px solid #ffa502';
        select.style.border = '.5px solid #ffa502';   
        text.style.color = '#ffa502';
        inner.style.boxShadow = '0 0 20px #d35400';
        inner.style.right = '-7.3px';
        select.style.boxShadow = '0 0 20px #d35400';
    }
});


