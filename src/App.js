import { useEffect, useState } from 'react'
import axios from 'axios'
import ImageCard from './components/imageCard'
import './App.css'

function App() {
	const [data, setData] = useState([])
	const [isLoading, setLoading] = useState(false)
	const query = `https://api.unsplash.com/photos/random/?count=30&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`

	useEffect(() => {
		setLoading(true)
		axios
			.get(query)
			.then((res) => {
				setData(res.data)
				setLoading(false)
			})
			.catch((e) => {
				setLoading(false)
				console.log(e.message)
			})
	}, [query])

	return (
		<div className="App">
			{!isLoading ? (
				data.length > 0 ? (
					data.map(
						({ id, width, height, alt_description, urls: { regular } }) => (
							<ImageCard
								key={id}
								id={id}
								width={width}
								height={height}
								imageURL={regular}
								alt_description={alt_description}
							/>
						)
					)
				) : (
					<div className="message-container">
						Oops, something went wrong Please try again.
					</div>
				)
			) : (
				<div className="message-container">Loading...</div>
			)}
		</div>
	)
}

export default App
