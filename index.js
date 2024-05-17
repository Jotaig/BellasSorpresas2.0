
const url = 'https://jsonplaceholder.typicode.com/users';
const tableBody = document.getElementById('data');
const messageTableBody = document.getElementById('data-message');

fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(usuario => {
            // Crear una fila para cada usuario
            const row = document.createElement('tr');

            // Crear celdas para Nombre, Email y Estado Pedido
            const nameCell = document.createElement('td');
            nameCell.textContent = usuario.name;

            const emailCell = document.createElement('td');
            emailCell.innerHTML = `<a href=":${usuario.email}">${usuario.email}</a>`;

            const estadoPedidoCell = document.createElement('td');
            estadoPedidoCell.textContent = "En camino";

            // Agregar celdas a la fila
            row.appendChild(nameCell);
            row.appendChild(emailCell);
            row.appendChild(estadoPedidoCell);

            // Agregar la fila al cuerpo de la tabla
            tableBody.appendChild(row);
        });
    })
.catch(err => console.log(err));

fetch(url)
    .then(res => res.json())
    .then(users => {
        users.forEach(usuario => {
            // Crear una fila para la tabla de mensajes
            const messageRow = document.createElement('tr');

            // Crear celdas para Nombre y Mensaje Personalizado
            const messageNameCell = document.createElement('td');
            messageNameCell.textContent = usuario.name;

            const mensajeCell = document.createElement('td');
            mensajeCell.textContent = `El pedido va hacia ${usuario.name}`;

            // Agregar celdas a la fila
            messageRow.appendChild(messageNameCell);
            messageRow.appendChild(mensajeCell);

            // Agregar la fila al cuerpo de la tabla de mensajes
            messageTableBody.appendChild(messageRow);
        });
    })
.catch(err => console.log(err));


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()




const nombre = document.getElementById("name")
const telefono = document.getElementById("telefono")
const email = document.getElementById("email")
const pais = document.getElementById("pais")
const ciudad = document.getElementById("ciudad")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const successMessage = document.getElementById("success-message")

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\. -]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    let regexTelefono = /^[0-9]+$/

    if (nombre.value.length < 3) {
        warnings += 'El Nombre no es valido.<br>'
        entrar = true
    }
    if (!regexTelefono.test(telefono.value)) {
        warnings += 'El Numero de telefono no es valido.<br>'
        entrar = true
    }
    if (!regexEmail.test(email.value)) {
        warnings += 'El Email no es valido.<br>'
        entrar = true
    }
    if (pais.value.length < 3) {
        warnings += 'El pais no es valido.<br>'
        entrar = true
    }
    if (ciudad.value.length < 3) {
        warnings += 'La ciudad no es valida.<br>'
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnings
        successMessage.style.display = 'none';
    } else {
        parrafo.innerHTML = "";
        successMessage.innerHTML = "Se han agregado todos los campos correctamente.";
        successMessage.style.display = 'block';
    }
})

