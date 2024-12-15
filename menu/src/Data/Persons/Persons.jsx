
const Persons = ({ data }) => {
  
  
  return (
    <div className="row">
      {data.length > 1 ? (data.map((data, index) => (
          <div className="col-lg-12" key={index}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={data.img}  alt="card" />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <h5 className="text-danger">{data.price}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
                </p>
              </div>
            </div>
          </div>
        ))) : ( <h1 className="text-center text-danger">No data</h1>)}
    </div>
  );
};

export default Persons;
