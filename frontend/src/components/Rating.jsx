import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
	const starIcon = (full, half) => {
		return (
			<span>
				<i
					style={{ color }}
					className={
						value >= full
							? "fas fa-star"
							: value >= half
							? "fas fa-star-half-alt"
							: "far fa-star"
					}
				></i>
			</span>
		);
	};

	return (
		<div className="rating">
			{starIcon(1, 0.5)}
			{starIcon(2, 1.5)}
			{starIcon(3, 2.5)}
			{starIcon(4, 3.5)}
			{starIcon(5, 4.5)}
			<span>{text && text}</span>
		</div>
	);
};

Rating.defaultProps = {
	color: "#ff0039",
};

Rating.protoTypes = {
	value: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	color: PropTypes.string,
};

export default Rating;
