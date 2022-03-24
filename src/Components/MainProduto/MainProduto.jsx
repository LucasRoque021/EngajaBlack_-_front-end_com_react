import React from "react";
import { PanelGroup } from "rsuite";
import "./MainProduto.css";
import CardProduto from "./CardProduto";

const MainProduto = () => {
  return (
    <>
       <h2 >Pertinho de você ...</h2>
     <section className="abc">
        <div className="painel"
        
        >
          <PanelGroup header="Sample Panel title" shaded>
            <div class="category">
            <h2 >Categorias</h2>
              <div class="row">
                
                  <div class="left-sidebar">
                    <div class="panel-group" id="accordian">
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" href="#Comida">
                              <span class="badge pull-right">
                                <i class="fa fa-plus"></i>
                              </span>
                              Comida
                            </a>
                          </h4>
                        </div>
                        <div id="Comida" class="panel-collapse collapse">
                          <div class="panel-body">
                            <ul>
                              <li>
                                <a href=""> Hamburguer do tio </a>
                              </li>
                              <li>
                                <a href=""> Marmita da Tia</a>
                              </li>
                              <li>
                                <a href=""> Pizzaria do malandro </a>
                              </li>
                              <li>
                                <a href=""> Fome Zero</a>
                              </li>
                              <li>
                                <a href=""> Açaí da Ana</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" href="#Roupas">
                              <span class="badge pull-right">
                                <i class="fa fa-plus"></i>
                              </span>
                              Roupas
                            </a>
                          </h4>
                        </div>
                        <div id="Roupas" class="panel-collapse collapse">
                          <div class="panel-body">
                            <ul>
                              <li>
                                <a href=""> Preta Margô </a>
                              </li>
                              <li>
                                <a href=""> Favela House</a>
                              </li>
                              <li>
                                <a href=""> Bradock Marcas</a>
                              </li>
                              <li>
                                <a href=""> MM Modas</a>
                              </li>
                              <li>
                                <a href=""> King Jacaré Multimarcas</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" href="#Beleza">
                              <span class="badge pull-right">
                                <i class="fa fa-plus"></i>
                              </span>
                              Beleza
                            </a>
                          </h4>
                        </div>
                        <div id="Beleza" class="panel-collapse collapse">
                          <div class="panel-body">
                            <ul>
                              <li>
                                <a href=""> Jhú Barber Shop</a>
                              </li>
                              <li>
                                <a href=""> Dani Piercings</a>
                              </li>
                              <li>
                                <a href=""> Salão Rozely</a>
                              </li>
                              <li>
                                <a href=""> Tranças Cavo</a>
                              </li>
                              <li>
                                <a href=""> </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" href="#Bares">
                              <span class="badge pull-right">
                                <i class="fa fa-plus"></i>
                              </span>
                              Bar/Depósito de bebidas
                            </a>
                          </h4>
                        </div>
                        <div id="Bares" class="panel-collapse collapse">
                          <div class="panel-body">
                            <ul>
                              <li>
                                <a href=""> Barão Bebidas LTDA</a>
                              </li>
                              <li>
                                <a href=""> Bar do Tinoco </a>
                              </li>
                              <li>
                                <a href=""> Bar da Beira</a>
                              </li>
                              <li>
                                <a href=""> </a>
                              </li>
                              <li>
                                <a href=""> </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" href="#eletronicos">
                              <span class="badge pull-right">
                                <i class="fa fa-plus"></i>
                              </span>
                              Eletrônicos
                            </a>
                          </h4>
                        </div>
                        <div id="eletronicos" class="panel-collapse collapse">
                          <div class="panel-body">
                            <ul>
                              <li>
                                <a href="">LP Celulares </a>
                              </li>
                              <li>
                                <a href=""> LanHouse com VideoGame</a>
                              </li>
                              <li>
                                <a href=""> </a>
                              </li>
                              <li>
                                <a href=""></a>
                              </li>
                              <li>
                                <a href=""> </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" href="#tabacaria">
                              <span class="badge pull-right">
                                <i class="fa fa-plus"></i>
                              </span>
                              Tabacaria
                            </a>
                          </h4>
                        </div>
                        <div id="tabacaria" class="panel-collapse collapse">
                          <div class="panel-body">
                            <ul>
                              <li>
                                <a href=""> Tabacaria da Tia</a>
                              </li>
                              <li>
                                <a href=""> Jack Narguille</a>
                              </li>
                              <li>
                                <a href=""> Thug King</a>
                              </li>
                              <li>
                                <a href=""></a>
                              </li>
                              <li>
                                <a href=""> </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" href="#festa">
                              <span class="badge pull-right">
                                <i class="fa fa-plus"></i>
                              </span>
                              Festa
                            </a>
                          </h4>
                        </div>
                        <div id="festa" class="panel-collapse collapse">
                          <div class="panel-body">
                            <ul>
                              <li>
                                <a href="">Simone Festas Descartaveis</a>
                              </li>
                              <li>
                                <a href=""> Salão d festas Jerusalem</a>
                              </li>
                              <li>
                                <a href=""></a>
                              </li>
                              <li>
                                <a href=""></a>
                              </li>
                              <li>
                                <a href=""></a>
                              </li>
                              <li>
                                <a href=""></a>
                              </li>
                              <li>
                                <a href=""></a>
                              </li>
                              <li>
                                <a href=""></a>
                              </li>
                              <li>
                                <a href=""></a>
                              </li>
                              <li>
                                <a href=""></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" href="#oficina">
                              <span class="badge pull-right">
                                <i class="fa fa-plus"></i>
                              </span>
                              Oficina
                            </a>
                          </h4>
                        </div>
                        <div id="oficina" class="panel-collapse collapse">
                          <div class="panel-body">
                            <ul>
                              <li>
                                <a href="">Conserto Bike</a>
                              </li>
                              <li>
                                <a href=""> Eletro Paulo</a>
                              </li>
                              <li>
                                <a href="">Renato Refrigeração</a>
                              </li>
                              <li>
                                <a href="">Dior</a>
                              </li>
                              <li>
                                <a href="">Versace</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" href="#cultura">
                              <span class="badge pull-right">
                                <i class="fa fa-plus"></i>
                              </span>
                              Eventos/
                              <br />
                              Arte/cultura
                            </a>
                          </h4>
                        </div>
                        <div id="cultura" class="panel-collapse collapse">
                          <div class="panel-body">
                            <ul>
                              <li>
                                <a href=""> Aula de dança</a>
                              </li>
                              <li>
                                <a href=""> Taekwondo BlackBelt Grajaú</a>
                              </li>
                              <li>
                                <a href=""> Roda de Rima</a>
                              </li>
                              <li>
                                <a href=""> Aula de Violão</a>
                              </li>
                              <li>
                                <a href=""></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                 
                </div>
              </div>
            </div>
          </PanelGroup>
        </div>
         <section className="def">
          <div className="container-flex">
          <CardProduto/>
          
              
          
          </div>
          </section>
          </section>
    </>
  );
};

export default MainProduto;