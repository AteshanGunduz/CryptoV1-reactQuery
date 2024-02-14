import {SubmitHandler, useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { setFormData } from "../features/profileSlice";

type FormFields = {
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
        navigate("/")
    } catch (error) {
         setError("root", {message: "This email is already taken"})
    }
  
}


  return (
    <div className="flex login-con">
   <div className="foto"></div>
   <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign-Up</h2>
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