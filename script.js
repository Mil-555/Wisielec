let pass=prompt('Podaj hasło')
pass=pass.toLocaleUpperCase()
let literyBledne=[]
console.log(pass)
let zgadnij=''
for(const znak of pass){
    if(znak==' '){
        zgadnij=zgadnij+' '
    }
    else{
        zgadnij=zgadnij+'_'
    }
}
console.log(zgadnij)
document.getElementById('nazwa').innerHTML=zgadnij
let wartosc=document.getElementById('znak')
let wzor=/^[A-Z]$/
let button=document.querySelector('input[type=button]')
button.addEventListener('click',function(){
    console.log(wartosc.value)
    let z=wartosc.value.toLocaleUpperCase()
    console.log(z)
    if(!wzor.test(z)){
        alert('BŁĘDNY ZNAK')
        return 0
    }
    listazgadnij=zgadnij.split('')
    listapass=pass.split('')
    let czyzgadles=false
    for(let i=0;i<pass.length;i++){
        if(listapass[i]==z){
            listazgadnij[i]=z
            czyzgadles=true
        }
    }
    zgadnij=listazgadnij.join('')
    document.getElementById('nazwa').innerHTML=zgadnij
    if(!czyzgadles){
        literyBledne.push(z)
    }
    console.log(literyBledne)
    document.getElementById('bledy').innerHTML=literyBledne
    console.log(literyBledne.length)
    if(literyBledne.length<=11&&literyBledne.length>0){
        document.getElementById('szubienica').src=`szubienica/${literyBledne.length}.png`
    }
    if(literyBledne.length>=11){
        document.getElementById('losewin').innerHTML='PRZEGRAŁEŚ'
    }
    if(zgadnij.includes("_")==false){
        document.getElementById('losewin').innerHTML='WYGRAŁEŚ'
    }
})