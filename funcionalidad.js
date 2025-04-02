  // Definimos el costo por kWh 
  const COSTO_POR_KWH = 985.70;

  // Función para calcular el costo total del consumo de energía
  function calcularCosto(consumoKwh) {
      return consumoKwh * COSTO_POR_KWH;
  }

  // Función para manejar el envío del formulario
  document.getElementById('formulario').addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe

      try {
          // Obtener los valores del formulario
          let consumoUsuario1 = parseFloat(document.getElementById('consumoUsuario1').value);
          let consumoUsuario2 = parseFloat(document.getElementById('consumoUsuario2').value);
          let subsidio = parseFloat(document.getElementById('subsidio').value);
          let alumbradoAseo = parseFloat(document.getElementById('alumbradoAseo').value);

          // Calcular los costos
          let costoTotalUsuario1 = calcularCosto(consumoUsuario1);
          let costoTotalUsuario2 = calcularCosto(consumoUsuario2);
          let totalSinSubsidio = costoTotalUsuario1 + costoTotalUsuario2;
          let totalConSubsidio = totalSinSubsidio - subsidio;

          // Calcular el porcentaje de consumo de cada usuario
          let consumoTotal = consumoUsuario1 + consumoUsuario2;
          let porcentajeUsuario1 = consumoTotal > 0 ? (consumoUsuario1 / consumoTotal) : 0;
          let porcentajeUsuario2 = consumoTotal > 0 ? (consumoUsuario2 / consumoTotal) : 0;

          // Dividir el subsidio según el porcentaje de consumo
          let subsidioUsuario1 = subsidio * porcentajeUsuario1;
          let subsidioUsuario2 = subsidio * porcentajeUsuario2;

          // Calcular los costos finales para cada usuario
          let costoFinalUsuario1 = costoTotalUsuario1 - subsidioUsuario1;
          let costoFinalUsuario2 = costoTotalUsuario2 - subsidioUsuario2;

          // Calcular el valor de alumbrado público y aseo por usuario
          let alumbradoAseoPorUsuario = alumbradoAseo / 2;

          // Sumar el costo de alumbrado público y aseo a los costos finales
          costoFinalUsuario1 += alumbradoAseoPorUsuario;
          costoFinalUsuario2 += alumbradoAseoPorUsuario;

          // Calcular el costo total final sumando ambos usuarios
          let costoTotalFinal = costoFinalUsuario1 + costoFinalUsuario2;

          // Mostrar los resultados en el HTML
          document.getElementById('costoUsuario1').textContent = `El costo total para el usuario 1 por ${consumoUsuario1} kWh es: $${costoTotalUsuario1.toFixed(2)} COP`;
          document.getElementById('costoUsuario2').textContent = `El costo total para el usuario 2 por ${consumoUsuario2} kWh es: $${costoTotalUsuario2.toFixed(2)} COP`;
          document.getElementById('totalSinSubsidio').textContent = `El costo total sin subsidio para ambos usuarios es: $${totalSinSubsidio.toFixed(2)} COP`;
          document.getElementById('totalConSubsidio').textContent = `El costo total con subsidio es: $${totalConSubsidio.toFixed(2)} COP`;
          document.getElementById('porcentajeUsuario1').textContent = `El porcentaje de consumo del usuario 1 es: ${(porcentajeUsuario1 * 100).toFixed(2)}%`;
          document.getElementById('porcentajeUsuario2').textContent = `El porcentaje de consumo del usuario 2 es: ${(porcentajeUsuario2 * 100).toFixed(2)}%`;
          document.getElementById('subsidioUsuario1').textContent = `El subsidio aplicado al usuario 1 es: $${subsidioUsuario1.toFixed(2)} COP`;
          document.getElementById('subsidioUsuario2').textContent = `El subsidio aplicado al usuario 2 es: $${subsidioUsuario2.toFixed(2)} COP`;
          document.getElementById('alumbradoAseoPorUsuario').textContent = `El valor de alumbrado público y aseo por usuario es: $${alumbradoAseoPorUsuario.toFixed(2)} COP`;
          document.getElementById('costoFinalUsuario1').textContent = `El costo final para el usuario 1, incluyendo alumbrado público y aseo, es: $${costoFinalUsuario1.toFixed(2)} COP`;
          document.getElementById('costoFinalUsuario2').textContent = `El costo final para el usuario 2, incluyendo alumbrado público y aseo, es: $${costoFinalUsuario2.toFixed(2)} COP`;
          document.getElementById('costoTotalFinal').textContent = `El costo total final para ambos usuarios, incluyendo alumbrado público y aseo, es: $${costoTotalFinal.toFixed(2)} COP`;
      } catch (error) {
          alert("Por favor, ingrese un número válido para el consumo, el subsidio o el valor de alumbrado público y aseo.");
      }
  });
