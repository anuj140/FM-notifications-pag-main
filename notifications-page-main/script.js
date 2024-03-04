let notifications = document.querySelectorAll(".box");
let counter = document.querySelector(".counter");
let markAll = document.querySelector(".markAll");

for(let notification of notifications){
    notification.addEventListener('click', function(){
        notification.classList.toggle('unread');
        notification.classList.toggle('read');
        upadateCounter();
    })
}
 
markAll.addEventListener('click', function(){
    for(notification of notifications){
        if (notification.classList.contains('unread')){
            notification.classList.remove('unread');
            notification.classList.add('read');
        }
    }
    upadateCounter();
});

function upadateCounter(){
    let changeCounter = 0;
    for(notification of notifications){
        if (notification.classList.contains('unread')){
            changeCounter ++;
        }
    }
    counter.textContent = changeCounter;
}
 

 

 


 

 

 
