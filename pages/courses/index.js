import Breadcrumb from "../../components/courses/Breadcrumb";
import SingleCourse from "../../components/courses/SingleCourse";
import Pagination from "../../components/Pagination";
import { useState } from "react";
import { all_Courses } from "../../contents/all_courses";

const Courses = ({ courses }) => {
  const [visibleCourses, setVisibleCourses] = useState(courses);
  const [keyword, setKeyword] = useState("");

  const search = (keyword) => {
    if (keyword != "") {
      setKeyword(keyword);
      const filteredCourses = courses.filter(
        (course) =>
          course.title.toLowerCase().includes(keyword.toLowerCase()) && course
      );
      setVisibleCourses(filteredCourses);
    } else {
      setKeyword("");
      setVisibleCourses(courses);
    }
  };

  return (
    <>
      <Breadcrumb />
      <div className="container search-bar">
        <form action="#">
          <input
            type="text"
            placeholder="Enter keywords to search"
            className="search form-control"
            onChange={(e) => search(e.target.value)}
            value={keyword}
          />
          <button type="submit" className="search-btn">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
      <div className="courses-area trend-layout  default-padding">
        <div className="container">
          <div className="courses-items">
            <div className="row">
              {visibleCourses.map((course) => (
                <SingleCourse key={course.course_id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;

export const getStaticProps = async (context) => {
  const res = await fetch(
    `http://financelms.wpengine.com/wp-json/staffasia/v1/courses?count=25`
  );
  const json = await res.json();

  return {
    props: {
      courses: all_Courses,
    },
  };
};
