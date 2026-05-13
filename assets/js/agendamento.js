const formLayout = document.getElementById("form-layout");

formLayout.addEventListener('submit', function(e){
   e.preventDefault();

   const nome = formLayout.querySelector('[name="nome"]').value;
   const telefone = formLayout.querySelector('[name="telefone"]').value;
   const data = formLayout.querySelector('[name="data"]').value;
   const horario = formLayout.querySelector('[name="horario"]').value;
   const servico = formLayout.querySelector('[name="servico"]').value;
   const mensagem = formLayout.querySelector('[name="mensagem"]').value;

  if(!nome || !telefone || !data || !horario || !servico) {
        Swal.fire({
        icon: 'warning',
        title: 'Atenção!',
        text: 'Por favor, preencha todos os campos obrigatórios!',
        confirmButtonText: 'Ok, entendi',
        confirmButtonColor: '#F3BA25',
        background: '#1a1a1a',
        color: '#ffff'
    });
      return;
  }
   
    const dataFormatada = data.split('-').reverse().join('/');

    const horarioAlmoço = horario >= '12:00' && horario <= '13:00';

    if(horarioAlmoço) {

    Swal.fire({
        icon: 'error',
        title: 'Horário indisponível!',
        text: 'Das 12h às 13h é horário de almoço. Escolha outro horário.',
        confirmButtonText: 'Escolher outro horário',
        confirmButtonColor: '#c9a84c',
        background: '#1a1a1a',
        color: '#ffffff'
    });

       return;
    }

const msgWhatsApp = `

🗓️ NOVO AGENDAMENTO - BARBER SHOP

👤 Nome: ${nome}
📱 Telefone: ${telefone};
📅 Data: ${dataFormatada};
🕐 Horário ${horario};
✂️ Serviço: ${servico};
💬 Observação: ${mensagem || 'Nenhuma'}
`;

const numeroWhatsApp = '5524992630568';
const msgCodificada = encodeURIComponent(msgWhatsApp);
const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${msgCodificada}`;


Swal.fire({
    icon: 'success',
    title: 'Agendamento enviado!',
    text: 'Você será redirecionado para o WhatsApp.',
    confirmButtonText: 'Ok!',
    confirmButtonColor: '#c9a84c',
    background: '#1a1a1a',
    color: '#ffffff'
}).then(function() {
    window.open(linkWhatsApp, '_blank');
});

});