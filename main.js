let stats=document.querySelectorAll(".stats .box p"),statsSection=document.querySelector(".stats"),isNumberAnimated=!1;function startCount(e){let t=e.dataset.goal,o=setInterval(()=>{e.textContent++,e.textContent==t&&clearInterval(o)},3e3/t)}document.addEventListener("scroll",function(){isInViewport(statsSection)&&(isNumberAnimated||stats.forEach(e=>startCount(e)),isNumberAnimated=!0)});let skillSection=document.querySelector(".our-skills"),skillPercentage=document.querySelectorAll(".the-progress span"),isWidthAnimated=!1,unitDays=(document.addEventListener("scroll",function(){isInViewport(skillSection)&&(isWidthAnimated||skillPercentage.forEach(e=>{e.style.width=e.dataset.progress}),isWidthAnimated=!0)}),document.querySelector(".days")),unitHours=document.querySelector(".hours"),unitMinutes=document.querySelector(".minutes"),unitSeconds=document.querySelector(".seconds"),countDownDate=new Date("Dec 31, 2022 23:59:59").getTime(),inputChar=(window.onload=()=>{let e=(new Date).getTime(),t=countDownDate-e,o=Math.floor(t/864e5),n=(unitDays.innerHTML=o<10?"0"+o:o,Math.floor(t%864e5/36e5)),i=(unitHours.innerHTML=n<10?"0"+n:n,Math.floor(t%36e5/6e4)),r=(unitMinutes.innerHTML=i<10?"0"+i:i,Math.floor(t%6e4/1e3)),s=(unitSeconds.innerHTML=r<10?"0"+r:r,setInterval(()=>{e=(new Date).getTime(),t=countDownDate-e,o=Math.floor(t/864e5),unitDays.innerHTML=o<10?"0"+o:o,n=Math.floor(t%864e5/36e5),unitHours.innerHTML=n<10?"0"+n:n,i=Math.floor(t%36e5/6e4),unitMinutes.innerHTML=i<10?"0"+i:i,r=Math.floor(t%6e4/1e3),unitSeconds.innerHTML=r<10?"0"+r:r,t<0&&clearInterval(s)},1e3))},document.querySelector(".discounts .form textarea.input")),inputSpan=document.querySelector(".discounts .form .textarea span"),textProgress=document.querySelector(".discounts .form .textarea .text-progress");function inputCount(e){inputSpan.innerHTML=inputChar.getAttribute("maxlength")-e,textProgress.style.width=e/inputChar.getAttribute("maxlength")*100+"%",0==inputSpan.innerHTML?(inputSpan.style.color="red",inputChar.style.color="red",textProgress.style.background="red"):(inputSpan.style.color="var(--main-color)",inputChar.style.color="black",textProgress.style.background="var(--main-color)")}function isInViewport(e){if(window.scrollY>=e.offsetTop-100)return!0}inputChar.oninput=()=>{inputCount(inputChar.value.length)};let scrollToTopBtn=document.querySelector(".scrollToTop"),videoCount=(window.onscroll=()=>{500<=window.scrollY?scrollToTopBtn.style.opacity=1:scrollToTopBtn.style.opacity=0},scrollToTopBtn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})},0),videos=document.querySelectorAll(".video .container .box > div"),shuffleBtn=(videos.forEach((e,t)=>{e.onclick=()=>{videos.forEach(e=>{e.classList.remove("checked")}),e.classList.add("checked"),changeText(e),slider(t)}}),document.querySelector(".video .container .box h3 i")),videoShuffle=(shuffleBtn.onclick=()=>{videos.forEach(e=>{e.classList.remove("checked")});var e=Math.floor(Math.random()*videos.length);videos[e].classList.add("checked"),videoCount=e,containsClass(videos)},document.querySelectorAll(".video .container .box-video .video-holder img")),btnLeft=document.querySelector(".video .container .box-video .fa-arrow-left"),btnRight=document.querySelector(".video .container .box-video .fa-arrow-right");function slider(e){videoShuffle.forEach(e=>{e.classList.remove("checked")}),videoShuffle[e].classList.add("checked"),videoShuffle.forEach((e,t)=>{e.classList.contains("checked")&&(videos.forEach(e=>{e.classList.remove("checked")}),videos[t].classList.add("checked"),changeText(videos[t]))})}function containsClass(e){e.forEach((e,t)=>{e.classList.contains("checked")&&(changeText(e),slider(t))})}btnLeft.onclick=()=>{slider(videoCount=--videoCount<0?videoShuffle.length-1:videoCount)},btnRight.onclick=()=>{slider(videoCount=++videoCount>=videoShuffle.length?0:videoCount)};let videoText=document.querySelector(".video .container .box-video .video-discription");function changeText(e){innertText=e.innerHTML,videoText.innerHTML=innertText}