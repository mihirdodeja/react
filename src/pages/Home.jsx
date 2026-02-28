import img1 from '../assets/images/img1.avif'
import img2 from '../assets/images/img2.avif'
import img3 from '../assets/images/img3.avif'


const Home = () => {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="d-block w-100" alt="..." style={{height:"100vh"}}/>
            <div class="carousel-caption d-none d-md-block">
              <h3>Don't stop when you're tired, stop when you're done</h3>
              <p>
                Never Give Up
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100" alt="..." style={{height:"100vh"}}/>
            <div class="carousel-caption d-none d-md-block">
              <h3>No pain, no gain. Shut up and train</h3>
              <p>
               "Your only limit is you".
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="..." style={{height:"100vh"}}/>
            <div class="carousel-caption d-none d-md-block">
              <h3>Earned, not inherited</h3>
              <p>
                The pain you feel today is the progress you make tomorrow.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Home;
