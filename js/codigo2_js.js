function diasemana()
{
    dia = parseInt(document.fomulario.caja.value);
    switch(dia)
    {
      case 1:
         document.fomulario.repuesta.value = "lunes"
         break;
      case 2:
         document.fomulario.repuesta.value = "Martes"
         break;
      case 3:
         document.fomulario.repuesta.value = "Miercoles"
         break;
      case 4:
         document.fomulario.repuesta.value = "Jueves"
         break;
      case 5:
         document.fomulario.repuesta.value = "Viernes"
         break;
      case 6:
         document.fomulario.repuesta.value = "Sabado"
         break;
      case 7:
         document.fomulario.repuesta.value = "Domingo"
         break;
      default:
         document.fomulario.repuesta.value = "No es un dia de la semana"

    }
}