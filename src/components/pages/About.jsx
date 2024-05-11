import React from "react";

function About() {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
      </div>
      <div className="blog-container">
        <p className="text">История Germes началась в сердце Чеченской Республики, в неповторимом городе Грозном, где слились воедино древняя культура и современные технологии. Вдохновленные духом этого уникального места, мы решили создать нечто уникальное - кроссовки, которые стали бы отражением силы и решимости наших городских жителей. Станьте и вы частью этой истории, приходите в наш магазин.</p>
        <p className="text"><b>Адрес:</b> пр. Путина, 28, Грозный, Чеченская Респ., 364068</p>
        <p className="text"><b>Телефон:</b> 8(928) 019-06-53</p>
        <p className="text"><b>Электронная почта:</b> Germes.grozny@gmail.com</p>
        <p className="text"><b>Расписание работы:</b></p>
        <ul className="text">
          <li>Пятница: 10:00–20:00</li>
          <li>Суббота: 10:00–20:00</li>
          <li>Воскресенье: 10:00–20:00</li>
          <li>Понедельник: 10:00–20:00</li>
          <li>Вторник: 10:00–20:00</li>
          <li>Среда: 10:00–20:00</li>
          <li>Четверг: 10:00–20:00</li>
        </ul>
      </div>

      <style>{`
        .content {
          font-family: Arial, sans-serif;
          color: #333;
          line-height: 1.6;
        }

        .blog-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .blog-container h1 {
          font-size: 24px;
          margin-bottom: 15px;
          color: #333;
        }

        .blog-container .text {
          font-size: 22px;
          margin-bottom: 10px;
          color: #555;
        }

        .blog-container ul {
          list-style-type: none;
          padding: 0;
        }

        .blog-container li {
          font-size: 22px;
          margin-bottom: 5px;
          color: #555;
        }

        .blog-container li:before {
          content: "•";
          margin-right: 5px;
          color: #333;
        }

        @media (max-width: 600px) {
          .blog-container {
            padding: 10px;
          }

          .blog-container h1 {
            font-size: 20px;
          }

          .blog-container .text,
          .blog-container li {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
