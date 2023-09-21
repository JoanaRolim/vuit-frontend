import React, { useEffect, useState } from "react";
import api from "../../environments/environments";
import "./support.css";
import LearnMore from "../learn/learn_more";
import Search from "../search/search";
import Call from "../call/call";
import Question from "../questions/question";

const Support = () => {
  const [questionsData, setQuestions] = useState({});
  const [reasonsData, setReasonsData] = useState({});

  useEffect(() => {
    api
      .get("/reasons")
      .then((response) => {
        setReasonsData(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da rota /about:", error);
      });
  }, []);

  useEffect(() => {
    api
      .get("/questions")
      .then((response) => {
        setQuestions(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados do back-end:", error);
      });
  }, []);

  return (
    <>
      <div>
        <Search />
      </div>

      <div className="features__container">
        <div className="main_features">
          <div className="first__col">
            <div className="lefty">
              <img
                className="category-list-svg-icon"
                alt=""
                src="https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png"
              />
            </div>
            <div className="righty">
              <h2>{reasonsData.r2}</h2>
              <p>{reasonsData.t2}</p>
              <LearnMore />
            </div>
          </div>

          <div className="second__col">
            <div className="lefty">
              <img
                className="category-list-svg-icon"
                src="https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png"
                alt=""
              />
            </div>
            <div className="righty">
              <h2>{reasonsData.r3}</h2>
              <p>{reasonsData.t3}</p>
              <LearnMore />
            </div>
          </div>
        </div>

        <div className="main_features">
          <div className="first__col">
            <div className="lefty">
              <img
                className="category-list-svg-icon"
                alt=""
                src="https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png"
              />
            </div>
            <div className="righty">
              <h2> {reasonsData.r4}</h2>
              <p>{reasonsData.t4}</p>
              <LearnMore />
            </div>
          </div>

          <div className="second__col">
            <div className="lefty">
              <img
                className="category-list-svg-icon"
                src="https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png"
                alt=""
              />
            </div>
            <div className="righty">
              <h2>{reasonsData.r1}</h2>
              <p> {reasonsData.t1}</p>
              <LearnMore />
            </div>
          </div>
        </div>

        <div className="main_features">
          <div className="first__col">
            <div className="lefty">
              <img
                className="category-list-svg-icon"
                alt=""
                src="https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png"
              />
            </div>
            <div className="righty">
              <h2> {reasonsData.r6}</h2>
              <p>{reasonsData.t6}</p>
              <LearnMore />
            </div>
          </div>

          <div className="second__col">
            <div className="lefty">
              <img
                className="category-list-svg-icon"
                src="https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png"
                alt=""
              />
            </div>
            <div className="righty">
              <h2> {reasonsData.r5}</h2>
              <p> {reasonsData.t5} </p>
              <LearnMore />
            </div>
          </div>
        </div>
      </div>

      <div className="background_container">
        <div className="container">
          <h3 className="question_subtitle">{questionsData.subtitle}</h3>
          <div className="info">
            <Question
              question={questionsData.question_one}
              answer={questionsData.answer_one}
            />
            <Question
              question={questionsData.question_two}
              answer={questionsData.answer_two}
            />
            <Question
              question={questionsData.question_three}
              answer={questionsData.answer_three}
            />
            <Question
              question={questionsData.question_four}
              answer={questionsData.answer_four}
            />
            <Question
              question={questionsData.question_five}
              answer={questionsData.answer_five}
            />
            <Question
              question={questionsData.question_six}
              answer={questionsData.answer_six}
            />
          </div>
        </div>
      </div>

      <div>
        <Call />
      </div>
    </>
  );
};

export default Support;
