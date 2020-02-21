import React, { useState, useEffect } from "react"
// import logo from './logo.svg';
import "./App.css"
import Box from "./Box"

function App() {
	const [items, setItems] = useState(
		JSON.parse(localStorage.getItem("dersler")) ||
			new Array(11).fill(new Array(7).fill({ ders: "", konum: "" }))
	)

	React.useEffect(() => {
		localStorage.setItem("dersler", JSON.stringify(items))
	}, [items])

	const onClick = (x, y, data) => {
		var a = []

		for (var i = 0; i < items.length; i++) a[i] = items[i].slice()

		a[x][y] = data
		setItems(a)
	}

	let start = 9
	return (
		<div className="App">
			<table>
				<tr>
					<td>Saat\Gün</td>
					<td>Pazartesi</td>
					<td>Salı</td>
					<td>Çarşamba</td>
					<td>Perşembe</td>
					<td>Cuma</td>
					<td>Cumartesi</td>
					<td>Pazar</td>
				</tr>
				{items.map((val, i) => {
					return (
						<tr key={i * 14}>
							<tr>
								{start}:00 - {start++}:50{" "}
							</tr>
							{items[i].map((inval, ini) => (
								<Box
									key={i * 14 + ini}
									onClick={onClick}
									x={i}
									y={ini}
									data={items[i][ini]}
								></Box>
							))}
						</tr>
					)
				})}
			</table>
			<button onClick={()=>setItems(new Array(11).fill(new Array(7).fill({ ders: "", konum: "" })))}> sıfırla</button>
		</div>
	)
}

export default App
