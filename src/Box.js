import React, { useState } from "react"

const Box = props => {
	// setDers({ad:props.ad,yer:""});
	return (
		<td
			style={
				props.data.ders === ""
					? {}
					: {
							border: "1px solid black",
							backgroundColor:
								"rgb(" +
								Math.random() * 255 +
								", " +
								Math.random() * 255 +
								"," +
								Math.random() * 255 +
								")"
					  }
			}
			// onClick={() => {
			// 	setDers({
			// 		ad: prompt("Dersin adını giriniz"),
			// 		yer: prompt("Yerini giriniz")
			// 	})
			// }}
			onClick={() => {
				let ad = prompt("ad gir")
				let loc = prompt("loc gir")

				props.onClick(props.x, props.y, { ders: ad, konum: loc })
			}}
		>
			{/* {ders.ad || "--------"}
			<br />
			{ders.yer} */}
			{props.data.ders}
			<br />
			{props.data.konum}
			<br />
		</td>
	)
}

export default Box
