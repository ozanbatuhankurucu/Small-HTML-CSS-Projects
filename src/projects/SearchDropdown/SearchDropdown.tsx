import React, { useState } from 'react'
import DropdownWithSearch from './DropdownWithSearch'

const data = [
  {
    key: '1',
    accordion: true,
    accordionTitle: 'MACO',
    options: [
      {
        label: 'Maco by Suggested Order',
        value: 'maco_suggested_order12',
        tooltipDescription: 'Maco by Suggested Order'
      },
      {
        label: 'Maco Total',
        value: 'maco_total232',
        tooltipDescription: 'Maco Total'
      }
    ]
  },
  {
    key: '3',
    accordion: true,
    accordionTitle: 'Precision',
    options: [
      {
        sectionTitle: 'All Products',
        label: 'Weighted Precision',
        value: 'weighted_precision_all_products'
      },
      {
        sectionTitle: 'All Products',
        label: 'Precision at 1',
        value: 'precision_at_1_all_products'
      },
      {
        sectionTitle: 'All Products',
        label: 'Precision at 2',
        value: 'precision_at_2_all_products'
      },
      {
        sectionTitle: 'Top 10 Products',
        label: 'Weighted Precision',
        value: 'weighted_precision_top_10_products'
      },
      {
        sectionTitle: 'Top 10 Products',
        label: 'Precision at 1',
        value: 'precision_at_1_top_10_products'
      }
    ]
  },
  {
    key: '4',
    label: '% View to Added',
    value: 'percent_view_to_added1'
  },
  {
    key: '5',
    label: 'Net Revenue 1',
    value: 'net_revenue2'
  },
  {
    key: '6',
    label: '% View to Added 2',
    value: 'percent_view_to_added3'
  }
]
const DEFAULT_OPTION = {
  label: 'Net Revenue 5',
  value: 'net_revenue6'
}
const DadJokes = () => {
  const [selectedMetric, setSelectedMetric] = useState(DEFAULT_OPTION)
  return (
    <div>
      <DropdownWithSearch
        options={data}
        value={selectedMetric}
        onChange={setSelectedMetric}
        searchPlaceholder='Search metric'
      />
    </div>
  )
}

export default DadJokes
