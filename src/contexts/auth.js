import React, {createContext, useState} from 'react'

export const AuthContext = createContext({})

function  AuthProvider({children}){
   const [modal,setModal]=useState(false)
   function ViewModal(){
      setModal(true)
   }
   function FecharModal(){
      setModal(false)
   }
   return(
      <AuthContext.Provider value={{modal,ViewModal,FecharModal}}>
         {children}
      </AuthContext.Provider>
   )  
} 

export default AuthProvider