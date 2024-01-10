/** @format */

import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import {
  quizApp,
  todoApp,
  blogApp,
  activityTracker,
  githubBattle,
  counterApp,
  nodeEventApp,
  nodePodcast,
  nodeShoppingCart,
  amazonWeb,
  imdb,
} from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="AMAZON WEB"
          des=" FullStack Application - React js | Node js | Express js | MongoDB
A dynamic e-commerce platform using React js and MongoDB,
Showcasing expertise in FullStack development and seamless integration of diverse
technologies for robust user experiences and secure transactions."
          src={amazonWeb}
          live="https://amazonweb-w12y.vercel.app/"
          github="https://github.com/me-neeraj135/amazonweb"
        />

        <ProjectsCard
          title="IMDB APP"
          des=" This is a React js Application. A dynamic OTT platform.Showcasing experties in FrontEnd development and seamless integration of diverse
          technologies for robust user experiences and secure transactions."
          src={imdb}
          live="https://imdb-clone-mhou.vercel.app/"
          github="https://github.com/me-neeraj135/IMDB_clone"
        />

        <ProjectsCard
          title="QUIZ APP"
          des=" This is a quiz app created using react . In this app user have to select correct answer of the quiz ."
          src={quizApp}
          live="https://quiz-app-peach-delta.vercel.app/"
          github="https://github.com/me-neeraj135/quiz-app/tree/main"
        />
        <ProjectsCard
          title="TODO LIST"
          des=" This has been created using React -Redux where user can add your own todo and delete that later."
          src={todoApp}
          live="https://redux-todo-phi.vercel.app/"
          github="https://github.com/me-neeraj135/redux-todo/tree/main"
        />
        <ProjectsCard
          title="BLOG APP"
          des=" This is a full stack website ,here in this app an API has been used for maintain the backend data."
          src={blogApp}
          live="https://new-blog-ochre.vercel.app/"
          github="https://github.com/me-neeraj135/new-blog"
        />
        <ProjectsCard
          title="MONTHLY ACTIVITY TRACKER"
          des=" This is an activity tracker where there user can add your activity and track that."
          src={activityTracker}
          live="https://monthly-activity-tracker-khaki.vercel.app/"
          github="https://github.com/me-neeraj135/monthly-activity-tracker/tree/master"
        />
        <ProjectsCard
          title="GITHUB BATTLE WEBSITE"
          des=" This a website where there got two user compared based on their pushed repos on github and their followers."
          src={githubBattle}
          live="https://github-battle-app-ashen.vercel.app/"
          github="https://github.com/me-neeraj135/github-battle-app/tree/main"
        />
        <ProjectsCard
          title="COUNTER APP"
          des=" This is a react-redux counter app in which you can increase,decrease and reset the value ."
          src={counterApp}
          live="https://redux-counter-app-phi.vercel.app/"
          github="https://github.com/me-neeraj135/redux-counter-app/tree/main"
        />

        <ProjectsCard
          title="EVENT MANAGEMENT WEBSITE"
          des="This is a backend app where you can add your event and can filter the event."
          src={nodeEventApp}
          live="https://ta-ac-backend-express-with-mongo-checkpoint-02-t-naaam.vercel.app/"
          github="https://github.com/me-neeraj135/TA-AC-BACKEND-express-with-mongo-checkpoint-02-TNaaam/tree/block-BNaaft/block-BNaaft/event-app"
        />

        <ProjectsCard
          title="E-COM WEBSITE"
          des=" This is E-com website developed using node. js."
          src={nodeShoppingCart}
          live="https://node-shopping-cart.vercel.app/"
          github="https://github.com/me-neeraj135/node-shopping-cart"
        />

        <ProjectsCard
          title="PODCAST WEBSITE"
          des=" This is a backed website created using node.js and here on that you can add your access the podcast according to your subscriptions."
          src={nodePodcast}
          live="https://ta-ac-backend-basic-authorization-t-naaah.vercel.app/"
          github="https://github.com/me-neeraj135/TA-AC-BACKEND-basic-authorization-TNaaah/tree/block-BNaaeb/block-BNaaeb"
        />
      </div>
    </section>
  );
};

export default Projects;
