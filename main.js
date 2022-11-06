let stats=document.querySelectorAll(".stats .box p"),statsSection=document.querySelector(".stats"),isNumberAnimated=!1;function startCount(e){let t=e.dataset.goal,o=setInterval(()=>{e.textContent++,e.textContent==t&&clearInterval(o)},3e3/t)}document.addEventListener("scroll",function(){isInViewport(statsSection)&&(isNumberAnimated||stats.forEach(e=>startCount(e)),isNumberAnimated=!0)});const options={method:"GET",headers:{"X-RapidAPI-Key":"2d8d67cfdcmsh8b9b76dea59ec67p1cdcd7jsn6ec002e4944c","X-RapidAPI-Host":"free-to-play-games-database.p.rapidapi.com"}},articlesPosts=(fetch("https://free-to-play-games-database.p.rapidapi.com/api/games",options).then(e=>e.json()).then(e=>setArticles(e)).catch(e=>console.error(e)),document.getElementById("articlesPosts"));function setArticles(e){e.length=8,e.forEach(e=>{var{title:e,thumbnail:t,short_description:o}=e;let n=document.createElement("div");n.className="box",n.innerHTML=`
    <img src=${t} alt="thumbnail" />
    <div class="content">
      <h3>${e}</h3>
      <p>
        ${o}
      </p>
    </div>
    <div class="info">
      <a href="">Read More</a>
      <i class="fas fa-long-arrow-alt-right"></i>
    </div>
    `,articlesPosts.append(n)})}let unitDays=document.querySelector(".days"),unitHours=document.querySelector(".hours"),unitMinutes=document.querySelector(".minutes"),unitSeconds=document.querySelector(".seconds"),countDownDate=new Date("Dec 31, 2022 23:59:59").getTime(),textarea=(window.onload=()=>{let e=(new Date).getTime(),t=countDownDate-e,o=Math.floor(t/864e5),n=(unitDays.innerHTML=o<10?"0"+o:o,Math.floor(t%864e5/36e5)),i=(unitHours.innerHTML=n<10?"0"+n:n,Math.floor(t%36e5/6e4)),s=(unitMinutes.innerHTML=i<10?"0"+i:i,Math.floor(t%6e4/1e3)),a=(unitSeconds.innerHTML=s<10?"0"+s:s,setInterval(()=>{e=(new Date).getTime(),t=countDownDate-e,o=Math.floor(t/864e5),unitDays.innerHTML=o<10?"0"+o:o,n=Math.floor(t%864e5/36e5),unitHours.innerHTML=n<10?"0"+n:n,i=Math.floor(t%36e5/6e4),unitMinutes.innerHTML=i<10?"0"+i:i,s=Math.floor(t%6e4/1e3),unitSeconds.innerHTML=s<10?"0"+s:s,t<0&&clearInterval(a)},1e3))},document.querySelector(".discounts .form textarea")),inputSpan=document.querySelector(".discounts .form .textarea span"),textProgress=document.querySelector(".discounts .form .textarea .text-progress");function inputCount(e){inputSpan.innerHTML=200-e,textProgress.style.width=e/textarea.getAttribute("maxlength")*100+"%",0===inputSpan.innerHTML?(inputSpan.style.color="red",textarea.style.color="red",textProgress.style.background="red"):(inputSpan.style.color="var(--main-color)",textarea.style.color="black",textProgress.style.background="var(--main-color)")}function isInViewport(e){if(window.scrollY>=e.offsetTop-200)return!0}textarea.oninput=()=>{inputCount(textarea.value.length)};let scrollToTopBtn=document.querySelector(".scrollToTop");window.onscroll=()=>{500<=window.scrollY?scrollToTopBtn.style.opacity=1:scrollToTopBtn.style.opacity=0},scrollToTopBtn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})};const testimonialsOptions={method:"GET",redirect:"follow"},testimonialsContainer=(fetch("https://testimonialapi.toolcarton.com/api",testimonialsOptions).then(e=>e.json()).then(e=>setTestimonials(e)).catch(e=>console.error(e)),document.getElementById("testimonialsContainer"));function setTestimonials(e){e.length=6,e.forEach(e=>{var{avatar:e,designation:t,message:o,name:n}=e;let i=document.createElement("div");i.className="box",i.innerHTML=`
    <img src=${e} alt="avatar" />
    <h3>${n}</h3>
    <span class="title">${t}</span>
    <div class="rate">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
    </div>
    <p>
        ${o}
    </p>
    `,testimonialsContainer.append(i)})}let videoCount=0,videos=document.querySelectorAll(".video .container .box > div"),shuffleBtn=(videos.forEach((e,t)=>{e.onclick=()=>{videos.forEach(e=>{e.classList.remove("checked")}),e.classList.add("checked"),changeText(e),slider(t)}}),document.querySelector(".video .container .box h3 i")),videoShuffle=(shuffleBtn.onclick=()=>{videos.forEach(e=>{e.classList.remove("checked")});var e=Math.floor(Math.random()*videos.length);videos[e].classList.add("checked"),videoCount=e,containsClass(videos)},document.querySelectorAll(".video .container .box-video .video-holder img")),btnLeft=document.querySelector(".video .container .box-video .fa-arrow-left"),btnRight=document.querySelector(".video .container .box-video .fa-arrow-right");function slider(e){videoShuffle.forEach(e=>{e.classList.remove("checked")}),videoShuffle[e].classList.add("checked"),videoShuffle.forEach((e,t)=>{e.classList.contains("checked")&&(videos.forEach(e=>{e.classList.remove("checked")}),videos[t].classList.add("checked"),changeText(videos[t]))})}function containsClass(e){e.forEach((e,t)=>{e.classList.contains("checked")&&(changeText(e),slider(t))})}btnLeft.onclick=()=>{slider(videoCount=--videoCount<0?videoShuffle.length-1:videoCount)},btnRight.onclick=()=>{slider(videoCount=++videoCount>=videoShuffle.length?0:videoCount)};let videoText=document.querySelector(".video .container .box-video .video-discription");function changeText(e){innertText=e.innerHTML,videoText.innerHTML=innertText}