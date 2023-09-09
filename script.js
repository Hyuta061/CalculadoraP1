
function iniciarCalc() {
  return {
    
    input: document.querySelector('.input'),

    iniciar() {
      this.clickButtons();
      this.clearInput();
      this.delInput();
      this.equalInput();
    },

    clickButtons() {
      btnNum = document.querySelectorAll(".btn-num");
      window.addEventListener('keypress', (e)=>{
        if(Number(e.key) || e.key == 0 || e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/'){
          
          if(this.input.value.length > 22)
          alert("Limite escedido")
        else
          this.btnParaInput(e.key);
        }
      });
      btnNum.forEach((element) => {
        element.addEventListener("click", (e)=> {
            if(this.input.value.length > 22)
              alert("Limite escedido")
            else
              this.btnParaInput(element.innerHTML);
          }); // bind(this) muda o this que antes era referente ao element e passa a se referir ao objeto novamente, mas com ()=> não precisa
      });
    },

    btnParaInput(val){
      this.input.value += val;
    },

    clearInput(){
      document.querySelector('.btn-clear').addEventListener('click', ()=>{
        this.input.value = '';
      })
    },
    
    delInput(){
      window.addEventListener('keydown',(e)=>{
        if(e.key == "Delete" || e.key == 'Backspace'){
          this.input.value = this.input.value.slice( 0, this.input.value.length -1);
        }
      })
      document.querySelector('.btn-del').addEventListener('click',()=>{
        this.input.value = this.input.value.slice( 0, this.input.value.length -1); // estudei essa porra e n lembrei tmnc
      })
    },

    equalInput(){
      window.addEventListener('keydown', (e)=>{
        if(e.key == 'Enter'){
          e.preventDefault();
          let calc = this.input.value;
          try{
            calc = eval(calc);
            if(calc == 0){
              this.input.value = calc; 
              return;
            }
            if(!calc){
              alert("Expressão invalida");
              return;
            }
            this.input.value = calc;
          }catch(err){
            alert("Expressão invalida");
            return; 
          }
        }
      })
      

      document.querySelector('.btn-equals').addEventListener('click',()=>{
        let calc = this.input.value;
        try {
          calc = eval(calc);
          if(calc == 0){
            this.input.value = calc;
            return;
          } 
          if(!calc){
            alert("Expressão Inválida")
            return;
          }
          this.input.value = calc;
        } catch(err){
          alert("Expressão Inválida")
          return;

        }
      })
    }

  };
}
const calc = iniciarCalc();
calc.iniciar();
console.log()