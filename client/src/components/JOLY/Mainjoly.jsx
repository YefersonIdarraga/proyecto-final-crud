import React from "react";
import GalleryHummus from "./GalleryHummus";
import hummus from '../../assets/joly/hummus.jpg'

const Mainjoly = () => {
  return (
    <section className="mainjoly">
      <div className="cont-mainjoly">
        <h1>Hummus</h1>
        <p>
          Hasta hace un tiempo, el Hummus era un dip poco conocido en los países
          latinos pero con la tendencia de comer más simple y saludable, se está
          consumiendo cada vez más y se encuentra fácilmente en los
          supermercados. En algunos países se prepara en casa, hace parte de su
          dieta y de su cultura culinaria. Se dice que la receta es originaria
          del Antiguo Egipto y luego se fue expandiendo a países como Arabia
          Saudita, Turquía, Israel y Grecia, entre otros. Hummus en árabe
          significa garbanzo, su ingrediente principal.
        </p>
        <div className="hummus-par">
        <img className="hummus-img" src={hummus} alt="" />
        <p>
          Esta es una preparación muy rápida, simplemente lleva garbanzos, una
          pasta de ajonjolí o semillas de sésamo llamada tahini (tahina), aceite
          de oliva, agua helada, ajo, zumo de limón, agua helada, sal y paparika
          para decorar. Todos los ingredientes se mezclan en un procesador o
          licuadora, hasta obtener una especie de puré fino y suave. Esta es la
          receta básica pero hay muchas variaciones. Pueden darle su toque
          personal con otras especias como comino, curry, queso feta, cilantro o
          aguacate y para los amantes del picante, un poco de chile o chile
          chipotle que le da color y toque ahumado.
        </p><br />
        </div>
        <h2>Preparación</h2><br />
        <p>
          Una de las recetas más ricas, saludables y se hace en pocos minutos.
          Perfecto para disfrutar con vegetales frescos, pan pita o chips. Para
          prepararlo, solo hay que seguir el paso a paso! Categoría:
          <br />
          Salsas y dips Cocina: Arabe, <br />
          Mediterránea Palabra Clave: <br />
          hummus Porciones: 2 tazas. <br />
        </p><br />
        <h2>Ingredientes</h2><br />
        <GalleryHummus />
        <br />
        <br />
        <h1>Guacamole</h1>
        <p>
          La receta de Guacamole es una de esas salsa para mojar o dip que nos
          encanta preparar muchas noches para cenar. Este aperitivo tradicional
          mexicano es delicioso y además muy nutritivo, las virtudes del
          aguacate y del resto de ingredientes que lo componen, se encuentran
          dentro de los alimentos que deben incluirse en nuestra dieta diaria,
          cosa aparte es el picante, que de vez en cuando tampoco va mal.
          <br />
          Hay muchas variantes de la receta de guacamole, esta es la que
          habitualmente hacemos nosotros, por eso invitamos a nuestros lectores
          mexicanos a que nos rectifiquen o nos ilustren con sus recetas y
          consejos para hacer guacamole.
        </p><br />
        <h2>Ingredientes</h2><br />
        <ul>
          <li>2 aguacates en su punto</li>
          <li>1 tomate maduro</li>
          <li>1 cebolla tierna grande o dos pequeñas</li>
          <li>unas ramitas de cilantro</li>
          <li>zumo de limón</li>
          <li>chile</li>
          <li>pimienta negra</li>
          <li>jalapeño</li>
          <li>sal.</li>
        </ul><br />
        <h2>Preparación</h2><br />
        <p>
          Pela el tomate y córtalo en daditos retirando las semillas. Ponlo en
          un cuenco junto a los aguacates pelados y troceados, riega con unas
          gotas de limón y machaca con el tenedor. Pela y pica la cebolla en
          brunoise, lava y pica el cilantro y agrégalo a la mezcla. Finalmente,
          retira las semillas del chile y pícalo bien pequeñito. Salpimenta el
          guacamole, agrega el chile picado y si lo deseas, un poco de jalapeño,
          mezcla bien. Hay quien deja el hueso del aguacate en el centro del
          guacamole para evitar que se oxide y se ennegrezca, a nosotros no nos
          da tiempo.
        </p>
      </div>
    </section>
  );
};

export default Mainjoly;
