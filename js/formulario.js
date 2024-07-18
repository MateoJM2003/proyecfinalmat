const validarFormulario = ()=>{
    let nombre = document.querySelector('#nombre').value;
    let apellido = document.querySelector('#apelldio').value;
    let cedula = document.querySelector('#cedula').value;

    let email = document.querySelector('#email').value; 
    let password = document.querySelector('#password').value; 
    let confirmarPassword = document.querySelector('#confirmar-password').value; 

    let errores = [];

    if(nombre === ""){
        errores.push("El nombre es obligatorio"); 

    } 

    if(apellido === ""){
        errores.push("El apellido es obligatorio"); 

    } 

    if(!validarCedula(cedula)){
        errores.push("El email no es valido");
    

    }

    if(!validarEmail(email)){
        errores.push("El email no es valido");
    } 

    if(password.length< 6){
        errores.push("La longitud de la contraseña no es valida"); 
    }

    if(!validarPassword(password)){
        errores.push("La contraseña debe tener al menos una letra minuscula, una letra mayuscula y un numero ");
    } 

    if(password!==confirmarPassword) {
        errores.push('contraseña no coinciden');
    }

    if(errores.length>0){
        mostrarErrores(errores); 
    
    }
    return true; 


} 



const validarCedula =()=>{
    let regexCedula= /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //expresion regular 
    return regexCedula.test(cedula); 
} 




const validarEmail =()=>{
    let regexEmail= /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //expresion regular 
    return regexEmail.test(email); 
} 


const validarPassword = (password) =>{
    let regexPassword= /^(?=.[a-z])(?=.[A-Z])(?=.*\d).{6,}$/; 
    return regexPassword.test(password); 


} 
const mostrarErrores =(errores)=>{
    let mensaje = "";
    for(let i=0; i<errores.length; i++){
        mensaje += "*" +errores(i)+ "\n"
    }
    alert(mensaje);
}