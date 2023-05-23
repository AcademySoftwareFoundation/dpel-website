// Sorts the order of the cards on the home page
export function sortCards(cards) {
  let sortedCards = cards.sort(
    (a, b) => (
      a.frontmatter.order > b.frontmatter.order) ? 1 
      : (a.frontmatter.order < b.frontmatter.order) ? -1 
      : 0 );

  return sortedCards;
}