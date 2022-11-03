let isIgnate = false

function changeCard(event) {
  const card = event.currentTarget
  const backgroundImage = isIgnate
    ? "url(./assets/bg-explorer.svg)"
    : "url(./assets/bg-ignite.svg)"
  isIgnate = !isIgnate //Altera o valor para falso, nega o valor
  card.style.backgroundImage = backgroundImage
}
