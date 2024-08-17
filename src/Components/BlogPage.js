import React from 'react'
import image from "../Asset/Computer Franchisee Banner.png"

export default function BlogPage() {
  return (
    <>
        <div className="container text-dark pt-4 mt-4">
          <div className="image w-100 border">
            <img src={image} alt=""  style={{ width: '60%', height: '10%'}}/>
          </div>
        </div>
    </>
  )
}
