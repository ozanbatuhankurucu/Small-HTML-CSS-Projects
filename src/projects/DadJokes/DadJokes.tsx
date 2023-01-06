import React, { useState } from 'react'
import DropdownWithSearch from './DropdownWithSearch'

const data = [
  {
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
    accordion: true,
    accordionTitle: '% Orders Influenced',
    options: [
      {
        label: 'Orders Influenced by Suggested Order',
        value: 'maco_suggested_order2342',
        tooltipDescription: 'Orders influenced by Suggested Order'
      },
      {
        label: 'Orders Influenced Total',
        value: 'maco_total252',
        tooltipDescription: 'Orders influenced Total'
      }
    ]
  },
  {
    accordion: true,
    accordionTitle: 'Precision',
    options: [
      {
        sectionTitle: 'All Products',
        options: [
          {
            label: 'Weighted Precision',
            value: 'weighted_precision_all_products'
          },
          {
            label: 'Precision at 1',
            value: 'precision_at_1_all_products'
          },
          {
            label: 'Precision at 2',
            value: 'precision_at_2_all_products'
          }
        ]
      },
      {
        sectionTitle: 'Top 10 Products',
        options: [
          {
            label: 'Weighted Precision',
            value: 'weighted_precision_top_10_products'
          },
          {
            label: 'Precision at 1',
            value: 'precision_at_1_top_10_products'
          }
        ]
      }
    ]
  },
  {
    label: '% View to Added',
    value: 'percent_view_to_added1'
  },
  {
    label: 'Net Revenue 1',
    value: 'net_revenue2'
  },
  {
    label: '% View to Added 2',
    value: 'percent_view_to_added3'
  },
  {
    label: 'Net Revenue 3',
    value: 'net_revenue4'
  },
  {
    label: '% View to Added 4',
    value: 'percent_view_to_added5'
  },
  {
    label: 'Net Revenue 5',
    value: 'net_revenue6'
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
