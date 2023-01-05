import React, { useState } from 'react'
import DropdownWithSearch, { Option } from './DropdownWithSearch'

// {
// 	accordion: true,
// 	accordionTitle: 'Precision',
// 	options: [
// 		{
// 			sectionTitle: 'ALL PRODUCTS',
// 			options: [
// 				{
// 					label: 'Weighted Precision',
// 					value: 'weighted_precision_all_products'
// 				},
// 				{
// 					label: 'Precision at 1',
// 					value: 'precision_at_1_all_products'
// 				},
// 				{
// 					label: 'Precision at 2',
// 					value: 'precision_at_2_all_products'
// 				}
// 			]
// 		},
// 		{
// 			sectionTitle: 'TOP 10 PRODUCTS',
// 			options: [
// 				{
// 					label: 'Weighted Precision',
// 					value: 'weighted_precision_top_10_products'
// 				},
// 				{
// 					label: 'Precision at 1',
// 					value: 'precision_at_1_top_10_products'
// 				}
// 			]
// 		}
// 	]
// },

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

const OPTIONS: Option[] = [
  {
    value: 'metric1',
    label: 'Metric 1'
  },
  {
    value: 'metric2',
    label: 'Netric 2'
  },
  {
    value: 'metric3',
    label: 'Cetric 3'
  },
  {
    value: 'metric4',
    label: 'Getric 4'
  },
  {
    value: 'zetric2',
    label: 'Zetric 2'
  }
]
const DadJokes = () => {
  const [selectedMetric, setSelectedMetric] = useState(OPTIONS[0])
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
