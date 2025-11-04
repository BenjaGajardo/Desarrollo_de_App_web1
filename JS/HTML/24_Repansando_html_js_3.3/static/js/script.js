/* ====== CAMBIO DE PESTAÑAS ====== */
const tabs = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));
    tab.classList.add("active");
    document.querySelector(tab.dataset.target).classList.add("active");
  });
});

/* ====== EJERCICIO 1: REGISTRO ====== */
const formRegistro = document.getElementById("formRegistro");
const resRegistro = document.querySelector("#registro .resultado");
const errRegistro = document.querySelector("#registro .error");
const resumenRegistro = document.querySelector("#registro .resumen");
const btnLimpiarRegistro = document.getElementById("btnLimpiarRegistro");

let registros = [];

formRegistro.addEventListener("submit", (e) => {
  e.preventDefault();
  errRegistro.textContent = "";
  resRegistro.textContent = "";

  const nombre = document.getElementById("nombre").value.trim();
  const edad = Number(document.getElementById("edad").value);
  const curso = document.getElementById("curso").value;
  const jornada = document.querySelector('input[name="jornada"]:checked');
  const acepta = document.getElementById("aceptaReglamento").checked;

  if (nombre.length < 2) {
    errRegistro.textContent = "El nombre debe tener al menos 2 caracteres.";
    return;
  }
  if (isNaN(edad) || edad < 14 || edad > 100) {
    errRegistro.textContent = "La edad debe estar entre 14 y 100 años.";
    return;
  }
  if (!curso) {
    errRegistro.textContent = "Debe seleccionar un curso.";
    return;
  }
  if (!jornada) {
    errRegistro.textContent = "Debe seleccionar una jornada (Mañana o Tarde).";
    return;
  }
  if (!acepta) {
    errRegistro.textContent = "Debe aceptar el reglamento para continuar.";
    return;
  }

  const nombreNormalizado = nombre
    .split(" ")
    .filter(p => p)
    .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
    .join(" ");

  const nuevo = { nombre: nombreNormalizado, edad, curso, jornada: jornada.value };
  registros.push(nuevo);

  resRegistro.textContent = `Bienvenido/a ${nombreNormalizado}, ${edad} años, del curso ${curso} - Jornada ${jornada.value}.`;

  const maniana = registros.filter(r => r.jornada === "Mañana").length;
  const tarde = registros.filter(r => r.jornada === "Tarde").length;
  resumenRegistro.textContent = `Registrados: ${maniana} en Mañana, ${tarde} en Tarde.`;
});

btnLimpiarRegistro.addEventListener("click", () => {
  formRegistro.reset();
  resRegistro.textContent = "";
  errRegistro.textContent = "";
  resumenRegistro.textContent = "";
});

/* ====== EJERCICIO 2: PROMEDIO ====== */
const notaInput = document.getElementById("nota");
const btnAgregar = document.getElementById("btnAgregar");
const btnPromedio = document.getElementById("btnPromedio");
const btnEliminar = document.getElementById("btnEliminar");
const btnLimpiarNotas = document.getElementById("btnLimpiarNotas");
const resNotas = document.querySelector("#promedio .resultado");
const errNotas = document.querySelector("#promedio .error");

let notas = [];

btnAgregar.addEventListener("click", () => {
  errNotas.textContent = "";
  const valor = parseFloat(notaInput.value);

  if (isNaN(valor) || valor < 1.0 || valor > 7.0) {
    errNotas.textContent = "Debe ingresar una nota válida entre 1.0 y 7.0.";
    return;
  }

  notas.push(valor);
  resNotas.textContent = `Notas actuales: ${notas.join(", ")}`;
  notaInput.value = "";
  notaInput.focus();
});

btnPromedio.addEventListener("click", () => {
  errNotas.textContent = "";
  if (notas.length === 0) {
    errNotas.textContent = "No hay notas registradas para calcular.";
    return;
  }

  let suma = 0;
  for (let n of notas) suma += n;
  const promedio = (suma / notas.length).toFixed(2);
  const estado = promedio >= 4.0 ? "Aprobado ✅" : "Reprobado ❌";

  resNotas.textContent = `Total: ${notas.length} notas → [${notas.join(", ")}]. 
  Promedio: ${promedio} → ${estado}`;
});

btnEliminar.addEventListener("click", () => {
  if (notas.length === 0) {
    errNotas.textContent = "No hay notas para eliminar.";
    return;
  }
  notas.pop();
  resNotas.textContent = `Notas actuales: ${notas.join(", ") || "ninguna"}`;
});

btnLimpiarNotas.addEventListener("click", () => {
  notas = [];
  notaInput.value = "";
  resNotas.textContent = "";
  errNotas.textContent = "";
});
