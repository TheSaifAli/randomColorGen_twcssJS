const mainDiv  = document.querySelector('#mainDiv');

const divs = mainDiv.querySelectorAll('div');

window.addEventListener('load',()=>
{
    const chars = "0123456789abcdef";
    const colorLength=6;

    for(let i =0 ;i<100;i++)
    {
        const div = document.createElement('div');
        div.classList.add('divStyle');
        mainDiv.appendChild(div);
        let colorCode = "";
        for(let j=0;j<colorLength;j++)
        {
        const randomNum = Math.floor(Math.random()*chars.length);
        colorCode +=chars.substring(randomNum,randomNum +1);
        }
        div.innerText=`#${colorCode}`
        div.style.backgroundColor = `#${colorCode}`
       
        div.addEventListener('mouseover',()=>{
            document.querySelector('h1').style.color=`#${colorCode}`
            console.log(`#${colorCode}`);
        })
    }
})

