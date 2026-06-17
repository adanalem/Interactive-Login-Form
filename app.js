const formlogin = document.getElementById("login");
const eyeleft=document.getElementById("eye-l");
const eyeright=document.getElementById("eye-r");
const mouth=document.getElementById("mouth");
const emailfield=document.getElementById("email");
const passwordfield=document.getElementById("password");
const earleft=document.getElementById("ear-l");
const earright=document.getElementById("ear-r");
const loginf=document.getElementById("login");
const faceleft=document.getElementById("facel");
const faceright=document.getElementById("facer");
window.addEventListener("mousemove",(event)=>{
    let movex=((event.clientX*100)/window.innerWidth)-50;
    let movey=((event.clientY*100)/window.innerHeight)-50;
   eyeleft.style.transform=`translate(${movex/10}px,${movey/10}px)`;
   eyeright.style.transform=`translate(${movex/10}px,${movey/10}px)`;
   
});
const tongue = document.getElementById("tongue");

passwordfield.addEventListener('focus', () => {

    eyeleft.style.transform = "scaleY(0)";
    eyeright.style.transform = "scaleY(0)";


    earleft.style.transition = "all 0.3s";
    earleft.style.transform = "translate(24px, 22px) rotate(45deg)";
    earleft.style.zIndex = "20";

    earright.style.transition = "all 0.3s";
    earright.style.transform = "translate(-24px, 22px) rotate(-45deg)";
    earright.style.zIndex = "20";


    mouth.style.height = "15px";
    mouth.style.borderRadius = "0 0 15px 15px";
    tongue.style.transform = "scale(1) translateX(-50%)";
});


const head = document.getElementById("head2");


emailfield.addEventListener('focus', () => {

    head.style.animation = "happyJump 0.4s ease 3"; 

    // 2. Smile & Eyes
    mouth.classList.add("panda-smile");
    eyeleft.style.transform = "scale(1.4)";
    eyeright.style.transform = "scale(1.4)";
   
});

emailfield.addEventListener('blur', () => {
    head.style.animation = "none";
    head.style.transform = "translateY(0) scale(1)";
    mouth.classList.remove("panda-smile");
    eyeleft.style.transform = "scale(1)";
    eyeright.style.transform = "scale(1)";
});
emailfield.addEventListener('focus', () => {
    
    head.style.animation = "happyJump 0.4s ease 3"; 

    
    mouth.classList.add("panda-smile");
    
    
    eyeleft.style.transform = "scale(1.2)";
    eyeright.style.transform = "scale(1.2)";
});

emailfield.addEventListener('blur', () => {
    
    head.style.animation = "none";
    mouth.classList.remove("panda-smile");
    eyeleft.style.transform = "scale(1)";
    eyeright.style.transform = "scale(1)";
});
emailfield.addEventListener('blur', () => {
    eyeleft.style.transform = "scale(1)";
    eyeright.style.transform = "scale(1)";
    
    const head = document.getElementById("head");
    head.style.transform = "translateY(0) scale(1)";
    head.style.borderColor = "#111827"; 
});

passwordfield.addEventListener('blur', () => {
    
    eyeleft.style.transform = "scaleY(1)";
    eyeright.style.transform = "scaleY(1)";


    earleft.style.transform = "translate(0, 0) rotate(0deg)";
    earright.style.transform = "translate(0, 0) rotate(0deg)";
    mouth.style.height = "8px";
    tongue.style.transform = "scale(0) translateX(-50%)";
});
setInterval(() => {
    eyeleft.style.transform = "scaleY(0)";
    eyeright.style.transform = "scaleY(0)";

    setTimeout(() => {
        eyeleft.style.transform = "scaleY(1)";
        eyeright.style.transform = "scaleY(1)"; 
    }, 500); // Eyes closed for 500ms
}, 3000); // Blink every 10 seconds
loginf.addEventListener('submit', (e) => {
    e.preventDefault();

   if (emailfield.value.trim() === '' || passwordfield.value.trim() === '') {
        // Funny Error Alert
        Swal.fire({
            icon: "warning",
            title: "Hold your bamboo! 🎋",
            text: "The Panda can't let you in without a username and password. Don't leave him hanging!",
            background: '#1e1b4b',
            color: '#ffffff',
            confirmButtonColor: '#a855f7', // Purple
            confirmButtonText: "My bad, let me fix it!",
            showClass: {
                popup: 'animate__animated animate__shakeX' // Adding a shake effect
            }
        });
    } else {
        // Funny Success Alert
        Swal.fire({
            icon: "success",
            title: "Access Granted! 🐼✨",
            text: "Panda is happy! Rolling you into the system...",
            background: '#1e1b4b',
            color: '#ffffff',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true, 
        });    

        
        setTimeout(() => {
    
            document.querySelector('.max-w-sm').innerHTML = `
                <div class="text-center py-10">
                    <h1 class="text-3xl font-bold text-cyan-400 mb-4 animate-bounce">Welcome! 🐼🚀</h1>
                    <p class="text-gray-300">Aapka dashboard tayyar hai.</p>
                </div>
            `;
        }, 1600);
    }
});
