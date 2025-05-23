import React from 'react'
import { useState } from 'react'
import {  useParams, useLoaderData, useNavigate } from 'react-router-dom'

const EditJobPage = ({ updateJobSubmit }) => {

    const job = useLoaderData()
    
        const [title, setTitle] = useState(job.title)
        const [type, setType] = useState(job.type)
        const [location, setLocation] = useState(job.location)
        const [details, setDetails] = useState(job.details)
        const [coverCharge, setCoverCharge] = useState(job.coverCharge)
        const [hostName, setHostName] = useState(job.host.name)
        const [hostDescription, setHostDescription] = useState(job.host.description)
        const [contactEmail, setContactEmail] = useState(job.host.contactEmail)
        const [contactPhone, setContactPhone] = useState(job.host.contactPhone)

        const navigate = useNavigate()
        const {id} = useParams()

        const submitForm = (e) => {
            e.preventDefault() 
     
            const updatedJob = {
             id,
             title,
             type,
             location,
             details,
             coverCharge,
             host: {
                 name: hostName,
                 description: hostDescription,
                 contactEmail,
                 contactPhone,
             },
            }
            
            updateJobSubmit(updatedJob)
     
            return navigate(`/jobs/${id}`)
          
         }
     

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Event</h2>
            {/* title */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Event Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border p-2 rounded"
                  required
                />
            </div>
            {/* Type */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Event Name</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Rooftop Party Downtown"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            {/* Location */}
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Event Location'
                required           
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            {/* details */}
            <div className="mb-4">
              <label
                htmlFor='details'
                className="block text-gray-700 font-bold mb-2"
                >Details</label
              >
              <textarea
                id="details"
                name="details"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add event details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              ></textarea>
            </div>
            {/* coverCharge */}
            <div className="mb-4">
              <label htmlFor='type' className="block text-gray-700 font-bold mb-2"
                >Cover Charge</label
              >
              <input
                id="coverCharge"
                name="coverCharge"
                className="border rounded w-full py-2 px-3"
                placeholder="$ for entry all night"
                required
                value={coverCharge}
                onChange={(e) => setCoverCharge(e.target.value)}
              />
            </div>
            {/* Host Name */}
            <h3 className="text-2xl mb-5">Host Info</h3>

            <div className="mb-4">
              <label htmlFor='host' className="block text-gray-700 font-bold mb-2"
                >Host Name</label
              >
              <input
                type="text"
                id="host"
                name="host"
                className="border rounded w-full py-2 px-3"
                placeholder="host Name"
                value={hostName}
                onChange={(e) => setHostName(e.target.value)}
              />
            </div>
            {/* host description */}
            <div className="mb-4">
              <label
                htmlFor='host_description'
                className="block text-gray-700 font-bold mb-2"
                >Host Description</label
              >
              <textarea
                id="host_description"
                name="host_description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Tell us more about who is throwing this event?"
                value={hostDescription}
                onChange={(e) => setHostDescription(e.target.value)}
              ></textarea>
            </div>
            {/* Contact Email */}
            <div className="mb-4">
              <label
                htmlFor='contact_email'
                className="block text-gray-700 font-bold mb-2"
                >Contact Email</label
              >
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for Host"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            {/* Contact Phone number */}
            <div className="mb-4">
              <label
                htmlFor='contact_phone'
                className="block text-gray-700 font-bold mb-2"
                >Contact Phone</label
              >
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for Host"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default EditJobPage
