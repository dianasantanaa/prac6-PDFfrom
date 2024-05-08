function generatePDF(){
    //crea una instancia de jsPDF
    var doc = new jsPDF();

    // Configuración de margen
    var margin = 10; // Margen en píxeles
    var pageWidth = doc.internal.pageSize.width;
    var pageHeight = doc.internal.pageSize.height;
    doc.rect(margin, margin, pageWidth - 2 * margin, pageHeight - 2 * margin); // Dibuja el rectángulo del margen

     // Configurar la marca de agua
     doc.setFontSize(40); // Tamaño de fuente grande para la marca de agua
     doc.setTextColor(200, 200, 200); // Color gris claro para la marca de agua
     var watermark = 'DBSA';
     var x = doc.internal.pageSize.width / 2;
     var y = doc.internal.pageSize.height / 2;
     doc.text(watermark, x, y, { align: 'center'}); // Centrar y rotar la marca de agua
 
     // Restablecer las configuraciones para el texto normal
     doc.setTextColor(0, 0, 0); // Color negro para el texto
     doc.setFontSize(16); // Tamaño de la fuente para el texto
 
    //obtener los datos del formulario
    var fname = document.getElementById("fname").value;
    var lname =document.getElementById("lname").value;
    var email= document.getElementById("email").value;
    var rfc =document.getElementById("rfc").value;

    //Agregar los elementos al pdf
    doc.text("Datos Registrados Correctamente:", 55,20);
    doc.text("Nombre:"+fname,15,35);
    doc.text("Apellido:"+ lname, 15, 45);
    doc.text("Direccion de Correo Electronico"+ email, 15, 55);
    doc.text("Numero de Registro Federal de" + "Contribuyentes:" + rfc, 15, 65);

    //Guardar el PDF
    doc.save("Formulario.pdf");

}