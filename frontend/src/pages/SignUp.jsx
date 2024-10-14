import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";

// Controlling the sign up form is a good idea because we want to add (eventually)
// more validation and provide real time feedback to the user about usernames and passwords
export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [race, setRace] = useState('');
  const [gender, setGender] = useState('');

  // users shouldn't be able to see the sign up page if they are already logged in.
  // if the currentUser exists in the context, navigate the user to 
  // the /users/:id page for that user, using the currentUser.id value
  if (currentUser) return <Navigate to={`/users/${currentUser.id}`} />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    if (!username || !password || !fullName || !email || !age || !race || !gender) return setErrorText('Missing inputs in required fields.');
   
    
    const [user, error] = await createUser({ username, password, full_name: fullName, email, age, race, gender});
    if (error) return setErrorText(error.message);

    setCurrentUser(user);
    navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
    if (name === 'fullname') setFullName(value);
    if (name === 'email') setEmail(value);
    if (name === 'age') setAge(value);
    if (name === 'race') setRace(value);
    if (name === 'gender') setGender(value);
  };

  console.log({
    username,
    password,
    fullName,
    email,
    age,
    race,
    gender,
  })

  return <>
  <div className='wrapper'>
    {/* <h1>Sign Up</h1> */}
    <form onSubmit={handleSubmit} onChange={handleChange} aria-labelledby="create-heading" className="whole-form">
      <h2 id='login-heading'>Create An Account</h2>
     
      <div className='input-box'>
      <label htmlFor="username">Username</label>
      <input
        autoComplete="off"
        type="text"
        id="username"
        name="username"
        onChange={handleChange}
        value={username}
        placeholder="Username"
      />
      </div>

      <div className="input-box">
      <label htmlFor="password" >Password</label>
      <input
        autoComplete="off"
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={password}
      />
      </div>

      <div className="input-box">
        <label htmlFor="fullname">Full Name</label>
        <input 
        type="text" 
        id='fullname'
        name='fullname'
        placeholder ='Full Name'
        onChange={handleChange}
        value={fullName}
        />
      </div>

      <div className ="input-box"> 
      <label htmlFor="email">Email</label>
      <input 
      type="email"
      id='email'
      name='email'
      placeholder='Email Address'
      onChange={handleChange}
      value={email}
       />
      </div>

      <div className='input-box'>
        <label htmlFor="age">Age</label>
        <input 
        type="number" 
        id="age"
        name="age"
        placeholder="How old are you?"
        onChange={handleChange}
        value={age}
        />
      </div>

      <div className="input-box">
      <label htmlFor="race">Race</label>
      <input 
      type="text" 
      id='race'
      name="race"
      placeholder='Race'
      onChange={handleChange}
      value={race}
      />
      </div>

    <div className="input-box">
      <label htmlFor="gender">Gender</label>
      <input
      type="text"
      id="gender"
      name='gender'
      placeholder='Gender' 
      onChange={handleChange}
      value={gender}
      />
    </div>





      {/* In reality, we'd want a LOT more validation on signup, so add more things if you have time
        <label htmlFor="password-confirm">Password Confirm</label>
        <input autoComplete="off" type="password" id="password-confirm" name="passwordConfirm" />
      */}

      <button id= "login-button">Sign Up Now!</button>
    {!!errorText && <p>{errorText}</p>}
    <div className ="register-link">
    <p>Already have an account with us? <Link to="/login">Log in!</Link></p>
    </div>
    </form>

  </div>
  </>;
}
