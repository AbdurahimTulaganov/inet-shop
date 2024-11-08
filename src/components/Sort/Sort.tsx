import React, { useState } from 'react'
import Select, { OptionProps } from 'react-select';
import filterStore from '../../store/filterStore';

// interface IOption {
//   value: string,
//   label:string
// }

const Sort = () => {
  const {setSortValue} = filterStore((state)=>state)
  const options = [
    { value: 'price', label: 'По цене' },
    { value: 'rating', label: 'По рейтингу' },
    { value: 'title', label: 'По названию' },
  
  ];
  const [selectedOption, setSelectedoption ] = useState(null)
  const changeOption = (option)=> {
    setSelectedoption(option)
    setSortValue(option.value)
  }
  
  return (
   <Select 
   value={selectedOption}
   options={options}
   placeholder='Сортировать по:'
   onChange={changeOption}
    />
  )
}

export default Sort