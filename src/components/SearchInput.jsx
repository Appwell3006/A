import { Search } from 'lucide-react'
import React from 'react'

const SearchInput = () => {
  return (
    <div className='flex flex-row justify-between items-center gap-2'>
        <div>
            <legend className="fieldset-legend text-sm sm:text-lg" ><Search size={16} />Find</legend>
        </div>
        <div>
            <input type="text" className="input text-[13px] w-[200px] sm:w-[300px] sm:text-sm " placeholder="Employee code and Client code" />
        </div>       
    </div>
  )
}

export default SearchInput