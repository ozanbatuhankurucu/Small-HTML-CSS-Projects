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
        value: 'maco_suggested_order',
        tooltipDescription: 'Maco by Suggested Order'
      },
      {
        label: 'Maco Total',
        value: 'maco_total',
        tooltipDescription: 'Maco Total'
      }
    ]
  },
  {
    label: '% View to Added',
    value: 'percent_view_to_added'
  },
  {
    label: 'Net Revenue',
    value: 'net_revenue'
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
      />
    </div>
  )
}

export default DadJokes
