type OrganizedDataItem = {
  label: string
  portfolioPercentage: number
}

export type OrganizedData = {
  [category: string]: OrganizedDataItem
}
