import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import NavbarAdmin from '../../Components/Navbar/NavbarAdmin'
import { ADMIN_KEY } from '../../Constants/Constants'

const DashboardAdmin = () => {
    const params = new URLSearchParams(useLocation().search)
    const navigate = useNavigate()

    useEffect(() => {
        if(params.get('key')){
            if(params.get('key') !== ADMIN_KEY){
                navigate('/')
            }
        } else {
            navigate('/')
        }
    },[])

    return (
        <div className='layout background flex items-center justify-center max-[1000px]:flex-col'>
            <NavbarAdmin />
            <div className='w-full flex items-center justify-between flex-col'>
                <Outlet />
                {/* <footer>footer</footer> */}
            </div>
        </div>
    )
}

export default DashboardAdmin;