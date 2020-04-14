import React, { Fragment } from 'react'
import Header from '../Header/Header'
import '../Estylos/style.css'

export default function Pedidos() {
    return (
        <Fragment>
            <Header />
            <div className="container pb-5">
                <div className="row mt-3">
                    <div className="col-md-12">
                        <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Kilos</th>
                                <th scope="col">Precio</th>
                                <th scope="col"> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Aguaymanto</td>
                                <td>2</td>
                                <td>21.20</td>
                                <td><button className="btn btn-danger">X</button></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td> </td>
                                <td> </td>
                                <td>TOTAL:</td>
                                <td>21.20</td>
                            </tr>
                        </tfoot>
                        </table>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <div className="card-columns productos">
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2017/12/27/18/02/cape-gooseberry-3043259_960_720.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Aguaymanto - <small className="text-muted"> S/10.60</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2018/06/14/13/20/blueberries-3474854_960_720.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Arandano - <small className="text-muted"> S/13.20</small></h6>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2014/02/03/10/34/custard-apple-257241_960_720.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Chirimoya - <small className="text-muted"> S/7.90</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2016/07/16/20/48/apricots-1522680_960_720.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Durazno Huayco - <small className="text-muted"> S/6.60</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755_960_720.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Fresa - <small className="text-muted">Precio: S/8.60</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2016/06/16/21/50/passion-fruits-1462267__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Granadilla - <small className="text-muted"> S/4.60</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2017/10/29/03/55/guavas-2898910_960_720.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Guayaba - <small className="text-muted">Precio: S/6.20</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2017/08/10/08/26/figs-2619978_960_720.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Higo Negro - <small className="text-muted"> S/4.60</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2013/06/05/20/22/lime-116926_960_720.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Lima Omate - <small className="text-muted"> S/5.90</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://image.shutterstock.com/image-photo/peruvian-fruit-called-lucuma-lat-260nw-183221033.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Lucuma - <small className="text-muted"> S/7.90</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2016/10/07/14/11/tangerines-1721633__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Mandarina sin pepa - <small className="text-muted"> S/3.20</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2016/03/05/22/18/food-1239241__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Mango Kent - <small className="text-muted"> S/1.80</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2020/03/22/04/11/apple-with-drops-of-water-4955805__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Manzana Royal - <small className="text-muted"> S/4.60</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2017/01/04/19/41/apples-1952998__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Manzana Verde - <small className="text-muted"> S/4.60</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2015/10/12/14/53/apples-983942__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Manzana Delicia - <small className="text-muted"> S/5.30</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2016/08/12/22/38/apple-1589874__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Manzana Israel - <small className="text-muted"> S/3.00</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2014/10/15/22/06/apples-490474__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Manzana Pachacamac - <small className="text-muted"> S/4.00</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2013/11/20/22/59/green-214134__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Manzana Pero - <small className="text-muted"> S/2.40</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2015/02/23/23/07/passion-fruit-646854__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Maracuya - <small className="text-muted">Precio: S/4.00</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2017/12/29/16/34/fruit-3048001__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Naranja de Jugo - <small className="text-muted"> S/4.40</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2017/01/20/15/12/orange-1995079__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Naranja Huando - <small className="text-muted"> S/4.60</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2017/03/04/12/10/avocado-2115922__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Palta Fuente Moquegua - <small className="text-muted"> S/7.70</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2014/04/29/16/03/papaya-334461__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Papaya Selva - <small className="text-muted"> S/3.30</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2017/11/08/10/20/pears-2929885__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Pera de agua - <small className="text-muted"> S/5.90</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2015/02/14/18/10/pineapple-636562__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Piña Golden - <small className="text-muted"> S/2.50</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2016/11/10/03/01/dragon-fruit-1813426__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Pitajaya Amarilla - <small className="text-muted"> S/13.20</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2018/09/24/20/12/bananas-3700718__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Platano Bellaco - <small className="text-muted"> S/3.70</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2018/01/29/22/56/bananas-3117509__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Platano Biscocho Export - <small className="text-muted"> S/4.10</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2020/03/21/17/39/bunch-of-grapes-4954740__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Plátano Camanejo - <small className="text-muted">Precio: S/3.50</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2015/11/05/23/08/banana-1025109__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Plátano de Isla - <small className="text-muted"> S/3.30</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2015/02/27/17/58/bananas-652497__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Plátano de seda exportación - <small className="text-muted"> S/3.40</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2015/02/27/17/58/bananas-652497__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Plátano de seda (unidad) - <small className="text-muted"> S/0.33</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2017/01/09/08/31/prickly-pear-1965192__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Tuna blanca norte - <small className="text-muted"> S/7.50</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2017/01/03/18/37/prickly-pear-1950227__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Tuna roja norte - <small className="text-muted"> S/4.30</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2015/07/19/07/44/italy-851204__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Uva Italia - <small className="text-muted"> S/3.40</small></h6>
                                </div>
                            </div>
                            <div className="card shadow frutas">
                                <img src="https://cdn.pixabay.com/photo/2017/04/27/13/38/grapes-2265517__340.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Uva Red Globe - <small className="text-muted"> S/4.20</small></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
