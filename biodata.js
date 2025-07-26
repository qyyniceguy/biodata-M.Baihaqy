alert("welcome")
setInterval(function() {
    let sekarang =new Date();
    let jam = sekarang.toLocaleTimeString();
    document.getElementByid("jam").innerText= jam;
}, 1000);
