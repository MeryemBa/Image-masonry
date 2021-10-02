import { useEffect, useState } from 'react'
import axios from 'axios'
import ImageCard from './components/imageCard'
import './App.css'

function App() {
	const [data, setData] = useState([])
	const query = `https://api.unsplash.com/photos/random/?count=30&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`

	useEffect(() => {
		axios
			.get(query)
			.then((res) => {
				setData(res.data)
			})
			.catch((e) => console.log(e.message))
	}, [query])

	return (
		<div className="App">
			{data.map(({ id, width, height, alt_description, urls: { regular } }) => (
				<ImageCard
					key={id}
					id={id}
					width={width}
					height={height}
					imageURL={regular}
					alt_description={alt_description}
				/>
			))}
		</div>
	)
}

export default App
