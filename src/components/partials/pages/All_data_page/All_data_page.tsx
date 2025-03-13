"use client"

import React from 'react'
import scss from "./All_data_page.module.scss"
// import { useGetDataQuery } from '@/redux/api/data'

const All_data_page = () => {
    // const {data} = useGetDataQuery();
  return (
    <section className={scss.Main}>
        <div className={scss.container_for_datas}>
            {/* {
                data?.map((el) => (
                    <div key={el.id}>
                        <img src={el.images} alt="" />
                        <h1>{el.product_name}</h1>
                    </div>
                ))
            } */}
        </div>
    </section>
  )
}

export default All_data_page