import { MessageCircle, MousePointer2, User, UserRound } from 'lucide-react'
import React from 'react'

function Comment() {
  return (
    <div className='w-[50rem] h-auto gap-6 bg-white'>
      {/* Title */}
      <div className='flex flex-1 items-center gap-3'>
        <MessageCircle className='w-5 fill-red-500 text-red-500' />
        <h1 className='text-lg font-poppinSemi'>Comments</h1>
      </div>
      {/* Comment Form */}
      <div className='p-4 w-[50rem] bg-gray-200 rounded-2xl mt-6'>
        <form>
            <div className='flex flex-row gap-2 p-2'>
              {/* Input Fields  */}
              <div className='flex flex-col gap-4'>
                <input type="text" name='text' placeholder='Your Name' className='border border-gray-400 outline-0 w-[45rem] p-2 rounded-lg' required />
                <textarea className='field-sizing-fixed outline-0 w-[45rem] p-2 rounded-lg border border-gray-400' placeholder='Write a comment ...'/>
              </div>
            </div>
            <div className='flex justify-end mt-2'>
              <button className='flex flex-row gap-3 bg-red-600 px-4 py-2 rounded-lg text-white text-sm items-center'>
                <MousePointer2 className='w-5 fill-white' />Post Comment
              </button>
            </div>
        </form>
      </div>
      {/* Comment VIew Section */}
      <div className='mt-10 w-full h-auto bg-white hover:shadow-lg border border-slate-400  p-4 rounded-lg'>
        {/* Single Comment */}
        <div className='flex flex-col gap-2  pb-4 mb-4'>
          <div className='flex items-center gap-3'>
            <div className='flex items-center justify-center rounded-full bg-gray-400 w-10 h-10'>
              <UserRound className='fill-gray-200 text-gray-200' />
            </div>
            <div>
              <h3 className='font-semibold'>John Doe</h3>
              <p className='text-xs text-gray-500'>2 hours ago</p>
            </div>
          </div>
          <div className='pl-12'>
            <p className='text-gray-700'>This is a great article! I really enjoyed reading it and learned a lot. Looking forward to more content like this.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment;