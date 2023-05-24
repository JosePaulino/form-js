function Enviar() {
  let local = ""
  let data = ""
  let telefone = ""
  var nome = document.getElementById('nomeid')
  var nome = document.getElementById('data')
  var nome = document.getElementById('telefone)
  var nome = document.getElementById('local')

  if (nome.value != '') {
    alert(
      'Obrigado Sr(a) ' +
        nome.value +
        ' os seus dados foram encaminhados com sucesso'
    )
  }
}
