document.getElementById('aguinaldoForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const sueldo = parseFloat(document.getElementById('sueldo').value);
  const mes = document.getElementById('mes').value;
  const trabajoCompleto = document.getElementById('trabajoCompleto').checked;

  if (isNaN(sueldo) || sueldo <= 0) {
    alert('Por favor ingresa un sueldo válido.');
    return;
  }

  let aguinaldo = sueldo * 0.5;

  if (!trabajoCompleto) {
    const meses = prompt('¿Cuántos meses completos trabajó en el semestre? (1-6)');
    const mesesNum = parseInt(meses);
    if (mesesNum >= 1 && mesesNum <= 6) {
      aguinaldo = (sueldo * 0.5) * (mesesNum / 6);
    } else {
      alert('Meses inválidos. Se usará cálculo proporcional por defecto (3 meses).');
      aguinaldo = (sueldo * 0.5) * (3 / 6);
    }
  }

  const bruto = aguinaldo.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const neto = (aguinaldo * 0.75).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  document.getElementById('bruto').textContent = "$" + bruto;
  document.getElementById('neto').textContent = "$" + neto;
  document.getElementById('resultado').style.display = 'block';
});