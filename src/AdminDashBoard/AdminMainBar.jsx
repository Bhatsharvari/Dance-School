import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminMainBar = () => {
  return (
  <>
      <section>
        <article>
            <Outlet/>   used in parent route element to render their child route element
        </article>
      </section>
  </>
  )
}

export default AdminMainBar