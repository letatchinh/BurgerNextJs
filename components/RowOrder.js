import { Typography } from 'antd'
import React from 'react'

export default function RowOrder({item}) {
    const {order,price} = item
    let txt = ''
    for (const key in order) {
       txt += `${key} (${order[key]}), `
    }
  return (
    <tr>
        <td>
        {txt}
        </td>
        <td>
            <Typography>{price}$</Typography>
        </td>
    </tr>
  )
}
