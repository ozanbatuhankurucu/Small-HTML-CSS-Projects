import React, { useState } from 'react'
import DropdownWithSearch from './DropdownWithSearch'
import { AccordionOption, Option } from './types'

const ACCORDION_OPTIONS: AccordionOption[] = [
  {
    key: '232',
    accordionTitle: 'MACO',
    options: [
      {
        key: '32',
        label: 'Maco by Suggested Order',
        value: 'maco_suggested_order12',
        tooltipDescription: 'Maco by Suggested Order'
      },
      {
        key: '33',
        label: 'Maco Total',
        value: 'maco_total232',
        tooltipDescription: 'Maco Total'
      }
    ]
  },
  {
    key: '21',
    accordionTitle: 'Precision',
    options: [
      {
        key: '34',
        label: 'Weighted Precision',
        value: 'weighted_precision_all_products',
        sectionTitle: 'All Products'
      },
      {
        key: '35',
        label: 'Precision at 1',
        value: 'precision_at_1_all_products',
        sectionTitle: 'All Products'
      },
      {
        key: '36',
        label: 'Precision at 2',
        value: 'precision_at_2_all_products',
        sectionTitle: 'All Products'
      },
      {
        key: '37',
        label: 'Weighted Precision',
        value: 'weighted_precision_top_10_products',
        sectionTitle: 'Top 10 Products'
      },
      {
        key: '38',
        label: 'Precision at 1',
        value: 'precision_at_1_top_10_products',
        sectionTitle: 'Top 10 Products'
      }
    ]
  }
]

const NON_ACCORDION_OPTIONS: Option[] = [
  {
    key: '1',
    label: '% View to Added',
    value: 'percent_view_to_added1'
  },
  {
    key: '2',
    label: 'Net Revenue 1',
    value: 'net_revenue2'
  },
  {
    key: '3',
    label: '% View to Added 2',
    value: 'percent_view_to_added3'
  }
]

const DEFAULT_OPTION: Option = {
  key: '0',
  label: 'Net Revenue 5',
  value: 'net_revenue6'
}
const SearchDropdown = () => {
  const [selectedMetric, setSelectedMetric] = useState(DEFAULT_OPTION)
  return (
    <div>
      <DropdownWithSearch
        accordionOptions={ACCORDION_OPTIONS}
        nonAccordionOptions={NON_ACCORDION_OPTIONS}
        value={selectedMetric}
        onChange={setSelectedMetric}
        searchPlaceholder='Search metric'
      />
    </div>
  )
}

export default SearchDropdown
