//实现小图片前进后退
let prev=document.querySelector('.prev')
let next = document.querySelector('.next')
let ul = document.querySelector('.spec-items ul')
let lis = document.querySelectorAll('.spec-items ul li')
let Bigimg = document.querySelector('.Bigimg')
let mianImg=document.querySelector(".main-img")
let zoomPup=document.querySelector('.zoom-pup')
let zoomDiv=document.querySelector('.zoom-div')
let zoomDivImg = document.querySelector('.zoom-div img')
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
mianImg.onmouseover=function(){
    zoomPup.style.display='block'
    zoomDiv.style.display='block'
}
mianImg.onmouseout=function(){
    zoomPup.style.display='none'    
    zoomDiv.style.display='none'
}

mianImg.onmousemove=function(e) {

    //获取鼠标与文档顶部的距离
    let pageY=e.pageY
    //获取到中图到文档顶部的距离
    let offsetTop=mianImg.offsetTop
    //获取放大镜的高度

    //获取鼠标与文档左部的距离
    let pageX=e.pageX
    let offsetLeft= mianImg.offsetLeft
   
    let h = zoomPup.clientHeight/2
    let w = zoomPup.clientWidth/2
    let top= pageY-offsetTop-h
    let left = pageX-offsetLeft-w
    if(top<=0){
        top=0
    }else if(top>=mianImg.clientHeight-zoomPup.clientHeight){
        top=mianImg.clientHeight-zoomPup.clientHeight
    }
    zoomPup.style.top=top+'px'
    if(left<=0) {
        left=0
    }else if(left>=mianImg.clientWidth-zoomPup.clientWidth) {
        left=mianImg.clientWidth-zoomPup.clientWidth
    }
    zoomPup.style.left=left+'px'

    let y = top/(mianImg.clientHeight-zoomPup.clientHeight)
    let yy=y*(800-540)
    zoomDivImg.style.top=-yy+'px'
        let x = left/(mianImg.clientWidth-zoomPup.clientWidth)
        let xx = x*(800-540)
        zoomDivImg.style.left=-xx+'px'
}
//实现购物车数量的加减
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