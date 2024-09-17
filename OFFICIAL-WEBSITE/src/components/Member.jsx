import { FaLinkedin } from 'react-icons/fa';

export default function Member({member}) {
  return (
    <div className='flex flex-col items-center mx-auto p-2' >
        <img src={member.imageUrl} alt="team" className=" h-100 object-cover"/>
        <div className=" -mt-8 w-full p-2 ">
            <div className='flex flex-row  bg-white rounded-lg items-center shadow-lg p-2'>
                <div className='flex flex-col'>
                    <h3 className='text-gray-500'>{member.role}</h3>
                    <h2>{member.name}</h2>     
                </div>
                <FaLinkedin className="text-[#B0610F] text-2xl ml-auto "/>
            </div>                                        
        </div>                                    
    </div>
  )
}
