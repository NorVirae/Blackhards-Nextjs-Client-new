import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // Using react-icons for FontAwesome

interface IStarRating {
    rating: number
    setRating: React.Dispatch<React.SetStateAction<number>>
}
const StarRating: React.FC<IStarRating> = ({ rating, setRating }) => {
    // const [rating, setRating] = useState<number>(0); // Stores the clicked rating
    const [hover, setHover] = useState<number>(0); // Stores the hovered rating

    const maxStars = 5; // Maximum number of stars

    return (
        <div className="star-rating">
            {[...Array(maxStars)].map((_, index) => {
                const starValue = index + 1;

                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={starValue}
                            onClick={() => setRating(starValue)} // Set the clicked rating
                            style={{ display: 'none' }} // Hide the radio input
                        />
                        <FaStar
                            size={24}
                            className="star"
                            color={starValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'} // Highlight on hover or click
                            onMouseEnter={() => setHover(starValue)} // Highlight stars on hover
                            onMouseLeave={() => setHover(0)} // Remove highlight when not hovered
                            style={{ cursor: 'pointer', transition: 'color 200ms' }} // Make the stars interactive
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;
