import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'


const HomeCards = () => {
  return (
    <section className="py-4">
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
        <h2 className="text-2xl font-bold">For Followers</h2>
          <p className="mt-2 mb-4">
            Browse our Local Events Happening in your Area
          </p>
          <Link
            to="/jobs"
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Browse Parties
          </Link>
        </Card>
        <Card bg='bg-blue-100'>
        <h2 className="text-2xl font-bold">For Venues & DJs</h2>
          <p className="mt-2 mb-4">
            List your Event or Party to be added to the Escandalo & Friends Party Page
          </p>
          <Link
            to="/add-job"
            className="inline-block bg-blue-800 text-white rounded-lg px-4 py-2 hover:bg-blue-500"
          >
            Add Event
          </Link>
        </Card>
      </div>
    </div>
  </section>
  )
}

export default HomeCards
