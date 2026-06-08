import { createContext, useContext, useEffect } from "react";
import { initialState, type ActivityEntry, type FoodEntry, type User, type Credentials } from "../types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import mockApi from "../assets/mockApi";
const AppContext=createContext(initialState)

export const AppProvider=({children}:{children: React.ReactNode})=>{

  const navigate=useNavigate()
  const [user,setUser]=useState<User | null>(null)
  const [isUserFetched,setIsUserFetched]=useState(false)
  const [onboardingCompleted,setOnboardingCompleted]=useState(false)
  const [allFoodLogs,setAllFoodLogs]=useState<FoodEntry[]>([])
  const [allActivityLogs,setAllActivityLogs]=useState<ActivityEntry[]>([])


  const signup= async(Credentials: Credentials)=>{
    const {data}= await mockApi.auth.register(Credentials)
    setUser(data.user)
    if(data?.user.age && data?.user?.weight && data?.user?.goal){
      setOnboardingCompleted(true);
  }
  localStorage.setItem("token",data.jwt)
}

const login= async(Credentials: Credentials)=>{
  const {data}= await mockApi.auth.login(Credentials)
  setUser({...data.user,token:data.jwt})
  if(data?.user?.age && data?.user?.weight && data?.user?.goal){
    setOnboardingCompleted(true);
  }
   localStorage.setItem("token",data.jwt)
}
const fetchUser= async(token:string)=>{
  try{
  const { data }= await mockApi.user.me()
  setUser({...data,token})
  if(data?.age && data?.weight && data?.goal){
    setOnboardingCompleted(true);
  }
}catch(error){
  console.log(error)
}finally {
    setIsUserFetched(true);
  }
};

const fetchFoodLogs= async()=>{
  const { data }= await mockApi.foodLogs.list()
  setAllFoodLogs(data);
}
const fetchActivityLogs= async()=>{
  const { data }= await mockApi.activityLogs.list()
  setAllActivityLogs(data);
}

const logout =()=>{
  localStorage.removeItem("token")
  setUser(null)
  setOnboardingCompleted(false)
  navigate("/")
}

useEffect(()=>{
  const token = localStorage.getItem("token")
  if(token){
  (async ()=>{
    await fetchUser(token)
    await fetchFoodLogs()
    await fetchActivityLogs()
  })();
  }
  else{
    setIsUserFetched(true)
  }
},[])


  const value = {
    user,setUser,isUserFetched,fetchUser,signup,login,logout,onboardingCompleted,setOnboardingCompleted,allActivityLogs,allFoodLogs,setAllActivityLogs,setAllFoodLogs
  }

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}


export const useAppContext=()=> useContext(AppContext)