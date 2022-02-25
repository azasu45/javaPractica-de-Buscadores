import { useState } from 'react';

let array = [
  {
    title: '78',
  },
  {
    title: '7',
  },
  {
    title: '1',
  },
  {
    title: '2',
  },
  {
    title: '3',
  },
  {
    title: '4',
  },
  {
    title: '5',
  },
];

function LinearSearch({value, array}) {
  let encontrado = false
  let index = 0;
  let position = -1;

  return position;
}

function App() {
  
  const [inputValue,setInputValue]=useState(0)
  
  function handleValueChange(event){
    setInputValue(event.target.value)
  }

  return (
  
    <div className="App">
      
      <input id="search" type="number" onChange={handleValueChange}/>
  
      <LinearSearch value={inputValue} array={array} />

      <header className="barra-navegacion">
        <nav className="nav-barra">
          <ul className="ul-barra">
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="">feactures</a>
            </li>
            <li>
              <a href="">product</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="home" className="section-home">
        <div className="logo-expresa"></div>
        <div className="text-containt">
          <h1 className="array">
            {array.map((item, i, array) => {
              const ultimo = array[array.length - 1];
              const primero = array[0];

              function secuencial() {}
              return <></>;
            })}
          </h1>

          <h1 className="title">Mi Empresa</h1>
          <h2 className="sub-title">More</h2>
          <p className="vision">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>

      <section className="section-feacture">
        <div className="containt-feacture">
          <div className="logo-feacture"></div>
          <div className="containt-text-feacture">
            <h1 className="title-feacture">1 Lorem Ipsum</h1>
            <p className="p-feacture">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ultricies est vitae ante tincidunt accumsan. Suspendisse sit amet
              rutrum enim. In pellentesque rhoncus dui et mollis. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Suspendisse feugiat diam vel erat aliquet, nec
              egestas orci placerat. Sed quis porttitor risus, ut posuere justo.
              Donec lacus neque, ultrices vel ante vel, dapibus accumsan est.
              Vivamus sodales lorem odio, sit amet ornare eros posuere accumsan.
              Vivamus molestie finibus tortor vitae accumsan. Praesent nec ipsum
              eu nunc sollicitudin viverra. Quisque nec urna sed metus commodo
              vehicula eu auctor tortor. Nullam at vehicula sapien.
            </p>
          </div>
        </div>
        <div className="containt-feacture">
          <div className="logo-feacture"></div>
          <div className="containt-text-feacture">
            <h1 className="title-feacture">2 Lorem Ipsum</h1>
            <p className="p-feacture">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ultricies est vitae ante tincidunt accumsan. Suspendisse sit amet
              rutrum enim. In pellentesque rhoncus dui et mollis. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Suspendisse feugiat diam vel erat aliquet, nec
              egestas orci placerat. Sed quis porttitor risus, ut posuere justo.
              Donec lacus neque, ultrices vel ante vel, dapibus accumsan est.
              Vivamus sodales lorem odio, sit amet ornare eros posuere accumsan.
              Vivamus molestie finibus tortor vitae accumsan. Praesent nec ipsum
              eu nunc sollicitudin viverra. Quisque nec urna sed metus commodo
              vehicula eu auctor tortor. Nullam at vehicula sapien.
            </p>
          </div>
        </div>
        <div className="containt-feacture">
          <div className="logo-feacture"></div>
          <div className="containt-text-feacture">
            <h1 className="title-feacture">3 Lorem Ipsum</h1>
            <p className="p-feacture">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ultricies est vitae ante tincidunt accumsan. Suspendisse sit amet
              rutrum enim. In pellentesque rhoncus dui et mollis. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Suspendisse feugiat diam vel erat aliquet, nec
              egestas orci placerat. Sed quis porttitor risus, ut posuere justo.
              Donec lacus neque, ultrices vel ante vel, dapibus accumsan est.
              Vivamus sodales lorem odio, sit amet ornare eros posuere accumsan.
              Vivamus molestie finibus tortor vitae accumsan. Praesent nec ipsum
              eu nunc sollicitudin viverra. Quisque nec urna sed metus commodo
              vehicula eu auctor tortor. Nullam at vehicula sapien.
            </p>
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-containt">
          <img
            className="img-product"
            src="https://t1.rg.ltmcdn.com/es/posts/6/2/3/brownie_de_chocolate_51326_orig.jpg"
          />
          <div className="text-containt-product">
            <h1 className="title-product">Brownie</h1>
            <p className="price-product">1$</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
