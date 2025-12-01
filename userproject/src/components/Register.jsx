import { useState } from "react"


export default function Register()
{

    const[formData,setformData]=useState({
        uname:"",uemail:"",upass:"",ucpass:""
    })

    const [error,seErrors]=useState({});
    const [seccessMsg,setSuccessMsg]=useState("");

    const handleChange=(e)=>{
        setformData({...formData,[e.target.value]:e.target,value})
    }

    const validdate=()=>{
        let newErrors={};
        if(!formData.uname) newErrors.uname='Name is required';
        if(!formData.uemail) newErrors.uemail='Email is required';
        if(!formData.upass) newErrors.upass='Password is required';
        if(!formData.ucpass) newErrors.ucpass='Confirm Password is required';
        if (formData.upass!==formData.ucpass) newErrors.ucpass='Password and confirm password does not match';
        return newErrors;
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const validateErrors=validate();
        setErrors(validateErrors);
        if(Object.keys(validateErrors).length===0)
        {
            setSuccessMsg("Registration done successfully")
        }
        else
        {
            setSuccessMsg("Registeration failed")
        }
    }
    return(
        <>
        <h1>Register Form</h1>
        <form>
            <label>Enter Name</label>
            <input type="text" name="uname" />
            <br /><br />

             <label>Enter Email</label>
            <input type="text" name="uemail" />
            <br /><br />

             <label>Enter Password</label>
            <input type="text" name="upass" />
            <br /><br />

             <label>Enter Confirm Pssword</label>
            <input type="text" name="ucpass" />
            <br /><br />
            <input type="submit" value={"Submit"} />
            <input type="reset" value={"Cancel"} />

        </form>
        </>
    )
}