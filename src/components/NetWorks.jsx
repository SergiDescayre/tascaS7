import Facebook from "../assets/Facebook.png"
import Instagram from "../assets/Instagram.png"
import Twitter from "../assets/Twitter.png"

const NetWorks = () => {
  return (
    <div className="flex gap-4 justify-center mt-3">
      <a
        href="https://www.facebook.com/starwars.es/?locale=es_ES"
        target="_blank"
      >
        <img
          className="w-6 cursor-pointer hover:scale-150 transition ease-in-out delay-100"
          src={Facebook}
        ></img>
      </a>
      <a href="https://www.instagram.com/starplusla/?hl=es" target="_blank">
        <img
          className="w-6 cursor-pointer hover:scale-150 transition ease-in-out delay-100"
          src={Instagram}
        ></img>
      </a>
      <a href="https://twitter.com/starwars" target="_blank">
        <img
          className="w-6 cursor-pointer hover:scale-150 transition ease-in-out delay-100"
          src={Twitter}
        ></img>
      </a>
    </div>
  );
};

export default NetWorks;
