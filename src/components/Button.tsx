import React from 'react'; // importing FunctionComponent

export enum Type {
	Primary = 'primary',
	Warning = 'warning',
	Danger = 'danger',
	Default = 'default',
	Success = 'success',
}

interface IButtonProps  {
	type: string
	label: string
	onClick: () => void
}

const Button = ({ type, label, onClick }: IButtonProps) => {
	return (
		<>
			<button className={'btn btn-'+type} >
				{label}
			</button>
		</>
	)
}
	

export default Button