import {SubmitHandler, useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { setFormData } from "../features/profileSlice";

type FormFields = {
    firstName: string,
    lastName:string,
    email: string,
    password: string
}



const SignInForm = () => {
const {register, handleSubmit, formState: {errors, isSubmitting}, setError}= useForm<FormFields>()
const navigate = useNavigate();

const dispatch = useDispatch();

const onSubmit: SubmitHandler<FormFields> = async (data)=>{
    try{
        await new Promise((resovle)=> setTimeout(resovle, 1000))

        dispatch(setFormData(data))
        navigate("/charts")
    } catch (error) {
         setError("root", {message: "This email is already taken"})
    }
  
}


  return (
    <div className="flex login-con">
   <div className="foto"></div>
   <form onSubmit={handleSubmit(onSubmit)}>
       
        <h2>Sign-Up</h2>
        <input {...register("firstName", {required:"Name is required", validate: (value)=> {if (!/^[a-zA-Z ]*$/.test(value)) {
        return "Please Enter a valid name";
        } return true
        }})}type="text" placeholder="First Name" />

        {errors.firstName && <p className="text-red-600">{errors.firstName.message}</p>}
        <input {...register("lastName", {required:"Last Name is required", validate: (value)=> {if (!/^[a-zA-Z]+$/.test(value)) {
        return "Please Enter a valid last name";
        } return true
        }})}type="text" placeholder="Last Name" />


        {errors.lastName && <p className="text-red-600">{errors.lastName.message}</p>}
        <input {...register("email", {required: "Email is required", validate: (value)=> {if(!value.includes("@")){
          return "Email must include @"
        } return true
        }})} type="text" placeholder="Email"/>
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        <input {...register("password", {required: "Password is required", minLength: {value:8, message:"Password must have at least 8 characters" }})} type="password" placeholder="Password" />
        {errors.password && <p className="text-red-600">{errors.password.message}</p>}
        <button disabled={isSubmitting} className="pr-4 pl-4 p-1">
            {isSubmitting ? "Loading" : "Submit"}
        </button>
        {errors.root && <p className="text-red-600">{errors.root.message}</p>}
    </form>
    </div>
 
  )
}
export default SignInForm