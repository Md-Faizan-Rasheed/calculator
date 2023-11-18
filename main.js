// const gnerateMemeBtn=document.querySelector(
//     ".meme-generator.generate-meme-btn"
// )

// ********************MEME GENERATOR USING J.S*******************
// const generateMemeBtn=document.querySelector(".generate-meme-btn ");
// const memeImage=document.querySelector(".image");
// const memeTitle=document.querySelector(".meme-title");
// const btn=document.querySelector(".button");
// const parent=document.querySelector(".wrapper");



// const updateDatails = (url,title,author) => {
//     memeImage.setAttribute("src",url);
//     memeTitle.innerHTML = title;
//     memeTitle.innerHTML = `Meme by:${author}`;
// };

// const generateMeme = () => {
//     fetch("https://meme-api.com/gimme/wholesomememes")
//     .then((response) => response.json())
//     .then((data) => {
//             updateDatails(data.url , data.title , data.author);
//         })
//     // .catch((error) => {
//     //     console.error("Error fetching meme:",error);
//     // })   
// };
// generateMemeBtn.addEventListener("click",generateMeme);
// generateMeme();
// const changecolor = () =>{
//     parent.style.backgroundColor='pink';
// }
//  btn.addEventListener("click",changecolor);

let string = " ";
let buttons=document.querySelectorAll('.btne');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value =string;
        }
       else if(e.target.innerHTML == 'C'){
            string = " ";
            document.querySelector('input').value =string;
        }
        // else if(e.target.innerHTML == 'M+'){

        // }
        else{
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        if(e.target.innerHTML == 'M+'){
            string =string ;
        }
        }
    })
})


