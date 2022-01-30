$("input#email").focusout(function (event) {
  var target = (event.currentTarget) ? event.currentTarget : event.srcElement;
  var email = target.value;
  
  var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  var retorno = regex.test(email);
  var mensagem = document.getElementById("msgEmail");

  if(!retorno) {
    target.classList.add("is-invalid");
    mensagem.attributes.removeNamedItem("hidden");
  }
  else {
    target.classList.remove("is-invalid");
    mensagem.setAttribute("hidden", "true");
  }
});

$("input#telefone").mask("(99) 9999-9999?9").focusout(function (event) {  
    var target, phone, element;  
    target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
    phone = target.value.replace(/\D/g, '');
    element = $(target);  
    element.unmask();  
    if(phone.length > 10) {  
        element.mask("(99) 99999-999?9");  
    } else {  
        element.mask("(99) 9999-9999?9");  
    }  
});

$(".field input, .field textarea, .field select").focusin(function () {
  var $this = $(this),
    $field = $this.parents(".field");

  if (!$field.hasClass("active")) {
    $field.addClass("active");
  }
});

$(".field input, .field textarea, .field select").focusout(function () {
  var $this = $(this),
    $field = $this.parents(".field");

  if ($this.val().length == 0) {
    $field.removeClass("active");
  }
});

$("#formContato").submit(function () {
  alert("Formulário enviado com sucesso");
});