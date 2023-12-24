//模糊查询
let keyword=document.querySelector('.keyword')
let searchHelper=document.querySelector('.search-helper')

//定义一个数组
const searchArr=['小米手机','华为手机','苹果手机','vivo手机','oppo手机','荣耀手机','苹果手表','ipad']
//给输入框绑定点击事件
keyword.oninput=function () {
    searchHelper.innerHTML=''
        for(let i=0;i<searchArr.length;i++) {
        if(searchArr[i].indexOf(keyword.value)!=-1){
            searchHelper.innerHTML+='<p>'+searchArr[i]+'</p>'
            searchHelper.style.display='block'

        }
    }

  }
keyword.onblur=function () {
    searchHelper.style.display='none'
  }

function clearColor() {
    for(let i =0;i<elevatorA.length;i++) {
        elevatorA[i].style.color='';
        
    }
  }
//轮播图的切换
let img = document.querySelector('.img')
let imgArr=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg']
let count=0;
let recommendCount=0;
let recommendImge1=document.querySelector('.recommend-img1')
let recommendImge2=document.querySelector('.recommend-img2')
let recommendImge3=document.querySelector('.recommend-img3')
let recommendImge1Arr=['shouji.png.avif','shouji2.png.avif']
let recommendImge2Arr=['qingjie.png.avif','kouzhao.png.avif']
let recommendImge3Arr=['biao.png.avif','napkin.png.avif']
//定义函数切换图片路径
function cutImg() {
    img.src='./images/'+imgArr[count];
  
    for(let i =0;i<lis.length;i++) {
        lis[i].className=""
    }
    lis[count].className='active'

}
  //推荐 图片切换
  function recommendImgChange() {
    recommendImge1.src='./images/'+recommendImge1Arr[recommendCount];
    recommendImge2.src='./images/'+recommendImge2Arr[recommendCount];
    recommendImge3.src='./images/'+recommendImge3Arr[recommendCount];
  }
  let recommendTimer=setInterval(function () {
    recommendCount++
    if(recommendCount>recommendImge1Arr.length-1){
        recommendCount=0
    }
    recommendImgChange()
    
  },2000)
let timer = setInterval(function () {  
    count++;
   
    if(count>imgArr.length-1) {
        count=0;
    }
    
    cutImg();
},2000)
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
next.onclick=function () {  
    count++;
    if(count>imgArr.length-1) {
        count=0;
    }
    cutImg();
}
prev.onclick=function () {  
    count--;
    if(count<0) {
      count=imgArr.length-1;
    }
    cutImg();
}

let slide =document.querySelector('.slide')
//鼠标划入div 将定时器暂停
slide.onmouseover=function () {
   clearInterval(timer)
  }
recommendImge1.onmouseover=function() {
    clearInterval(recommendTimer)
}
recommendImge2.onmouseover=function() {
    clearInterval(recommendTimer)
}
recommendImge3.onmouseover=function() {
    clearInterval(recommendTimer)
}
//鼠标划出div 定时器重开
slide.onmouseout=function () { 
    timer = setInterval(function () {  
        count++;
       
        
        if(count>imgArr.length-1) {
            count=0;
        }
        
        cutImg();
    },2000)
 }
 recommendImge1.onmouseout=function(){
    recommendTimer=setInterval(function () {
        recommendCount++
        if(recommendCount>recommendImge1Arr.length-1){
            recommendCount=0
        }
        recommendImgChange()
    },2000)

}
 
 let lis = document.querySelectorAll('.banner-btn li')
 //给li绑定点击时间
 for(let i = 0;i<lis.length;i++) {
    lis[i].onclick=()=>{
        count =i;
        cutImg();
    }
 }
 //获取用户昵称

 let nickname = window.localStorage.getItem('nickname')
 let miaosha = document.querySelector('.miaosha')
 let search = document.querySelector('.search')
 let searchM = document.querySelector('.search-m')
 let form = document.querySelector('.form')
 let searchLogo = document.querySelector('.search_logo')
 //楼层滚动 文字变色
 let header = document.querySelector('.header')
 let banner = document.querySelector('.banner')
 let elevator = document.querySelector('.elevator')
 let items =   document.querySelectorAll(".content .item")
 let elevatorA =   document.querySelectorAll(".elevator a")
 let elevatorArr = [];
 let base = header.offsetHeight+banner.offsetHeight;
 console.log(base)
 for(let i =0;i<items.length;i++) {
    base = base +items[i].offsetHeight
    console.log(base)   
    elevatorArr.push(base)
    console.log(elevatorArr[0])
    

 }
 console.log(elevatorArr[0])


//实现楼层的定位切换
document.onscroll=function () { 
    //获取到滚动条垂直方向滚动了多少
    let top = document.documentElement.scrollTop || document.body.scrollTop;
    let headerHeight = header.offsetHeight;
    let bannerHeight = banner.offsetHeight;
    //当滚动条滚动到一定程度时 ele固定在固定位置
    if(top>=headerHeight+bannerHeight) {
      elevator.className='elevator elevator-fix'
      search.className="search search-fix"
      searchM.style.height="50px"
      form.style.top = "8px"
      searchLogo.style.display='block'
    }else{
        elevator.className='elevator'
        search.className='search'
        searchM.style.height="60px"
        searchLogo.style.display='none'
    }
    if(top<header.offsetHeight+banner.offsetHeight) {
        clearColor()
    }else if(top>=header.offsetHeight+banner.offsetHeight &&top<elevatorArr[0]) {
        clearColor()
        elevatorA[0].style.color='red';
        console.log("yes")


    }else if(top>=elevatorArr[0] && top< elevatorArr[1]) {
        clearColor()
        elevatorA[1].style.color = 'red'

    }else if (top>=elevatorArr[1] && top< elevatorArr[2]) {
        clearColor()
        elevatorA[2].style.color = 'red'
    }else if (top>=elevatorArr[2] ) {
        clearColor()

        elevatorA[3].style.color = 'red'
    }
 }
 window.onloa=function() {
    function loadNickName() {
     miaosha.innerHTML='<p>'+nickname+'</p>'
        
    }
    loadNickName()
    
 }

