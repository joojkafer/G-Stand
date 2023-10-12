function sweetError(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuário ou senha incorretos!',
      })
}

function sweetSuccess(){
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Conta criada com sucesso!',
      })
}