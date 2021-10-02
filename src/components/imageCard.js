import React from 'react'
import { formatterNumber } from '../utils/utils'
import PersonIcon from '@mui/icons-material/Person'

export default function ImageCard({ imageURL, height, width }) {
	return (
		<div className={`image-container ${width > height && 'spanIt'}`}>
			<img src={imageURL} alt="random" />
			<div className="info-container">
				<a href="/">
					<img
						src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png"
						alt="facebook"
						className="icon"
					/>
				</a>
				<span className="separator" />
				<PersonIcon className="icon" />
				<span>{formatterNumber(Math.floor(Math.random() * 1000000))}</span>
			</div>
		</div>
	)
}
