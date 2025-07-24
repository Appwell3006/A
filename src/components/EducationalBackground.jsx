import React from 'react'

const EducationalBackground = () => {
  return (
    <div className='flex flex-col gap-2 items-center'>
        <div className='flex flex-row sm:flex-row gap-2'>
                    <div>
                        <label className="input w-[450px]">
                            <span className="label">Primary School:</span>
                            <input type="text" placeholder="Type Here" />
                        </label>
                    </div>

                    <div>
                        <label className="input w-[350px]">
                            <span className="label">Date Graduated:</span>
                            <input type="text" placeholder="Type Here" />
                        </label>
                    </div>
        </div>

        <div className='flex flex-row sm:flex-row gap-2'>
                    <div>
                        <label className="input w-[450px]">
                            <span className="label">Secondary School:</span>
                            <input type="text" placeholder="Type Here" />
                        </label>
                    </div>

                    <div>
                        <label className="input w-[350px]">
                            <span className="label">Date Graduated:</span>
                            <input type="text" placeholder="Type Here" />
                        </label>
                    </div>
        </div>

        <div className='flex flex-row sm:flex-row gap-2'>
                    <div>
                        <label className="input w-[450px]">
                            <span className="label">Vocational School:</span>
                            <input type="text" placeholder="Type Here" />
                        </label>
                    </div>

                    <div>
                        <label className="input w-[350px]">
                            <span className="label">Date Graduated:</span>
                            <input type="text" placeholder="Type Here" />
                        </label>
                    </div>
        </div>

        <div className='flex flex-row sm:flex-row gap-2'>
                    <div>
                        <label className="input w-[450px]">
                            <span className="label">Collage:</span>
                            <input type="text" placeholder="Type Here" />
                        </label>
                    </div>

                    <div>
                        <label className="input w-[350px]">
                            <span className="label">Date Graduated:</span>
                            <input type="text" placeholder="Type Here" />
                        </label>
                    </div>
        </div>

        <div>
            <label className="input w-[810px]">
                <span className="label">Course - if undergraduate please indicate the colage years:</span>
                <input type="text" placeholder="Type Here" />
            </label>
        </div>

        <div>
            <label className="input w-[810px]">
                <span className="label">Special skills:</span>
                <input type="text" placeholder="Type Here" />
            </label>
        </div>
    </div>
  )
}

export default EducationalBackground