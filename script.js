function openPlayerDetails(name, photo, matches, goals, assists) {
    // Actualizamos los detalles en el modal
    document.getElementById("player-name").innerText = name;
    document.getElementById("player-photo").src = photo;
    document.getElementById("player-matches").innerText = matches;
    document.getElementById("player-goals").innerText = goals;
    document.getElementById("player-assists").innerText = assists;

    // Mostramos el modal
    document.getElementById("player-modal").style.display = "flex";
}

function closePlayerDetails(event) {
    // Cerramos el modal al hacer clic fuera de la ventana de detalles
    if (event.target === document.getElementById("player-modal")) {
        document.getElementById("player-modal").style.display = "none";
    }
}
