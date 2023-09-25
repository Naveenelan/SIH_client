import React, { useState } from 'react'
import img from '../assets/login.png'
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [domain, setDomain] = useState('');
    const [stream, setStream] = useState('');
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
            'http://localhost:2001/register', {
            method: "post",
            body: JSON.stringify({ email, password, domain, stream }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        if (result) {
            alert("Data saved succesfully");
        }

    }
    return (
        <> <div className='flex w-screen h-screen overflow-y-hidden'>
            <div className=' w-1/2 h-full'>
                <img src={img} alt="" className='my-32 absolute h-3/5' />
                <div className='h-full w-1/3 bg-[#4461F2]' />
            </div>
            <div className='flex w-1/2 h-full items-center justify-center'>
                <form >
                    <input type="text" value={email} placeholder='Enter Email' onChange={e => setEmail(e.target.value)} className='bg-[#EAF0F7] text-xl px-20 py-3 my-4 rounded-lg w-full focus:outline-none' />
                    <br />
                    <input type="text" value={password} placeholder='Enter Password' onChange={e => setPassword(e.target.value)} className='bg-[#EAF0F7] text-xl px-20 py-3 my-4 rounded-lg focus:outline-none' />
                    <br />
                    <input type="text" value={password} placeholder='Confrim Password' onChange={e => setPassword(e.target.value)} className='bg-[#EAF0F7] text-xl px-20 py-3 my-4 rounded-lg focus:outline-none' />
                    <br />
                    <select placeholder="Name" class="bg-[#EAF0F7] text-xl p-24 py-3 my-4 rounded-lg focus:outline-none" onChange={e => setStream(e.target.value)} >
                        <option value="">Select Stream</option>
                        <option value="startUps">StartUps</option>
                        <option value="investors">Investors</option>
                        <option value="knowledge partner">knowledge partner</option>

                    </select>
                    <br />
                    <input type="text" value={domain} placeholder='Domain' onChange={e => setDomain(e.target.value)} className='bg-[#EAF0F7] text-xl px-20 py-3 my-4 rounded-lg focus:outline-none' />
                    <br />
                    <input type="button" value="login" className='bg-[#4461F2] text-xl px-6 py-3 font-bold my-12 rounded-lg w-full text-white shadow-xl cursor-pointer hover:shadow-[#4461f280]' onClick={handleOnSubmit} />
                </form>
            </div>
        </div></>
    )
}

export default Login