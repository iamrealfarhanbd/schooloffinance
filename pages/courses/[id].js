import {useRouter} from 'next/router'
import Breadcrumb from "../../components/courses/Breadcrumb";
import courseSingle from "../../contents/courseSingle";
import { singleCourse  } from "../../contents/single_course";
import Image from "next/image";

const CourseDetailsPage = ({ singleCourse }) => {
  console.log(singleCourse[0]);
  const router = useRouter()
  const {id} = router.query
  return (
    <>
      <Breadcrumb />
      <div className="course-details-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 info">
              <div className="top-info">
                <h2>{singleCourse[0].course_title}</h2>
                <ul>
                  <li>
                    <div className="thumb">
                      {singleCourse[0].instructor.instructor_img ? (
                        <img src={singleCourse[0].instructor.instructor_img} alt="Thumb" />
                      ) : (
                        <img src={singleCourse[0].instructor.instructor_img} alt="Thumb" />
                      )}
                    </div>
                    <div className="info">
                      <span>Teacher</span>
                      <h5>{singleCourse[0].instructor.instructor_name}</h5>
                    </div>
                  </li>
                  <li>
                    <div className="info">
                      <span>Category</span>
                      <h5>{singleCourse[0].category}</h5>
                    </div>
                  </li>
                  <li>
                    <div className="info">
                      <span>Last Update</span>
                      <h5>{singleCourse[0].last_update}</h5>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="main-content">
                <div className="center-tabs">
                  <ul id="tabs" className="nav nav-tabs">
                    <li className="nav-item">
                      <a
                        href
                        data-target="#tab1"
                        data-toggle="tab"
                        className="active nav-link"
                      >
                        Overview
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href
                        data-target="#tab2"
                        data-toggle="tab"
                        className="nav-link"
                      >
                        Curriculum
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href
                        data-target="#tab3"
                        data-toggle="tab"
                        className="nav-link"
                      >
                        Advisor
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href
                        data-target="#tab4"
                        data-toggle="tab"
                        className="nav-link"
                      >
                        Reviews
                      </a>
                    </li>
                  </ul>
                  <div id="tabsContent" className="tab-content">
                    <div
                      id="tab1"
                      className="tab-pane overview fade active show"
                    >
                      <h4>Course Desscription</h4>

                      <p>{singleCourse[0].overview.course_desscription}</p>
                      <h4>Learning Objectives</h4>
                      <ul>
                        {courseSingle.overview.objectives &&
                          courseSingle.overview.objectives.map(
                            (objs, ob_idx) => {
                              <li key={ob_idx}>{objs}</li>;
                            }
                          )}
                      </ul>
                    </div>
                    <div id="tab2" className="tab-pane curriculum fade">
                      <p>{singleCourse[0].curriculum.curriculum_overview}</p>
                      <div className="accordion" id="accordionExample">
                        {singleCourse[0].curriculum.lessons &&
                          singleCourse[0].curriculum.lessons.map(
                            (lesson, lessonkey) => (
                              <div className="card">
                                <div className="card-header" id="headingOne">
                                  <h5
                                    className="mb-0"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                  >
                                    {lesson.lesson_title}
                                  </h5>
                                </div>
                                <div
                                  id="collapseOne"
                                  className="collapse show"
                                  aria-labelledby="headingOne"
                                  data-parent="#accordionExample"
                                >
                                  <div className="card-body">
                                    <ul>
                                      {lesson.lessons_video.map(
                                        (video, vidx) => (
                                          <li>
                                            <div className="left-content">
                                              <span>01</span>
                                              <i className="fas fa-play-circle" />
                                              <h5>
                                                <a href="#">
                                                  {video.video_title}
                                                </a>
                                              </h5>
                                            </div>
                                            <div className="right-content">
                                              <a href="#">Preview</a>
                                              <span>
                                                <i className="fas fa-clock" />{" "}
                                                {video.video_duration}
                                              </span>
                                            </div>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                      </div>
                    </div>
                    <div id="tab3" className="tab-pane advisor fade">
                      <div className="advisor-items">
                        {/* {courseSingle.advisor} */}
                        <div className="single-item">
                          <div className="row">
                            <div className="col-lg-4 col-md-4 thumb">
                              <img
                                src={singleCourse[0].advisor.advisor_img}
                                alt="Advisor"
                              />
                            </div>
                            <div className="col-lg-8 col-md-8 info">
                              <h4>{singleCourse[0].advisor.advisor_name} </h4>
                              {/* <span>{singleCourse[0].advisor.advisor_name} </span> */}
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                                <span>{singleCourse[0].advisor.advisor_rating}</span>
                              </div>
                              <p>{singleCourse[0].advisor.advisor_intro}</p>
                              <ul>
                                <li>
                                  <i className="fas fa-play" />{" "}
                                  {singleCourse[0].advisor.total_courses} Courses
                                </li>
                                <li>
                                  <i className="fas fa-comment-alt" />
                                  {singleCourse[0].advisor.num_of_reviews}  Rating
                                </li>
                                <li>
                                  <i className="fas fa-users" />{" "}
                                  {singleCourse[0].advisor.total_enrolled} Students
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="tab4" className="tab-pane reviews fade">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="avg-ratings">
                            <h2>{courseSingle.review.total_rating}</h2>
                            <div className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star-half-alt" />
                            </div>
                            Ratings
                          </div>
                        </div>
                        <div className="col-lg-8 rating-counter">
                          <ul>
                            <li>
                              <span>5 Star</span>
                              <span>
                                {courseSingle.review.rating_bar.fiveStar}
                              </span>
                              <div className="rating-bar" />
                            </li>
                            <li>
                              <span>4 Star </span>
                              <span>
                                {courseSingle.review.rating_bar.fourStar}
                              </span>
                              <div className="rating-bar" />
                            </li>
                            <li>
                              <span>3 star</span>
                              <span>
                                {courseSingle.review.rating_bar.threeStar}
                              </span>
                              <div className="rating-bar" />
                            </li>
                            <li>
                              <span>2 Star</span>
                              <span>
                                {courseSingle.review.rating_bar.twoStar}
                              </span>
                              <div className="rating-bar" />
                            </li>
                            <li>
                              <span>1 Star</span>
                              <span>
                                {courseSingle.review.rating_bar.oneStar}
                              </span>
                              <div className="rating-bar" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="rating-provider">
                        {singleCourse[0].reviews.map((reviewer, rvwId) => (
                          <div className="single-item" key={rvwId}>
                            <div className="thumb">
                              <img src={reviewer.reviewer_img} alt="Thumb" />
                            </div>
                            <div className="info">
                              <div className="title">
                                <h4>{reviewer.name}</h4>
                                <span>{reviewer.review_date}</span>
                              </div>
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                              </div>
                              <div className="content">
                                <p>{reviewer.comment}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sidebar">
              {/* Single Item */}
              <div className="item course-preview">
                <div className="thumb">
                  <Image src={singleCourse[0].thumnail} width={800} height={600} alt="Thumb" />
                  <a
                    href={singleCourse[0].intro_video}
                    className="popup-youtube light video-play-button item-center"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div>
                <div className="content">
                  <div className="top">
                    <div className="pricce">
                      <h2>${singleCourse[0].price}</h2>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span>
                        {singleCourse[0].rating} (
                        {singleCourse[0].num_of_reviews})
                      </span>
                    </div>
                  </div>
                  <div className="course-includes">
                    <ul>
                      <li>
                        <i className="fas fa-copy" /> Lectures{" "}
                        <span className="float-right">
                          {singleCourse[0].lectures}
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-clock" /> Duration{" "}
                        <span className="float-right">
                          {singleCourse[0].course_duration} Hours
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-sliders-h" /> Skill level{" "}
                        <span className="float-right">
                          {singleCourse[0].skill_level[0]}
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-language" /> Language{" "}
                        <span className="float-right">
                        {singleCourse[0].language[0]}
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-users" /> Students{" "}
                        <span className="float-right">
                          {singleCourse[0].total_enrolled}k
                        </span>
                      </li>
                    </ul>
                  </div>
                  <a className="btn btn-theme effect btn-sm" href="#">
                    Enroll Now
                  </a>
                </div>
              </div>
              {/* Single Item */}
              {/* Single Item */}
              <div className="item course-category">
                <div className="content">
                  <h4>Course categories</h4>
                  <ul>
                    {
                      singleCourse[0].course_categories.map((course) => (
                        <li>
                          <a href="#">
                            {course.course_name} <span> {course.total} </span>
                          </a>
                      </li>
                      ))
                    }
                    
                  </ul>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="item related-course">
                <div className="content">
                  <h4>Related Courses</h4>
                  <div className="related-courses-items">
                    {
                      singleCourse[0].related_courses.map((course) => (
                        <div className="item">
                          <div className="content">
                            <div className="thumb">
                              <a href="#">
                                <img src={course.image} alt="Thumb" />
                              </a>
                            </div>
                            <div className="info">
                              <h5>
                                <a href="#">
                                  {course.course_title}
                                </a>
                              </h5>
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                                <span> {course.num_of_reviews} ({course.overall_rating})</span>
                              </div>
                              <div className="meta">
                                <i className="fas fa-user" /> By{" "}
                                <a href="#"> {course.instructor_name} </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
              {/* End Single Item */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://financelms.wpengine.com/wp-json/staffasia/v1/courses?count=25`
  );
  const json = await res.json();
  return {
      props: {
        singleCourse
      }
  }
}

export default CourseDetailsPage;
