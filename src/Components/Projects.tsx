import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Projects() {
  return (
    <div className={"container"}>
      <Swiper
        className={"mt-5"}
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <h2 className={"clr-code"} style={{ paddingTop: "20%" }}>
            INTRVU SPACE — Hiring Application (AI)
          </h2>
          A cutting-edge application revolutionizing the interview process by
          seamlessly merging AI with HR practices. Contributions: Login, OTP,
          Corporate flow, CRUD candidate flow, Settings, Job seeker flow,
          Landing page Tech Stack: React, Redux, Redux Saga, React Router,
          HTML5, CSS, Bootstrap, Validate.js
        </SwiperSlide>
        <SwiperSlide>
          <h2 className={"clr-code"}>Zeny Q — HRMS</h2>
          An employee management application with features like attendance
          management, leave management, time sheets, notifications, and payroll
          management. Contributions: Login, OTP, Api integration, Salary slip
          Tech Stack: React, Redux, Redux Saga, React Router, Bootstrap, push
          notification
        </SwiperSlide>
        <SwiperSlide>
          <h2 className={"clr-code"}>
            Quanta TMS — Ticket Management Solution
          </h2>
          Transforms task and ticket management, enhancing productivity and
          collaboration. Contributions: Login, OTP, Individual chats, Group
          chats, Task, Ticket, Association, Feeds, Events Tech Stack: React,
          Redux, Redux Saga, React Router, Bootstrap, Validate.js, push
          notification
        </SwiperSlide>
        <SwiperSlide>
          <h2 className={"clr-code"}>Quanta EDAT — EduTech Application</h2>
          Revolutionizes learning with comprehensive programming courses and
          interactive features for real-world readiness. Contributions: Course
          CRUD, Tasks, Topics, Schedule Interview, Online Sessions Tech Stack:
          React, Redux, Redux Saga, React Router, HTML, CSS, Bootstrap,
          Validate.js
        </SwiperSlide>
        <SwiperSlide>
          <h2 className={"clr-code"}>
            NS Instruments - FG — Finished Goods Management
          </h2>
          Optimizes inventory control with its Stock and Product modules,
          streamlining processes.
          <hr />
          Contributions: Login, OTP, Dispatch request, Stock request, Paginated
          Listing
          <hr />
          Tech Stack: React, Redux, Redux Saga, React Router, HTML, CSS,
          Bootstrap, Validate.js, push notification
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Projects;
