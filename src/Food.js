import React from "react";
import PropTypes from "prop-types";

const foodLike = [
    {
        id: 1,
        rating: 5,
        name: "Kimchi",
        image: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    },
    {
        id: 2,
        rating: 4.9,
        name: "Samgyeopsal",
        image: "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    },
    {
        id: 3,
        rating: 4.6,
        name: "Bibimbap",
        image: "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    },
    {
        id: 4,
        rating: 4.3,
        name: "Doncasu",
        image: "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    },
    {
        id: 5,
        rating: 3.5,
        name: "Kimbap",
        image: "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    },
];

const Food = ({ name, picture, rating }) => {
    return (
        <div>
            <h1>I like {name}</h1>
            <h3>{rating}/5.0</h3>
            <img src={picture} alt={name} />
        </div>
    );
};

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};

function App() {
    return (
        <div>
            {foodLike.map((dish) => (
                <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
            ))}
        </div>
    );
}

export default App;
