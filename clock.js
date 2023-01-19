const togglebutton = document.querySelector(".toggle");
const hourhand = document.querySelector(".hourhand");
const minutehand = document.querySelector(".minutehand");
const secondhand = document.querySelector(".secondhand");
const currtime = document.querySelector(".time");
const currday = document.querySelector(".date");



const days = ['Sunday' , 'Monday','Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday']

  togglebutton.addEventListener('click', (e)=>{
       const bodycolor = document.querySelector('html');

       if(bodycolor.classList.contains('dark')){
        bodycolor.classList.remove('dark')
         e.target.innerHTML = 'dark mode' ;
       }
       else{
        bodycolor.classList.add('dark')
        e.target.innerHTML = 'light mode'
       }
  })

  function setTime(){
    const time =  new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const day = time.getDay();
    const date = time.getDate();
    const hoursforclock = hour %12 ;
    const ampm = hoursforclock < 12 ? 'AM' : 'PM' ;

console.log("hoursforclock",hoursforclock)
    hourhand.style.transform = `translate(-50%,-100%) rotate(${scale(hoursforclock,0,11,0,360)}deg)`
   
    minutehand.style.transform = `translate(-50%,-100%) rotate(${scale(minutes,0,59,0,360)}deg)`

    secondhand.style.transform = `translate(-50%,-100%) rotate(${scale(seconds,0,59,0,360)}deg)` 

    currtime.innerHTML = `${hoursforclock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`

    currday.innerHTML = `${days[day]}<span class='circle'>${date}</span>`
    // currdate.innerHTML = date ;
  }


//   for map a range of numbers to another range of numbers
  const scale = (num , in_min , in_max , out_min , out_max ) =>{
    console.log(num , in_min , in_max , out_min , out_max  , "data")
    return(num - in_min) * (out_max - out_min ) / (in_max - in_min) + out_min ;
  }

  setTime()

  setInterval(setTime,1000)

  console.log(days)