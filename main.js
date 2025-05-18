$(document).ready(function() {
    $('#form-tarefa').on('submit', function(event) {
        event.preventDefault();

        const novaTarefa = $('#nova-tarefa').val().trim();

        if (novaTarefa !== '') {
            const item = $('<li></li>').text(novaTarefa);
            $('#lista-tarefas').append(item);
            $('#nova-tarefa').val('');
        }
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('concluida');
    });
});
