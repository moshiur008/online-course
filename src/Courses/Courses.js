import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import courseData from './../Data/data';
import './Courses.css'

const Courses = () => {

    const[courses, setCourses] = useState([])

    let enrollHandler = (course) => {
        let newCourse = [...courses, course];
        setCourses(newCourse);
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="container">
                            <div className="row">

                                {
                                    courseData.map(course => <div className="col-md-6"><Course enrollHandler={enrollHandler} courseData={course} key={courses.id}></Course></div>)
                                }

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="cart-box"><Cart course={courses}></Cart></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;