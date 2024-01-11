import React,{useState} from 'react'

const MenuList = ({data}) => {
  const [isMenu,setIsMenu]=useState("");
  const handleNav=(to)=>{
    if(isMenu==to){
      setIsMenu("");
      return;
    }
    setIsMenu(to)
  }
  return (
        <ul style={{listStyle:"none"}}>
            {data && data.length>0 && data.map((tab,idx)=>{
              return <>
                <div class="list__item">
                <li key={tab.to}>{tab.label}</li>
                {tab.children && <b onClick={()=>handleNav(tab.to)}>{isMenu ==tab.to ? "-" : "+"}</b>}
                </div>
                {tab.children && isMenu==tab.to ? <MenuList data={tab.children}/> : null}
                </>
            })}
        </ul>
  )
}

export default MenuList