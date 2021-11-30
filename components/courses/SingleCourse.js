import Link from "next/link";
import Image from "next/image";
const SingleCourse = ({ course }) => {
  return (
    <div className="single-item col-lg-4 col-md-6">
      <div className="item">
        <div className="thumb">
          <a href="#">
            <Image
              src={course.image}
              alt="Picture of the author"
              width={1200}
              height={800}
            />
          </a>
        </div>
        <div className="info">
          <div className="top-info">
            <div className="rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
              <span>
                {course.overall_rating} ({course.num_of_reviews})
              </span>
            </div>
            <div className="price">${course.price}</div>
          </div>
          <div className="meta">
            <ul>
              <li>
                <img src={course.instructor.instructor_img} alt="Advisor" width={100} height={100} />
                <a href="#"> {course.instructor.instructor_name} </a> In <a href="#">Course</a>
              </li>
            </ul>
          </div>
          <h4>
            <a href="#">{course.course_title}</a>
          </h4>
          <div className="bottom-info">
            <div className="course-info">
              <ul>
                <li>
                  <i className="fas fa-clock" /> 04:36:00
                </li>
                <li>
                  <i className="fas fa-list-ul" /> 123
                </li>
                <li>
                  <i className="fas fa-user" /> {course.total_enrolled}
                </li>
              </ul>
            </div>
            <div className="enroll">
              <Link href='/courses/[id]' as={`/courses/${course.course_id}`}>
                <a className="btn btn-theme effect btn-sm">Enroll Now</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleCourse;
