import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';

function CourseList({listCourses}) {

  return (
    <div className={css(style.containerCourse)}>
      <table id='CourseList' className="CourseList__container">
        <thead>
          <CourseListRow isHeader={true} textFirstCell="Available courses"></CourseListRow>
          <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"></CourseListRow>
        </thead>
        <tbody>
          {listCourses.length === 0 ? (<CourseListRow textFirstCell="No course available yet" isHeader={false} />) : <></>}
          {listCourses.map((course) => (<CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />))}
        </tbody>
      </table>
    </div>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

const style = StyleSheet.create({
  table: {
    border: "1px solid #ccc",
    margin: "2rem",
    width: "80%",
  },

  th: {
    padding: ".3rem",
    borderBbottom: "1px solid #ccc",
  },

  tr: {
    "nth-of-type(2)": {
    textAlign: "left",
  },
},
});

export default CourseList;