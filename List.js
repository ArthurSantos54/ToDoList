

const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e)=>{
    (e.key === 'Enter' ? addList(e): null);
});

function addList(e){
    const notCompleted = document.querySelector('.notCompleted');
    const Completed = document.querySelector('.completed');
    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');

    checkBtn.innerHTML = '<i id="check" class="fa fa-check"></i>';
    delBtn.innerHTML = '<i id="trash" class="fa fa-trash"></i>';    
    
    if(input.value !== ''){   
        newLi.textContent = input.value;  
        input.value="";           
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);      
    };

    checkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkBtn.style.display = 'none';
     
    });

    delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    });
};






