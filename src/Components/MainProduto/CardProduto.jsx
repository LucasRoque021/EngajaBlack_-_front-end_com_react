import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import logo from "../../assets/img/Engajablack_logo.png";
import { getProdutos } from "../../services/ProdutoVendedorService";

const CardProduto = () => {

  const [produto, setProduto] = useState([])

  useEffect(() => { getProdutos().then((res) => setProduto(res))
    .catch((erro) => console.log(erro))},[])

  return (
    <div
      style={{
        display: "flex",

        paddingLeft: 10,
      }}
    >
      <div className="">
        <h2 className="titulo">Pertinho de você ...</h2>

        <div className="col-sm-4">
          <div className="card-toggle">
          {produto.map((produto) =>(
            <div className="card-group" key={produto.id}>
              <div className="bg-dark text-white m-3 p-3">

                  <div className="products">
                  <div className="productinfo text-center">
                    <img id="logo" src={logo} alt="Logotipo" />
                    <h2 className="text-warning">R${produto.preco.toFixed(2).replace(".",",")}</h2>
                    <p>{produto.nomeProduto}</p>
                    <a href="/produtos" className="btn btn-default add-to-cart">
                      <i></i>Ver mais informações
                    </a>
                  </div>
                </div>
              </div>
            </div>
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduto;