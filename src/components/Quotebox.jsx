import { useEffect, useState } from "react";
import Button from "./Button";
const URL = "https://dummyjson.com/quotes/random";
const Quotebox = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    handleClick();
  }, []);

  const handleClick = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setQuote(data));
  };

  const handleCopy = () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(quote?.quote)
        .then(() => alert("Copied"))
        .catch((error) => console.log(error));
    }
  };

  //   console.log(quote);

  return (
    <div>
      <div className="QuoteTitle text-center text-2xl font-medium">
        Quote Generator
      </div>
      <div className="Quote-content text-center my-6">
        {`"${quote?.quote}"`}
      </div>

      <div className="flex justify-center items-center gap-4 ">
        <div onClick={handleClick}>
          <Button title="Next" />
        </div>
        <div onClick={handleCopy}>
          <Button title="copy" />
        </div>
      </div>
    </div>
  );
};

export default Quotebox;
