import { useEffect, useState } from 'react'
import axios from 'axios'
import ImageCard from './components/imageCard'
import './App.css'

function App() {
	const [data, setData] = useState([])
	const query = `https://api.unsplash.com/photos/random/?count=20&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`

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
			{data.map(({ id, width, height, urls: { regular } }) => (
				<ImageCard
					key={id}
					id={id}
					width={width}
					height={height}
					imageURL={regular}
				/>
			))}
		</div>
	)
}

export default App
