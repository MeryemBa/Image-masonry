import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { formatterNumber } from '../utils/utils'
import PersonIcon from '@mui/icons-material/Person'

export default function ImageCard({
	imageURL,
	height,
	width,
	alt_description,
}) {
	return (
		<div className={`image-container ${width > height ? 'spanIt' : ''}`}>
			<LazyLoadImage
				src={imageURL}
				alt={alt_description}
				effect="blur"
				width="100%"
				height="100%"
			/>
			<div className="info-container">
				<a href="/" className="icon">
					<img src="./facebook-logo.webp" alt="facebook" />
				</a>
				<span className="separator" />
				<PersonIcon className="icon" />
				<span>{formatterNumber(Math.floor(Math.random() * 1000000))}</span>
			</div>
		</div>
	)
}
