import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

// images
import TershiXia from "../assets/tershi.jpg";


const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="container mx-auto pt-8 pl-5 pr-5 text-black dark:text-white transition-colors duration-100">
      <Card>
        <h1 className="text-3xl md:text-4xl pb-5 text-teal-600 dark:text-teal-400">夏特稀匿名網站</h1>

        <div className="grid grid-cols-3 gap-4 relative pb-10">
          <div className="col-span-2">
            <div className="text-sm sm:text-lg md:text-2xl pt-3">
              嗨嗨，我是夏特稀，我是一名在台灣就讀的大學生，喜歡研究一些怪怪的東西，為了讓大家更認識我，我決定寫這個平台來讓大家來問我問題。
            </div>
          </div>
          <div className="">
            <img className="rounded-full ring-4 p-2 ring-cyan-300 dark:ring-cyan-500"
              src={TershiXia}
              alt="Extra large avatar"
            />
          </div>
        </div>
      </Card>
  </div>

  )
}

export default Home;
