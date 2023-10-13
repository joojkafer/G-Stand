function sweetSuccess(){
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Alterações salvas com sucesso!',
      })
}

function sweetLoginSuccess(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
}

function sweetUpload(){
    (async () => {

        const { value: file } = await Swal.fire({
          title: 'Selecionar arquivo',
          input: 'file',
          inputAttributes: {
            'accept': 'image/*',
            'aria-label': 'Selecione o arquivo desejado'
          }
        })
        
        /*if (file) {
          const reader = new FileReader()
          reader.onload = (e) => {
            Swal.fire({
              title: 'Your uploaded picture',
              imageUrl: e.target.result,
              imageAlt: 'The uploaded picture'
            })
          }
          reader.readAsDataURL(file)
        }*/
        
        })()
}

function sweetCancel(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Tem certeza?',
        text: "Se cancelar perderá todos os dados!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {

        }
      })
}

function sweetGerarRelatorio(){
  const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Gerar Relatório',
      text: "Deseja gerar relatório com essas preferências?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

      }
    })
}

