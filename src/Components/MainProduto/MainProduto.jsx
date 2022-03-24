import React from "react";
import { Panel, PanelGroup } from "rsuite";

import CardProduto from "./CardProduto";

const MainProduto = () => {
  return (
    <>
      <main>
        <div
          style={{
            display: "flex",
            
            paddingLeft: 10,
          }}
        >
          <PanelGroup header="Sample Panel title" shaded>
            <h2 className="text-white">Categorias</h2>
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <div className="left-sidebar">
                    <div className="panel-group category-products" id="accordian">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a data-toggle="collapse" href="#Comida">
                              <span className="badge pull-right">
                                <i className="fa fa-plus"></i>
                              </span>
                              Comida
                            </a>
                          </h4>
                        </div>
                        <div id="Comida" className="panel-collapse collapse">
                          <div className="panel-body">
                            <ul>
                              <li>
                                <a href="/produtos"> Hamburguer do tio </a>
                              </li>
                              <li>
                                <a href="/produtos"> Marmita da Tia</a>
                              </li>
                              <li>
                                <a href="/produtos"> Pizzaria do malandro </a>
                              </li>
                              <li>
                                <a href="/produtos"> Fome Zero</a>
                              </li>
                              <li>
                                <a href="/produtos"> Açaí da Ana</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a data-toggle="collapse" href="#Roupas">
                              <span className="badge pull-right">
                                <i className="fa fa-plus"></i>
                              </span>
                              Roupas
                            </a>
                          </h4>
                        </div>
                        <div id="Roupas" className="panel-collapse collapse">
                          <div className="panel-body">
                            <ul>
                              <li>
                                <a href="/produtos"> Preta Margô </a>
                              </li>
                              <li>
                                <a href="/produtos"> Favela House</a>
                              </li>
                              <li>
                                <a href="/produtos"> Bradock Marcas</a>
                              </li>
                              <li>
                                <a href="/produtos"> MM Modas</a>
                              </li>
                              <li>
                                <a href="/produtos"> King Jacaré Multimarcas</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a data-toggle="collapse" href="#Beleza">
                              <span className="badge pull-right">
                                <i className="fa fa-plus"></i>
                              </span>
                              Beleza
                            </a>
                          </h4>
                        </div>
                        <div id="Beleza" className="panel-collapse collapse">
                          <div className="panel-body">
                            <ul>
                              <li>
                                <a href="produtos"> Jhú Barber Shop</a>
                              </li>
                              <li>
                                <a href="/produtos"> Dani Piercings</a>
                              </li>
                              <li>
                                <a href="/produtos"> Salão Rozely</a>
                              </li>
                              <li>
                                <a href="/produtos"> Tranças Cavo</a>
                              </li>
                              <li>
                                <a href="/produtos"> </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a data-toggle="collapse" href="#Bares">
                              <span className="badge pull-right">
                                <i className="fa fa-plus"></i>
                              </span>
                              Bar/Depósito de bebidas
                            </a>
                          </h4>
                        </div>
                        <div id="Bares" className="panel-collapse collapse">
                          <div className="panel-body">
                            <ul>
                              <li>
                                <a href="/produtos"> Barão Bebidas LTDA</a>
                              </li>
                              <li>
                                <a href="/produtos"> Bar do Tinoco </a>
                              </li>
                              <li>
                                <a href="/produtos"> Bar da Beira</a>
                              </li>
                              <li>
                                <a href="/produtos"> </a>
                              </li>
                              <li>
                                <a href="/produtos"> </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a data-toggle="collapse" href="#eletronicos">
                              <span className="badge pull-right">
                                <i className="fa fa-plus"></i>
                              </span>
                              Eletrônicos
                            </a>
                          </h4>
                        </div>
                        <div id="eletronicos" className="panel-collapse collapse">
                          <div className="panel-body">
                            <ul>
                              <li>
                                <a href="/produtos">LP Celulares </a>
                              </li>
                              <li>
                                <a href="/produtos"> LanHouse com VideoGame</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a data-toggle="collapse" href="#tabacaria">
                              <span className="badge pull-right">
                                <i className="fa fa-plus"></i>
                              </span>
                              Tabacaria
                            </a>
                          </h4>
                        </div>
                        <div id="tabacaria" className="panel-collapse collapse">
                          <div className="panel-body">
                            <ul>
                              <li>
                                <a href="/produtos"> Tabacaria da Tia</a>
                              </li>
                              <li>
                                <a href="/produtos"> Jack Narguille</a>
                              </li>
                              <li>
                                <a href="/produtos"> Thug King</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a data-toggle="collapse" href="#festa">
                              <span className="badge pull-right">
                                <i className="fa fa-plus"></i>
                              </span>
                              Festa
                            </a>
                          </h4>
                        </div>
                        <div id="festa" className="panel-collapse collapse">
                          <div className="panel-body">
                            <ul>
                              <li>
                                <a href="/produtos">Simone Festas Descartaveis</a>
                              </li>
                              <li>
                                <a href="/produtos"> Salão de festas Jerusalem</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a data-toggle="collapse" href="#oficina">
                              <span className="badge pull-right">
                                <i className="fa fa-plus"></i>
                              </span>
                              Oficina
                            </a>
                          </h4>
                        </div>
                        <div id="oficina" className="panel-collapse collapse">
                          <div className="panel-body">
                            <ul>
                              <li>
                                <a href="/produtos">Conserto Bike</a>
                              </li>
                              <li>
                                <a href="/produtos"> Eletro Paulo</a>
                              </li>
                              <li>
                                <a href="/produtos">Renato Refrigeração</a>
                              </li>
                              <li>
                                <a href="/produtos">Dior</a>
                              </li>
                              <li>
                                <a href="/produtos">Versace</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a data-toggle="collapse" href="#cultura">
                              <span className="badge pull-right">
                                <i className="fa fa-plus"></i>
                              </span>
                              Eventos/
                              <br />
                              Arte/cultura
                            </a>
                          </h4>
                        </div>
                        <div id="cultura" className="panel-collapse collapse">
                          <div className="panel-body">
                            <ul>
                              <li>
                                <a href="/produtos"> Aula de dança</a>
                              </li>
                              <li>
                                <a href="/produtos"> Taekwondo BlackBelt Grajaú</a>
                              </li>
                              <li>
                                <a href="/produtos"> Roda de Rima</a>
                              </li>
                              <li>
                                <a href="/produtos"> Aula de Violão</a>
                              </li>
                            </ul>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PanelGroup>

            <CardProduto/>
        </div>
      </main>
    </>
  );
};

export default MainProduto;