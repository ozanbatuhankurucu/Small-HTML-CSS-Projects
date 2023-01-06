export const isLabelIncludesSearchQuery = (
  label: string,
  searchQuery: string
) => {
  return label.toLowerCase().includes(searchQuery.toLowerCase())
}
