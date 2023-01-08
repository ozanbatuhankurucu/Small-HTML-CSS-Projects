export const isLabelIncludesSearchQuery = (
  label: string,
  searchQuery: string
) => label.toLowerCase().includes(searchQuery.toLowerCase())
