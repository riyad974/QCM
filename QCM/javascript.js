const reponses = {
  q1: "B",
  q2: "B"
};

const explications = {
  q1: {
    A: "Les antibiotiques oraux seuls ne sont pas recommandés en première intention, ils s’utilisent plutôt en cas d'acné sévère ou résistante.",
    B: "Correct ! Le traitement de première intention combine un rétinoïde topique et du peroxyde de benzoyle pour agir efficacement contre l'acné modérée.",
    C: "L'isotrétinoïne orale est réservée aux formes sévères d'acné à risque cicatriciel."
  },
  q2: {
    A: "L'exposition au froid n’est pas une cause reconnue du mélanome.",
    B: "Correct ! L’exposition aux rayons ultraviolets est la principale cause du mélanome cutané.",
    C: "La carence en vitamine D n’est pas une cause du mélanome."
  }
};

function corrigerQuestion(q) {
  const selected = document.querySelector(`input[name="${q}"]:checked`);
  if (!selected) {
    alert("Veuillez sélectionner une réponse.");
    return;
  }

  // Afficher la correction pour chaque proposition
  for (const val of ["A", "B", "C"]) {
    const expDiv = document.getElementById(`${q}-${val}`);
    expDiv.textContent = explications[q][val];
    if (val === reponses[q]) {
      expDiv.className = "explanation correct";
    } else {
      expDiv.className = "explanation wrong";
    }
  }
}
