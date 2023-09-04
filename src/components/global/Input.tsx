import  InputProps  from '../../interface/IInput'

function Input({type, placeholder, id, className, text} : InputProps) {
  return (
    <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={id}>
            {text}
        </label>
        <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline` + className} id={id} type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input