import React,{useState} from 'react'

function index() {
  
  const [form, setValues] = useState({
    username: "",
    password: "",
  });

	let handleSubmit = async (e) => {
		e.preventDefault();
		console.log("submit")
		try{
		const response = await 
		axios.post(URL+'/Guest/login', 
		{username: form.username,
        password: form.password,});
		if(response.data.ok){
			//password match
			//navigate in 2 seconds
			setTimeout(() => {
            loginHandle(
			response.data.token)
			navigate('/')
			}, 10);
		}else{
			setError(response.data.message)}
		}
		catch(error){console.log(error)}
	}

	let handleChange= (e) =>{
		setValues({ ...form, 
			[e.target.name]: e.target.value });
	}

  return (

<dialog id="my_modal_add" className="modal">
    <div className="modal-box">
        <h1 className="custom-h1">Enter</h1>
        <input
  type="text"
  placeholder="To do"
  className="input input-bordered input-primary w-full max-w-xs" />
  <input
  type="text"
  placeholder="Note"
  className="input input-bordered input-secondary w-full max-w-xs" />
  <input
  type="text"
  placeholder="Time"
  className="input input-bordered input-secondary w-full max-w-xs" />
    </div>
    <form method="dialog" className="modal-backdrop">
        <button>close</button>
    </form>
</dialog>
  )
}

export default index