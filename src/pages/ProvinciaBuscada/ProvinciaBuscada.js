import UseProvincia from "../../UseForm/UseProvincia";
import Barra from "../../components/Barra/Barra";
import UseHome from "../../UseForm/UseHome";

const ProvinciaBuscada = () => {
  const { MapDataBaseBuscado } = UseProvincia();
  const { usuario } = UseHome();
  const fondo = localStorage.getItem("fondo");

  return (
    <div className={fondo !== 'negro' && "BackgroundColor1" || "BackgroundColor2"}>
      <div className="VistaPrincipal">
        <div className="barra sticky-top">
          <Barra />
        </div>
        <div className="ColorDePerfil perfil">
          <div className="w-100 d-flex flex-column-reverse">
            {MapDataBaseBuscado}
          </div>
        </div>
        <div className="perfilAnuncios"></div>
      </div>
    </div>
  );
};
export default ProvinciaBuscada;
