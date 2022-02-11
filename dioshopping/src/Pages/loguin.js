import React from 'react';




const Formul = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

    };
    
    return (
        
        <form onSubmit={handleSubmit}>
         <p>Login: <input type="text" name="Usuário" placeholder="Digite seu usuário"/></p>
         <p>Senha: <input type="text" name="Senha" placeholder="Digite sua senha"/></p>
            
        </form>
        
    )
}
export default Formul;