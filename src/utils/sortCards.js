// Sorts the order of the cards on the home page
export function sortCards(cards) {
  return cards.sort((a, b) =>
    a.data.order > b.data.order ? 1 : a.data.order < b.data.order ? -1 : 0,
  );
}
