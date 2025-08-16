import React from 'react'
import logo from '../assets/favicon.png'
const SideBar = () => {
  return (
    <>
    
<button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <div className="flex items-center ps-2 mb-5">
         <img src={logo} className="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
         <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MAS Dashboard</span>
      </div>
      <ul className="space-y-2 font-medium">
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span className="ms-3">Home</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              

               <svg className="shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857ZM18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z" clip-rule="evenodd"/>
</svg>

               <span className="flex-1 ms-3 whitespace-nowrap">Netting Status</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            
                <svg className='transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' width="20" height="20" viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path  d="M63.7333963,27.5695 C62.2951019,27.1775 60.1302463,27.990375 59.7804852,27.8775 C59.1219574,27.713875 59.0992797,25.18775 59.0504352,24.233125 C59.0390963,24.024 58.8245297,11.629625 58.6718908,8.561875 C58.5613832,6.23523211 58.4005657,3.91126852 58.1895519,1.591625 C58.1642574,1.32475 58.1014574,0.41825 57.8572352,0.209125 C57.7185519,0.091 57.5083463,0 57.1786463,0 C56.9553574,0 56.7373019,0.046375 56.5497741,0.114625 C56.1485519,0.26075 55.9182852,0.622125 55.7830908,0.8085 C53.5345019,3.91125 38.5872297,24.026625 37.391413,25.354875 C37.391413,25.354875 38.5148352,19.74875 39.0835241,14.13125 C39.5623741,9.40975 39.5257408,4.699625 39.3033241,3.126375 C39.2570963,2.869125 39.1611519,2.783375 38.8951241,2.783375 C38.616013,2.783375 38.2610186,2.8875 37.9374241,3.052 C37.1707408,3.444875 36.4869186,4.1475 36.182513,4.430125 C26.346463,13.572125 16.9927519,24.924375 8.65517967,37.653875 C6.19376856,41.804 3.79864634,46.24025 1.50470189,50.990625 C0.997068559,52.03975 0.313246337,53.682125 0.151885226,54.198375 C0.102226938,54.3516158 0.0671808623,54.5092394 0.0472185594,54.669125 C-0.0827425517,55.342 0.0576852261,55.799625 0.442335226,55.986875 C0.879318559,56.19775 1.42707411,55.817125 1.77421856,55.17575 C1.78555745,55.155625 1.80125745,55.136375 1.81085189,55.118 C11.9033352,34.442625 22.3874463,23.030875 34.5392463,13.412875 L35.2754019,12.830125 C35.3117638,14.3355632 35.1756779,15.840211 34.8698186,17.3145 C34.5218019,18.89825 33.9880019,20.77775 33.3608741,22.97925 C32.6404186,25.5115 31.8222741,28.38325 31.0320408,31.70475 C30.6613463,33.25875 29.125363,39.8405 30.6369241,40.40925 C31.4829797,40.72775 33.6417297,39.37325 35.2021352,38.3145 C39.7062908,35.259875 48.0961963,27.29475 53.8118686,21.9765 L53.9174074,30.08075 C53.9060686,30.737875 53.6775463,37.421125 54.7058963,38.11325 C55.4062908,38.577 58.9169852,36.008 62.3369686,34.95275 C63.8877797,34.475 64.9274686,34.545875 65.4848186,34.320125 C65.7002574,34.232625 65.8616186,34.045375 65.8781908,33.551875 C65.9296519,32.081875 65.3321797,28.00525 63.7333963,27.5695" id="Path" fill="#E60A5B"/> 
                </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Murex EOD</span>
            </a>
         </li>
         {/*
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
            </a>
         </li> */}
      </ul>
     
   </div>
   
</aside>


    </>
  )
}

export default SideBar