document.getElementById("encuesta-form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  const res = await fetch("https://lfnvsfrxqltwbrbmnxtc.supabase.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmbnZzZnJ4cWx0d2JyYm1ueHRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwNTkxNzcsImV4cCI6MjA2OTYzNTE3N30.LMyABRhISCTnWZjcFLQfZcZ9V4LkQ0Z9oafjcqaOs78",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmbnZzZnJ4cWx0d2JyYm1ueHRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwNTkxNzcsImV4cCI6MjA2OTYzNTE3N30.LMyABRhISCTnWZjcFLQfZcZ9V4LkQ0Z9oafjcqaOs78"
    },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    alert("Formulario enviado correctamente.");
  } else {
    alert("Error al enviar.");
  }
});

