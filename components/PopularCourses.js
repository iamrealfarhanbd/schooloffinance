import Image from 'next/image'
import courseContent from "../contents/coursecontent";
const PopularCourses = () => {
  return (
    <div className="courses-area default-padding bottom-less">
      <div className="container">
        <div className="heading-left">
          <div className="row">
            <div className="col-lg-5">
              <h5>Popular Courses</h5>
              <h2>Explore our most enrolled finance course.</h2>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <p>
                Beginner, Intermediate, Advanced or Pro? We got you covered.
                Take a peek of our most sought premium courses.
              </p>
              <a className="btn btn-md btn-dark border" href="#">
                View All <i className="fas fa-plus" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="courses-items">
          <div className="row">

            {
              courseContent ? courseContent.map((courseItem, idx) => 
              <div key={idx} className="single-item col-lg-4 col-md-6">
                <div className="item">
                  <div className="thumb">
                  <Image
                    src='/assets/img/thum_course_one.png'
                    // src={courseItem.thumbnail}
                    alt="Picture of the author"
                    width={800}
                    height={600}
                  />
                    <div className="course-info">
                      <ul>
                        <li>
                          <i className="fas fa-clock" /> {courseItem.duration}
                        </li>
                        <li>
                          <i className="fas fa-list-ul" /> {courseItem.lessons}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="top-info">
                    <div className="meta">
                      <ul>
                        <li>
                          <img src="assets/img/100x100.png" alt="Advisor" />
                          <a href="#">{courseItem.author.name}</a> in <a href="#">{courseItem.category}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="info">
                    <div className="price-rating">
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                        <span>{courseItem.totalRating}</span>
                      </div>
                      <div className="price">{courseItem.price}</div>
                    </div>
                    <h4>
                      <a href="#">{courseItem.title}</a>
                    </h4>
                    <div className="bottom">
                      <ul>
                        <li>
                          <i className="fas fa-user" />{courseItem.totalEnrolled}
                        </li>
                      </ul>
                      <a href="#">
                        <i className="fas fa-shopping-cart" /> Get Enrolled
                      </a>
                    </div>
                  </div>
                </div>
              </div>  
              ) : <p>Loading .... </p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
