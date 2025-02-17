function enviarWhatsApp() {
    let telefono = "56962534506"; // Número de destino

    let nombres = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let rut = document.getElementById("rut").value;
    let vehiculo = document.getElementById("vehiculo").value;
    let modelo = document.getElementById("modelo").value;
    let color = document.getElementById("color").value;
    let permiso = document.getElementById("permiso").value;
    let placas = document.getElementById("placas").value;
    let soap = document.getElementById("soap").value;
    let seguroVida = document.getElementById("seguro").value;
    let seguroFull = document.getElementById("full").value;
    let mantenimiento = document.getElementById("mantenimiento").value;
    let combustible = document.getElementById("combustible").value;
    let garantia = document.getElementById("garantia").value;

    let mensaje = `*FORMULARIO DE VENTA AUTOMOTRIZ*\n\n` +
                  `Nombres: ${nombres}\n` +
                  `Apellidos: ${apellidos}\n` +
                  `Rut/Pasaporte: ${rut}\n` +
                  `Tipo de Vehículo: *${vehiculo}*\n` +
                  `Modelo de vehículo: ${modelo}\n` +
                  `Color: ${color}\n` +
                  `Permiso circulación: ${permiso}\n` +
                  `Placas: ${placas}\n` +
                  `Soap: ${soap}\n` +
                  `Seguro de vida: ${seguroVida}\n` +
                  `Seguro full cobertura: ${seguroFull}\n` +
                  `Mantenimiento: ${mantenimiento}\n` +
                  `Combustible: ${combustible}\n` +
                  `Garantía: ${garantia}\n\n` +
                  `⬇️ Aquí tienes tu boleta en PDF ⬇️`;

    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

    // Generar y guardar el PDF de la boleta
    generarBoletaPDF();
}
