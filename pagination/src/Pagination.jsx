import { useEffect, useState } from "react";

const Pagination = () => 
{
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    document.body.classList.toggle("theme-dark", theme === "dark");
    document.body.classList.toggle("theme-light", theme === "light");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

    const productData = [
      {
        id: 1,
        name: "Cozy Backpack",
        description: "A lightweight daypack perfect for city adventures and weekend getaways.",
        price: 49.99,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRuDj7OGvezS-fdSBTmKpgNAWhU7NnRipBS3F-9MntMBTaDJqbcnfEYySQePfsED9g7WAiRE8JfKpNjd0fAD7krvW1U7VuxAPGu37TvXCdR7xHtvl58-VsV",
      },
      {
        id: 2,
        name: "Classic Watch",
        description: "Timeless design with a leather strap and clean dial for everyday wear.",
        price: 129.95,
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw051248ea/product-pictures/59e733c5-d359-4101-9b02-71bab2724007_T125_617_11_041_00.png",
      },
      {
        id: 3,
        name: "Travel Sneakers",
        description: "Comfortable sneakers built for long walks and easy packing.",
        price: 79.5,
        image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-IO9416-003_1.jpg?rnd=20200526195200",
      },
      {
        id: 4,
        name: "Airpods Pro 3",
        description: "Compact buds with noise isolation and crispy audio performance.",
        price: 89.0,
        image: "https://www.apple.com/v/airpods-pro/q/images/overview/battery/case__b87ou7jna9de_large.png",
      },
      {
        id: 5,
        name: "Modern Sunglasses",
        description: "Sleek frames with UV protection for sunny days.",
        price: 59.95,
        image: "https://assets.ajio.com/medias/sys_master/root/20210605/l5yp/60ba7a75f997ddb312b6cb58/-473Wx593H-460882621-grey-MODEL.jpg",
      },
      {
        id: 6,
        name: "Leather Journal",
        description: "A premium journal for notes, sketches, and ideas on the go.",
        price: 34.0,
        image: "https://images.dailyobjects.com/marche/product-images/1705/royal-enfield-x-do-field-notebook-images/Royal-Enfield-X-DO-Field-Notebook.png?tr=cm-pad_resize,v-3?tr=cm-pad_resize,v-3,q-auto,f-auto,w-953,h-832,dpr-1",
      },
      {
        id: 7,
        name: "Travel Mug",
        description: "Keeps your coffee hot and your hands cool for hours.",
        price: 24.99,
        image: "https://rioware.in/cdn/shop/files/coffee_blue_1080x1080.webp?v=1768977880",
      },
      {
        id: 8,
        name: "Soft Throw Blanket",
        description: "Cozy throw to curl up with during movie nights.",
        price: 42.0,
        image: "https://images-cdn.ubuy.com.sa/6534d8e2d9f48968ec2675ec-maxicozy-soft-throw-blanket-for-couch.jpg",
      },
      {
        id: 9,
        name: "Minimalist Desk Lamp",
        description: "A clean, modern lamp with adjustable brightness.",
        price: 69.5,
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=70",
      },
      {
        id: 10,
        name: "Weekend Duffel",
        description: "A durable duffel bag that fits everything for a 2-day trip.",
        price: 99.99,
        image: "https://static.zara.net/assets/public/ddae/af13/0b0740ccb5c7/79d598d82cd1/13100720700-e1/13100720700-e1.jpg?ts=1764758427786&w=1024",
      },
      {
        id: 11,
        name: "Body Wash Set",
        description: "A set of premium body wash products for a refreshing cleanse.",
        price: 24.99,
        image: "https://methodproducts.com/cdn/shop/files/MTHD_MindfulMatcha_Bundle.jpg?v=1746142672&width=1200",
      },
      {
        id: 12,
        name: "Drones for Beginners",
        description: "For those looking to explore aerial photography and fun flying experiences.",
        price: 99.99,
        image: "https://www-cdn.djiits.com/dps/bc1098bb8a8799e829b95046bdf297b2.jpg",
      },
      
    ];

    const itemPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemPerPage;
    const selectedItems = productData.slice(startIndex, startIndex + itemPerPage);
    const totalPages = Math.ceil(productData.length / itemPerPage);
    const pages=[...Array(totalPages).keys()].map((num)=>num+1);


  return (
    <div className="container py-5">
      <header className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-4">
        <div className="text-center text-md-start">
          <h1 className="display-5">Product Gallery</h1>
          <p className="text-muted">Browse the collection and use the pagination controls below.</p>
        </div>

        <button
          type="button"
          className="btn btn-sm btn-outline-light btn-unique mt-md-0"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
        </button>

         <div className="">
          <button className="btn btn-outline-warning">🛒</button>

          {cart.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
            </span>
          )}
        </div>
      </header>

      <div className="row g-4">
        {selectedItems.map((item) => (
          <div key={item.id} className="col-12 col-md-6 col-lg-4">
            <div
              className={`card h-100 shadow-sm border product-card ${
                theme === "dark"
                  ? "bg-black text-white border-secondary"
                  : "bg-white text-dark border-dark"
              }`}
            >
              <div className="overflow-hidden">
                <img src={item.image} className="card-img-top img-fluid" alt={item.name} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className={`card-text ${theme === "dark" ? "text-white-50" : "text-muted"}`}>
                  {item.description}
                </p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <span className={`fw-bold ${theme === "dark" ? "text-white" : "text-dark"}`}>
                  ${item.price.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav aria-label="Page navigation" className="mt-5">
        <ul className={`pagination justify-content-center ${theme === "dark" ? "pagination-dark" : "pagination-light"}`}>
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            >
              Previous
            </button>
          </li>

          {
            pages.map((page)=>
             <button onClick={()=>setCurrentPage(page)} className="btn btn-page">{page}</button>
            )
          }

          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button
              className="page-link"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default Pagination