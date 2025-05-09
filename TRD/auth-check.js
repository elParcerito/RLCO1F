// auth-check.js: verifica que haya un usuario autenticado en Firebase
firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    // No hay usuario autenticado: redirige a la página de inicio
    window.location.replace('../../index.html');
  }
});
