import { Search } from 'lucide-react'
import React from 'react'

const SearchInput = () => {
  return (
    <div className='flex flex-row justify-between items-center gap-2'>
        <div>
            <legend className="fieldset-legend text-lg" ><Search size={17} />Find</legend>
        </div>
        <div>
            <input type="text" className="input text-sm w-[300px]" placeholder="Employee code and Client code" />
        </div>       
    </div>
  )
}

export default SearchInput