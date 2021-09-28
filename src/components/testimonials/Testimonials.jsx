import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Michael Samuel",
      title: "Senior Web Developer",
      img:
        "https://www.businessbecause.com//uploads/default/news/images/e1055ba5f628f0b964c4b89031f1daf2ecf16b48.jpg",
      icon: "assets/twitter.png",
      desc:
        "Michel Samuel is a Senior Web Developer who works in the Crandeb Software Company. He has a 10 year of working expierience.",
    },
    {
      id: 2,
      name: "Elizza Mendavala",
      title: "Co-Founder of Matromax",
      img:
        "https://getukvisa.co.uk/wp-content/uploads/2017/02/business-women-crisis.jpg",
      icon: "assets/youtube.png",
      desc:
        "Elizza Mendavala is a Co-Founder of Matromax Company.it is one of the leading companies in the United States. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Gaptor",
      title: "CEO of Amania Holdings",
      img:
        "https://media.istockphoto.com/photos/portrait-concept-picture-id1016761216?k=20&m=1016761216&s=612x612&w=0&h=jEC8voGLjSyhdOO7EMQyrLtZ9m--TEUmd4X56sqyZk0=",
      icon: "assets/linkedin.png",
      desc:
        "Martin Gaptor is the CEO of the Amania Holdings Company. He has more than 20 years working expierience in this company.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Referees</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
