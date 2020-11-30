import React from 'react';
import './Course.css';

const Course = (props) => {
    let { name, title, image, price } = props.courseData;
    return (

        <div className="single-course">
            <img src={image} className="img-fluid" alt="Course Image" />
            <h3>{title}</h3>
            <h5>By : {name}</h5>
            <p className="lead">${price}</p>
            <button onClick={() => props.enrollHandler(props.courseData)} type="button" className="btn btn-success">Enroll Now</button>
        </div>

    );
};

export default Course;