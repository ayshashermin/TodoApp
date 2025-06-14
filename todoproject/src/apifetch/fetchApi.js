import commonApi from "./commonApi";

 export const getAllTodo = (header) => {
  return commonApi('http://127.0.0.1:8000/todoapp/', 'GET', null, header);
}


 export  const addNewTodo=(data,header)=>{
    return commonApi('http://127.0.0.1:8000/todoapp/','POST',data,header)
 }

 
 export const getTodo=(id,header)=>{
   return commonApi(`http://127.0.0.1:8000/todoapp/${id}/`,'GET','',header)
 }

 export const editTodo=(id,data,header)=>{
   return commonApi(`http://127.0.0.1:8000/todoapp/${id}/`,'PUT',data,header)

 }

 export const deletetodo=(id,header)=>{
   return commonApi(`http://127.0.0.1:8000/todoapp/${id}/`,"DELETE",'',header)
 }

 export const userRegister=(data)=>{
    return commonApi(" http://127.0.0.1:8000/reg/","POST",data,"")

}

export const userLogin = (data) => {
    return commonApi("http://127.0.0.1:8000/adminlogin", "POST", data, "");
};

export const listUserTodo=(header)=>{
    return commonApi("http://127.0.0.1:8000/todoapp/","GET","",header)
}

export const logoutApi = (header) => {
  return commonApi('http://127.0.0.1:8000/logout/', 'POST', null, header);
};

export const DashboardCount = (header) => {
  return commonApi("http://127.0.0.1:8000/dashboard/", "GET", null, header);
};



