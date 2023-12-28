let prev=document.querySelector('.prev')
let next = document.querySelector('.next')
let ul = document.querySelector('.spec-items ul')
let lis = document.querySelectorAll('.spec-items ul li')
let Bigimg = document.querySelector('.Bigimg')
let mianImg=document.querySelector(".main-img")
let zoomPup=document.querySelector('.zoom-pup')
let zoomDiv=document.querySelector('.zoom-div')
let zoomDivImg = document.querySelector('.zoom-div img')
let big = document.querySelector('.big')
let imgArr=['58bd2e0baadde197.jpg.avif','d9041cf272d70260.jpg.avif','f3d19923bfbd63fe.jpg.avif','huawei1.jpg.avif','huawei2.jpg.avif','huawei3.jpg.avif','huawei4.jpg.avif']
prev.onclick=function() {
    ul.style.left="0";
    prev.style.background='url(./images/disabled-prev.png)'

}
next.onclick=function() {
    ul.style.left='-116px'
    next.style.background='url(./images/hover-next.png)'
}
//实现中图效果
for(let i =0;i<lis.length;i++) {
    lis[i].onmouseover=function() {
        for(let j=0;j<lis.length;j++) {
            lis[j].className=''
        }
        lis[i].className='img-hover'
        Bigimg.src=lis[i].children[0].src;
      

    }
}
let buyNum = document.querySelector('.buy-num')
let reduce = document.querySelector('.reduce')
let add = document.querySelector('.add')
add.onclick=function() {
    buyNum.value++
    if(buyNum.value>1) {
        reduce.className='reduce'
    }
}
reduce.onclick=function() {
    buyNum.value--;
    if(buyNum.value<1){
        buyNum.value=1
        reduce.className='reduce disabled'
    }
}