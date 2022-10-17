import React, { useState } from 'react';
interface UserInfo {
	name?: string | undefined;
	password?: string | undefined;
}
const formData: UserInfo = {
	name: '',
	password: '',
};
const Form = () => {
	const [userData, setUserData] = useState<UserInfo>(formData);
	const { name, password } = userData;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.currentTarget;
		setUserData((prevState: React.SetStateAction<UserInfo>) => ({
			...prevState,
			[name]: value,
		}));
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(userData);
		setUserData({
			name: '',
			password: '',
		});
	};
	return (
		<div>
			<h2>Signin</h2>
			<form onSubmit={e => handleSubmit(e)}>
				<input
					type='text'
					name='name'
					value={name}
					onChange={handleChange}
					placeholder='Username'
				/>
				<input
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					placeholder='Password'
				/>
				<input
					type='submit'
					value='Sigin'
				/>
			</form>
		</div>
	);
};

export default Form;
