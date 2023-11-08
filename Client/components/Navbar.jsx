'use client'
import { useEffect, useState } from "react"
import Loader from './Loader'
import cookie from 'js-cookie';
import { useRouter, usePathname } from "next/navigation"
import Login from "./Login";
import Logout from "./Logout"
import { Cookie } from "next/font/google";

export default function Navbar() {
    const [type,setType] = useState('')
    const [get,setGet] = useState('')
    const [token,setToken] = useState(null)
    const [click,setClick] = useState(false)
    const router = useRouter();
    const path = usePathname();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Wrap cookie access in a useEffect to ensure it happens after mount
        const tokenFromCookie = cookie.get('appSession');
    
        if (tokenFromCookie) {
          setToken(tokenFromCookie);
        }
    
        setLoading(false);
      }, []);
    
      useEffect(() => {
        if (token) {
          console.log('TOKEN', token);
        }
      }, [token]);

    const user = [
        {
            'name':'Home',
            'link':'/home'
        },
        {
            'name':"Following",
            'link':'/following'
        }
    ]

    const admin = [
        {
            'name':'Home',
            'link':"/home"
        },
        {
            'name':'Following',
            'link':'/following'
        },
        {
            'name':'Write',
            'link':'/blog/write'
        }
    ]


    return (
        <>
            {
                loading ? <Loader/> : 
                <nav className="bg-white z-10 drop-shadow-2xl p-4 px-32 max-[640px]:px-2 max-[640px]:m-2 text-lg m-5 rounded-md max-[640px]:w-screen text-black">
                    <div className='flex max-[640px]:flex-col'>
                        <a href="/" className='font-helvetica text-2xl text-violet-600 font-bold'>BLOGWARE</a>
                        {
                            type === "admin" 
                            ? 
                            admin.map((item,key) => {
                                return <a href={item.link}
                                    className={key===0 ? path === item.link ? 'bg-violet-400 rounded-full px-5 text-white text-md ml-auto max-[640px]:ml-0 mr-7': ' text-black text-md ml-auto max-[640px]:ml-0 mr-7' : path == item.link ? 'bg-violet-400 rounded-full px-5 text-white text-md max-[640px]:ml-0 mr-7' :'text-black text-md pr-7' } 
                                    key={key}> {item.name}</a>
                            })
                            :
                            type === "user"
                            ?
                            user.map((item,key) => {
                                return <a href={item.link}
                                    className={key===0 ? 'text-black text-md ml-auto max-[640px]:ml-0 mr-7': 'text-black text-md pr-7'} 
                                    key={key}> {item.name}</a>
                            })
                            :
                            user.map((item,key) => {
                                return <a href={item.link}
                                    className={key===0 ? 'text-black text-md ml-auto max-[640px]:ml-0 mr-7': 'text-black text-md pr-7'} 
                                    key={key}> {item.name}</a>
                            })
                        }
                        {token !== null && token !== undefined?
                           <>                           
                                <img 
                                    src="/profile.jpg" 
                                    width={"24px"}
                                    height={"24px"}
                                    alt="Profile picture"
                                    className="rounded-full max-[640px]:my-1"
                                />
                                <button className={'pr-4 pl-3 font-montserrat font-semibold px-3 mx-3 rounded-full text-white bg-violet-600 max-[640px]:w-fit'}><Logout/></button>  
                           </>
                        : 
                            <button onClick={() => setClick(true)} className={'pr-4 pl-3 font-montserrat font-semibold px-3 rounded-full text-white bg-violet-600 max-[640px]:w-fit'}><Login/></button>
                            
                        } 
                        
                    </div>
                </nav>

            }

        </>
    )
}