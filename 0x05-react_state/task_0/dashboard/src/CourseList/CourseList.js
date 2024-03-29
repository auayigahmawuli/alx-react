import React from 'react';
import './CourseList.css';
import { arrayOf } from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';

function CourseList() {

  return (
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
  );
}

CourseList.propTypes = {
  listCourses: arrayOf(CourseShape),
};
CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;