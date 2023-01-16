
export const ModalSession = () => {
    return(
        <>
            <p className="text-lg">Sessão expirada</p>
            <hr />
            <span>Faça o login novamente para continuar a utilizar o sistema.</span>
            <a href="/login" className="bg-blue-400 py-1 rounded hover:bg-blue-500 text-center transition-colors px-4">Fazer login</a>
          
        </>
    )
}